import Head from 'next/head';
import Script from 'next/script';
import InsidePageHeader from "../../components/InsidePageHeader";
import Graphics from "../../components/Graphics";
import Logos from "../../components/Logos";
import Websites from "../../components/Websites";

const Examples = () => {
    return (
        <>
            <Head>
                <title>Examples - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="These are but a few examples of what Galactic Digital Studios can bring to the table for your business. Need a new logo? We've got you. Need graphic work done? We can do that too. A new website? Yep, we've got that too." />
                <meta name="keywords" content="website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/examples" />
                <meta property="og:title" content="Examples - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="og:description" content="These are but a few examples of what Galactic Digital Studios can bring to the table for your business. Need a new logo? We've got you. Need graphic work done? We can do that too. A new website? Yep, we've got that too." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/examples" />
                <meta property="twitter:title" content="Examples - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="twitter:description" content="These are but a few examples of what Galactic Digital Studios can bring to the table for your business. Need a new logo? We've got you. Need graphic work done? We can do that too. A new website? Yep, we've got that too." />
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
            <div className="container-fluid pb-5">
                <div className="row">
                    <InsidePageHeader title="Examples" />
                </div>
                <div className="row mb-5 pb-5">
                    <div className="col">
                        <div className="mx-3 px-3">
                            <h3>
                                <img src="https://galacticdigitalstudios.com/img/gds-logo-favicon.png" height="35" alt="Galactic Digital Studios short icon" />
                                Websites
                            </h3>
                            <Websites />
                        </div>
                        <hr />
                        <div className="mx-3 px-3">
                            <h3>
                                <img src="https://galacticdigitalstudios.com/img/gds-logo-favicon.png" height="35" alt="Galactic Digital Studios short icon" />
                                Logos
                            </h3>
                            <Logos />
                        </div>
                        <hr />
                        <div className="mx-3 px-3">
                            <h3>
                                <img src="https://galacticdigitalstudios.com/img/gds-logo-favicon.png" height="35" alt="Galactic Digital Studios short icon" />
                                Graphics
                            </h3>
                            <Graphics />
                        </div>
                        <hr />
                        <div className="mx-3 px-3">
                            <div className="container-fluid">
                                <div className="row text-center">
                                    <div className="col-6">
                                        To view more examples from Raul Smith, please visit <a href="https://github.com/raulsmith12" target="_blank">his Github profile.</a>
                                    </div>
                                    <div className="col-6">
                                        Orion&rsquo;s Github is coming soon
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Examples;