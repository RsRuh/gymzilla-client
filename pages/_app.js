
import Footer from '../components/Footer'
import Header from '../components/Header'
import AuthProvider from '../context/AuthProvider'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return <div className='max-w-screen-2xl mx-auto'>
    <AuthProvider>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
    </AuthProvider>
  </div>
}
