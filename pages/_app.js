import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Transition from '../components/Transition';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/owl.css';
import CookieConsent from "react-cookie-consent";

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
        <CookieConsent
          location="bottom"
          buttonText="Okay"
          buttonStyle={{ backgroundColor: "#232323", color: "white" }}
          style={{ background: "linear-gradient(180deg, rgba(222,223,223,1) 0%, rgba(155,154,155,1) 35%, rgba(0,0,0,1) 100%)", zIndex: 9999 }}
        >
          Galactic Digital Studios uses cookies to better the web experience for everyone. We have a strict privacy policy that prohibits us from selling user information to third party advertisers. Please see our privacy policy for more information.
        </CookieConsent>
      </main>
    </div>
  )
}

export default MyApp;
