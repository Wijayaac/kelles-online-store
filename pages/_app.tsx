import '../styles/style.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle') : null
  }, [])
  return <>

    <Component {...pageProps} />
  </>
}
export default MyApp
