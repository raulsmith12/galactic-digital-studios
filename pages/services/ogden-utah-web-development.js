import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Ogden Utah Web Development - Galactic Digital Studios</title>
                <meta name="description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta name="keywords" content="website design, website development, web development, web design, Ogden, Utah" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-web-development" />
                <meta property="og:title" content="Ogden Utah Web Development - Galactic Digital Studios" />
                <meta property="og:description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-web-development" />
                <meta property="twitter:title" content="Ogden Utah Web Development - Galactic Digital Studios" />
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
                    <InsidePageHeader title="Ogden Utah Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For Junction City</h2>
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
                        <p className="h4">With web development services from Galactic Digital Studios, creating and maintaining a website has never been more hands-on and more involved. We believe that it is your website, and therefore, you should have a say in what it wants to tell the world about you and your business. Galactic Digital Studios wants your website to say loud and proud that you are here and in business.</p>
                        <p className="h4">Ogden, Utah, is considered in a lot of ways the birthplace of Galactic Digital Studios. Founder and head of development Raul Smith was born and raised in Ogden, and he has not forgotten where he came from. From the beautiful eastern and northern mountains that nestle up against the region to historic 25th Street and all of the hustle and bustle it offers, to the rich and vibrant Union Station that is home to so much of Ogden&rsquo;s history, shouldn&rsquo;t your business also have something to offer to such a historically rich town?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">Now it can, with web development services from Galactic Digital Studios, ranging from creating an entire new site from scratch to simple maintenance, our team of developers will have your business and its future growth firmly in mind. We offer comprehensive web development that takes your concept to the world wide web, including stunning frontend design, backend architecture, and even helping coach you on how to maintain your own content. Again, it should be your website, and we want you to take ownership of it.</p>
                        <p className="h4">Plus in addition to all of this, Galactic Digital Studios also includes in its web development services our search engine optimization package, where we set you up with a clear path to organic growth. We can&rsquo;t promise that you will hit the first page on Google right away, but we can promise that we will do everything we can to get you as far up the search rankings as we can take you. We also help with Facebook and Google ad campaigns that are designed to get more eyeballs on your product and your website.</p>
                        <h6 className="h4">Stop delaying and contact our web development team today using the form below. We look forward to working with you.</h6>
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