import { GlobalStyle } from '../styles/global'
import { AppProps } from 'next/app'
import { storeWrapper } from '../store'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default storeWrapper.withRedux(App)