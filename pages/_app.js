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
      </main>
    </div>
  )
}

export default MyApp;
