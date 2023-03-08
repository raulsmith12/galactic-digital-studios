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
        <meta name="title" content="Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
        <meta name="description" content="Galactic Digital Studios is your one-stop shop for website development, app development, search engine optimization, content management, database management, graphic and logo design, and much more!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://galacticdigitalstudios.com/" />
        <meta property="og:title" content="Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
        <meta property="og:description" content="Galactic Digital Studios is your one-stop shop for website development, app development, search engine optimization, content management, database management, graphic and logo design, and much more!" />
        <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://galacticdigitalstudios.com/" />
        <meta property="twitter:title" content="Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
        <meta property="twitter:description" content="Galactic Digital Studios is your one-stop shop for website development, app development, search engine optimization, content management, database management, graphic and logo design, and much more!" />
        <meta property="twitter:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />
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
      <div className="container-fluid px-0 pb-5 mb-1">
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