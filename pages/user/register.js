import React from 'react';
import NextLink from 'next/link';
import { Button } from '@mui/material';
import Layout from '../../components/Layout';

const Register = () => {
    return (
        <Layout>
            <h1>Register</h1>
            <NextLink href="/" passHref>
                <Button variant="contained">Back to Home</Button>
            </NextLink>
        </Layout>
    );
};

export default Register;
