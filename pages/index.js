import { Alert } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { client } from '../utils/client';
import MainScreen from './MainScreen';

export default function Home() {
    const [state, setState] = useState({
        banners: [],
        error: '',
        loading: true,
    });
    const { loading, error, banners } = state;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const banners = await client.fetch(`*[_type=="herobanner"]`);
                setState({ banners, loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
            }
        };
        fetchData();
    }, []);
    return (
        <Layout>
            {loading ? (
                <ThreeDots />
            ) : error ? (
                <Alert error={error} />
            ) : (
                <MainScreen banners={banners} />
            )}
        </Layout>
    );
}
