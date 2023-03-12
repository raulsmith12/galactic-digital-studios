import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Salt Lake City Utah Web Development - Galactic Digital Studios</title>
                <meta name="description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta name="keywords" content="website design, website development, web development, web design, Salt Lake City, Utah" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-web-development" />
                <meta property="og:title" content="Salt Lake City Utah Web Development - Galactic Digital Studios" />
                <meta property="og:description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-web-development" />
                <meta property="twitter:title" content="Salt Lake City Utah Web Development - Galactic Digital Studios" />
                <meta property="twitter:description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
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
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Salt Lake City Utah Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For The Salt Lake Valley</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/web-development-l.jpg" width="100%" alt="Two monitors with web development code on them" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">Web development is a crucial part of any online branding strategy. Whether you are looking for just a simple site that says &ldquo;We are here, and here is how to get in touch with us&rdquo; or if you are looking for a site that looks to not only announce your online presence but encourage consumers to purchase something online from you, Galactic Digital Studios is here to fulfil your professional web development needs.</p>
                        <p className="h4">Salt Lake City, Utah, now has a professional web development company that works with and for the small business owner. Whether you are just looking to work out of your home in the Avenues or you&rsquo;re a shop at the Gateway or City Creek center that needs a little advertising, our team of web development professionals is here to help.</p>
                        <p className="h4">Members of our team have worked with a number of small businesses throughout the Salt Lake valley, both in a small capacity and in helping develop a fully fledged website. We are definitely no stranger in helping small businesses in the Salt Lake City, Utah area make their online presence known.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">Small business web development packages through Galactic Digital Studios includes full building and maintenance of the website for one year, hosting, registration, and technical support. We also provide your business with email support for as long as hosting is provided, including setting up email addresses and forwarding.</p>
                        <p className="h4">But Galactic Digital Studios&rsquo; web development packages do not end there. We also offer comprehensive Google Analytics support and search engine optimization to help your website organically create growth.</p>
                        <h6 className="h4">So if you are in the market for web development in Salt Lake City, Utah, fill out the form below and contact Galactic Digital Studios today.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/web-development-r.jpg" width="100%" alt="Man working on web development on laptop" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <RequestForm selectedService="website" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;