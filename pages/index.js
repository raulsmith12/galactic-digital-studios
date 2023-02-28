import Head from 'next/head';
import Script from 'next/script';
import HomeSlider from '../components/HomeSlider';
import HomeSections from '../components/HomeSections';
import HomeContactForm from '../components/HomeContactForm';

const Home = () => {
  return (
    <>
      <Head>
        <title>Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
        <meta name="description" content="Galactic Digital Studios is your one-stop shop for website development, app development, search engine optimization, content management, database management, graphic and logo design, and much more!" />
        <meta name="keywords" content="website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-B8904LJMQQ"/>
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
      <div className="container-fluid px-0 pb-4">
        <div className="row">
          <div className="col px-0">
            <HomeSlider />
          </div>
        </div>
        <HomeSections />
        <HomeContactForm />
      </div>
    </>
  )
}

export default Home;