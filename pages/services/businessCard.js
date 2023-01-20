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
                <title>Business Card Services - Galactic Digital Studios</title>
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
            <div className="container-fluid pb-5">
                <div className="row">
                    <InsidePageHeader title="Business Card Design" />
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
                        <p>The business card. A staple for the professional businessperson. The wrong one can turn somebody completely away. The right one, however, can change a person&rsquo;s or business&rsquo;s life. Galactic Digital Studios knows this all too well and are prepared to work with you to get the best business card experience you can get. Whether you&rsquo;re a young aspiring entrepreneur or one of many executives in a large company, no business card design job is too big or too small for Galactic Digital Studios.</p>
                        <h6>Be it a personal business card for you or a swath of business cards for your business, why not hire Galactic Digital Studios for all your business card design needs? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="graphic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web;
