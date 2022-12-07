import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/owl.css';
import { useEffect } from 'react';
import Transition from '../components/Transition';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, [])

  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col pe-0">
          <main className="main">
            <Header />
            <Transition>
              <Component {...pageProps} />
            </Transition>
            <div className="row mb-3 pb-3">&nbsp;</div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

export default MyApp;
