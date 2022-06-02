import React from 'react';
import NextLink from 'next/link';
import { Button } from '@mui/material';
import Layout from '../components/Layout';

const Hire = () => {
    return (
        <Layout>
            <h1>Hire Us</h1>
            <NextLink href="/" passHref>
                <Button variant="contained">Back to Home</Button>
            </NextLink>
        </Layout>
    );
};

export default Hire;
