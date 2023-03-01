import Head from 'next/head';
import Script from 'next/script';

const Home = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
        <meta name="description" content="The page you are looking for cannot be found. Please try typing that in again." />
        <meta name="keywords" content="404, page not found" />
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
      <div className="container-fluid px-0 pb-4 mb-4">
        <div className="row">
            <div className="col-md-4 col-sm-12 text-center py-5">
                <h1 className="display-1">
                    Page not found
                </h1>
                <h3 className="display-2">404</h3>
            </div>
            <div className="col-md-8 col-sm-12 text-center py-4" style={{ backgroundImage: 'url("https://galacticdigitalstudios.com/img/banner-1.jpg")', backgroundRepeat: 'no-repeat', textShadow: '1px 1px 5px #000' }}>
                <h3 className="display-3 text-white">It appears you are a little lost. Let's see if we can't get you back on track. Re-type the page you are trying to access in the address bar or use the links in the menu to find the page you are looking for.</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;