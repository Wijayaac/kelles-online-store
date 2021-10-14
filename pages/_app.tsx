import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle') : null
  }, [])
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
export default MyApp
