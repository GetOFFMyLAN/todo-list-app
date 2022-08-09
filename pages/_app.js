import '@/styles/globals.css'
import '@/styles/custom.scss'
import store from '@/store/index'
import { Provider } from 'react-redux'
import Head from 'next/head'

function TodoApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default TodoApp
