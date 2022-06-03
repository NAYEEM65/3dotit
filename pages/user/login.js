import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Container, TextField } from '@mui/material';
import Layout from '../../components/Layout';
import classes from '../../utils/classes';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <Layout>
            <h1>Login</h1>
            <Container className={classes.login}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="filled-search" label="Email" type="email" variant="filled" />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <Box>
                        <Button
                            sx={{ width: '10ch', margin: '10px' }}
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                        <Button sx={{ margin: '10px' }} variant="contained" color="primary">
                            <FcGoogle /> Login with Google
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default Login;
