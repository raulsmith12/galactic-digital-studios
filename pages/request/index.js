import Head from 'next/head';
import Script from 'next/script';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";

const Request = () => {
    return (
        <>
            <Head>
                <title>Request Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="We get that after the pandemic that face-to-face interaction isn't always accessible or easy. That's why Galactic Digital Studios is able to take service requests by phone, email, or contact form." />
                <meta name="keywords" content="request service, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/" />
                <meta property="og:title" content="Request Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="og:description" content="We get that after the pandemic that face-to-face interaction isn't always accessible or easy. That's why Galactic Digital Studios is able to take service requests by phone, email, or contact form." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/" />
                <meta property="twitter:title" content="Request Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="twitter:description" content="We get that after the pandemic that face-to-face interaction isn't always accessible or easy. That's why Galactic Digital Studios is able to take service requests by phone, email, or contact form." />
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
                    <InsidePageHeader title="Request Services" />
                </div>
                <div className="row">
                    <div className="col">
                        <p className="display-7 mx-5 px-5">Using the form below, let us know what service of ours you are requesting today:</p>
                        <RequestForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Request;