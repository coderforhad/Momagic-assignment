import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import { wrapper } from 'src/store/storeWrapper';
import 'simplebar-react/dist/simplebar.min.css';
import { useGetAccessTokenMutation } from "src/features/auth/authApi";
import { useGetThemeInfoMutation } from "src/features/themeData/themeDataApi";
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from "../store/store"

const clientSideEmotionCache = createEmotionCache();
function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();
  const [getAccessToken] = useGetAccessTokenMutation();
  const [getThemeData, {data: themeData}] = useGetThemeInfoMutation()

  useEffect(() => {
    getAccessToken()
  }, [])

  useEffect(() => {
    getThemeData()
  }, [])

  console.log("From APP", themeData)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          MoMagic
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
          </Provider>
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
