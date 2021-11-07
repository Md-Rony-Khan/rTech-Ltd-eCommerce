import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

function InputForm({ name, type, label, required, ref }) {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field }) => (
                    <TextField {...field} type={type} label={label} required={required} ref={ref} />
                )}
                /* as={TextField}
                required={required}
                label={label} */
                defaultValue=""
                name={name}
                control={control}
                fullWidth
            />
        </Grid>
    );
}

export default InputForm;
