import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Transition from '../components/Transition';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/owl.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, [])

  return (
    <>
      <Head>
        <title>Galactic Digital Studios</title>
        <meta name="description" content="Galactic Digital Studios is your one-stop shop for website development, app development, search engine optimization, content management, database management, graphic and logo design, and much more!" />
        <meta name="keywords" content="website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />
        <link rel="icon" href="favicon.ico" />
      </Head>
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
    </>
  )
}

export default MyApp;
