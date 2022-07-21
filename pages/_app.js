import '../styles/globals.css'
import '@/styles/custom.scss'
import store from '@/store/index'
import { Provider } from 'react-redux'

function TodoApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default TodoApp
