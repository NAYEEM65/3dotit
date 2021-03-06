import '../styles/globals.css';
import '../styles/contact.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StoreProvider } from '../utils/Store';
import { SnackbarProvider } from 'notistack';

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
    return (
        <CacheProvider value={emotionCache}>
            <SnackbarProvider anchorOrigin={{ vartical: 'top', horizontal: 'center' }}>
                <StoreProvider>
                    <Component {...pageProps} />
                </StoreProvider>
            </SnackbarProvider>
        </CacheProvider>
    );
}

export default MyApp;
