import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Transition from '../components/Transition';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/owl.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, [])

  return (
    <div className="container-fluid px-0">
      <main className="main">
        <Header />
        <div className="row mx-0">
          <div className="col px-0">
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </div>
        </div>
        <div className="row mb-3 pb-3 mx-0">
          <div className="col px-0">
            &nbsp;
          </div>
        </div>
        <Footer />
        <div className="alert alert-info alert-dismissible fade show fixed-bottom" role="alert">
          <p>Galactic Digital Studios uses cookies to better the web experience for everyone. We have a strict privacy policy that prohibits us from selling user information to third party advertisers. Please see our <Link href="/privacy">Privacy Policy</Link> for more information.</p>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
        </div>
      </main>
    </div>
  )
}

export default MyApp;
