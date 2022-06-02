import { createTheme } from '@mui/material/styles';
import Head from 'next/head';
import React, { useContext } from 'react';
import NextLink from 'next/link';
import {
    AppBar,
    Box,
    Button,
    Container,
    CssBaseline,
    Link,
    Switch,
    ThemeProvider,
    Toolbar,
    Typography,
} from '@mui/material';
import classes from '../utils/classes';
import { Store } from '../utils/Store';
import jsCookie from 'js-cookie';
import MainLogo from '../assets/3dotit.svg';
import Image from 'next/image';

const Layout = ({ title, description, children }) => {
    const { state, dispatch } = useContext(Store);
    const { darkMode } = state;
    const theme = createTheme({
        components: {
            MuiLink: {
                defaultProps: {
                    underline: 'none',
                },
            },
        },
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem, 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem, 0',
            },
        },
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        },
    });
    const handleDarkModeChange = () => {
        dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
        const newDarkMode = !darkMode;
        jsCookie.set('darkMode', newDarkMode ? 'ON' : 'OFF');
    };

    return (
        <>
            <Head>
                <title>{title ? `${title} - 3Dot IT` : '3Dot IT'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" sx={classes.appbar}>
                    <Toolbar sx={classes.toolbar}>
                        <Box display="flex" alignItems="center">
                            <NextLink href="/" passHref>
                                <Link>
                                    <Image width={60} height={60} src={MainLogo} alt="3dotit" />
                                </Link>
                            </NextLink>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <NextLink href="/" passHref>
                                <Link>
                                    <Typography>Home</Typography>
                                </Link>
                            </NextLink>
                            <NextLink href="/services" passHref>
                                <Link>
                                    <Typography>Services</Typography>
                                </Link>
                            </NextLink>
                            <NextLink href="/hire" passHref>
                                <Link>
                                    <Typography>Hire Us</Typography>
                                </Link>
                            </NextLink>
                            <NextLink href="/about" passHref>
                                <Link>
                                    <Typography>About Us</Typography>
                                </Link>
                            </NextLink>
                            <NextLink href="/contact" passHref>
                                <Link>
                                    <Typography>Contact</Typography>
                                </Link>
                            </NextLink>
                        </Box>
                        <Box>
                            <Button sx={{ marginRight: '4px' }}>
                                <NextLink href="/user/login" passHref>
                                    <Link>Login</Link>
                                </NextLink>
                            </Button>
                            <Button variant="contained">
                                <NextLink href="/user/register" passHref>
                                    <Link>Register</Link>
                                </NextLink>
                            </Button>
                            <Switch checked={darkMode} onChange={handleDarkModeChange}></Switch>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Container component="main" sx={classes.main}>
                    {children}
                </Container>
                <Box component="footer" sx={classes.footer}>
                    <Typography>
                        &copy; {new Date().getFullYear()} All rights reserved || 3DOTIT
                    </Typography>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Layout;
