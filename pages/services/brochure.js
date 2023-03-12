import Head from 'next/head';
import Script from 'next/script';
import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";

const Web = () => {
    return (
        <>
            <Head>
                <title>Brochure Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="Whether you are looking to design a flyer that is advertising an upcoming event, a printed menu for your restaurant, or even a pamphlet chock full of information, Galactic Digital Studios is able to help you create your amazing brochure." />
                <meta name="keywords" content="brochure design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/brochure" />
                <meta property="og:title" content="Brochure Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="og:description" content="Whether you are looking to design a flyer that is advertising an upcoming event, a printed menu for your restaurant, or even a pamphlet chock full of information, Galactic Digital Studios is able to help you create your amazing brochure." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/brochure" />
                <meta property="twitter:title" content="Brochure Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="twitter:description" content="Whether you are looking to design a flyer that is advertising an upcoming event, a printed menu for your restaurant, or even a pamphlet chock full of information, Galactic Digital Studios is able to help you create your amazing brochure." />
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
                    <InsidePageHeader title="Brochure Design" />
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col d-block gap-2 pb-3">
                                    <Link href="/services" className="btn btn-outline-alpha btn-lg btn-block">
                                        <FaAngleDoubleLeft />&nbsp;&nbsp;
                                        Back to Services
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/brochure-design.jpg" width="100%" alt="Magazine demonstrating brochure design" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>Are you looking to build a new menu for your restaurant? Maybe print out some programs for that important event that&rsquo;s coming up? Have a wedding you need to announce to the world? Galactic Digital Studios can do it all! Our team of graphic design experts can help with these and more. We also work with whatever print shop that is near you to make sure that you get the best professional experience you can possibly get.</p>
                        <h6>Be it a brochure, program, menu, or anything else you may need, why not hire Galactic Digital Studios for all your brochure design needs? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="graphic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web;
