import { Button, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { commerce } from '../lib/commerce';
import InputForm from './InputForm';

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    console.log(shippingCountries);

    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({
        id: code,
        label: name,
    }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({
        id: code,
        label: name,
    }));

    const options = shippingOptions.map((sO) => ({
        id: sO.id,
        label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
    }));

    const fetchShippingCountries = async (checkoutTokenId) => {
        // eslint-disable-next-line no-shadow
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    };

    const fetchSubdivisions = async (countryCode) => {
        // eslint-disable-next-line no-shadow
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    };

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        // eslint-disable-next-line no-shadow
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {
            country,
            region,
        });

        setShippingOptions(options);
        setShippingOption(options[0].id);
    };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision)
            fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shippingSubdivision]);

    return (
        <div>
            <Typography
                variant="h6"
                gutterBottom
                style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
            >
                Address Form
            </Typography>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit((data) =>
                        next({
                            ...data,
                            shippingCountry,
                            shippingSubdivision,
                            shippingOption,
                        })
                    )}
                >
                    <Grid container spacing={3}>
                        <InputForm required name="firstName" label="First Name" />
                        <InputForm required name="lastName" label="Last Name" />
                        <InputForm required name="address1" label="Address" />
                        <InputForm required name="email" label="Email" />
                        <InputForm required name="city" label="City" />
                        <InputForm required name="zip" label="Zip / Postal code" />
                        <Grid item xm={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select
                                value={shippingCountry}
                                fullWidth
                                onChange={(e) => setShippingCountry(e.target.value)}
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xm={12} sm={6}>
                            <InputLabel>Shipping SubDivision</InputLabel>
                            <Select
                                value={shippingSubdivision}
                                fullWidth
                                onChange={(e) => setShippingSubdivision(e.target.value)}
                            >
                                {subdivisions.map((SubDivision) => (
                                    <MenuItem key={SubDivision.id} value={SubDivision.id}>
                                        {SubDivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xm={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select
                                value={shippingOption}
                                fullWidth
                                onChange={(e) => setShippingOption(e.target.value)}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/cart" variant="outlined">
                            Back To Cart
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Next
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AddressForm;
