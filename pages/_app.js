import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Transition from '../components/Transition';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
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
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B8904LJMQQ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
    </>
  )
}

export default MyApp;
