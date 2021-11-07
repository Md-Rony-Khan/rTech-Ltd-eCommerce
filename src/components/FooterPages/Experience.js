// eslint-disable-next-line prettier/prettier
import { Button, Container, Grid, Paper, TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import useStyles from './styles';

function Experience() {
    const classes = useStyles();
    const initialValues = {
        name: '',
        email: '',
        text: '',
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required('Required'),
        email: Yup.string().email('Enter valid email').required('Required'),
        text: Yup.string().min(20, "It's too short").max(300, "It's too big").required('Required'),
    });
    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
    };

    return (
        <div>
            <Container maxWidth="lg" className={classes.rootCon}>
                <Grid sm={12}>
                    <Paper className={classes.paperStyle}>
                        <Grid align="center">
                            <h2 className={classes.headerStyle}>Submit Your Experience</h2>
                        </Grid>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {(props) => (
                                <Form>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        name="name"
                                        label="Name"
                                        placeholder="Enter your name"
                                        helperText={<ErrorMessage name="name" />}
                                    />
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        name="email"
                                        label="Email"
                                        placeholder="Enter your email"
                                        helperText={<ErrorMessage name="email" />}
                                    />
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        name="text"
                                        label="Details of your experience"
                                        placeholder="Enter your message"
                                        helperText={<ErrorMessage name="text" />}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={props.isSubmitting}
                                        color="primary"
                                        style={{ marginTop: '10px' }}
                                    >
                                        {props.isSubmitting ? 'Loading' : 'Submit'}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default Experience;
