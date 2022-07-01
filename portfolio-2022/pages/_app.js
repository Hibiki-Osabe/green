import '../styles/globals.css'
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
App.getInitialProps = async () => ({ pageProps: {} })

// export default MyApp
export default App