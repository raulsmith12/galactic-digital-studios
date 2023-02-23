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
                <title>Mobile App Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="The year is 2023. Websites are no longer the only tool in an online business's toolchest. Mobile apps are becoming more and more commonplace. This sounds like science fiction, but it's very much real-life. And Galactic Digital Studios has a team of mobile app developers that can help." />
                <meta name="keywords" content="mobile app design, mobile app development, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />
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
            <div className="container-fluid pb-5">
                <div className="row">
                    <InsidePageHeader title="Mobile App Development" />
                </div>
                <div className="row">
                    <div className="col-3">
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
                                    <img src="https://galacticdigitalstudios.com/img/ben-kolde-bs2Ba7t69mM-unsplash.jpg" width="100%" alt="Laptop with saying on it" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <p>The year is 2023. Websites are no longer the be-all-and-all of a company&rsquo;s online presence. Galactic Digital Studios recognizes this and is here to present a few solutions. Not only are all of our websites responsive and capable of being seen on both regular screens and mobile devices, but we are also equipped and trained in presenting mobile app development services that will be sure to get your name out there and your business into the new modern era.</p>
                        <h6>Be it a responsive website that is mobile friendly or a mobile app that people can download from the Google Play or Apple App stores, why not hire Galactic Digital Studios for all your mobile app development needs? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="mobile" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web;
