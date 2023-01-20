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
                <title>Logo Design Services - Galactic Digital Studios</title>
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
                    <InsidePageHeader title="Logo Design" />
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
                        <p>Logos are important. They are a main component in a company&rsquo;s brand identity. They may not be the only thing that matters to having a great brand, but they are very vital. Galactic Digital Studios employs a team of logo designers that is both experienced and capable of making your logo be one that people will stand up and notice right away. We also will help you build a brand style guide that will make your branding all that much more official and professional.</p>
                        <h6>So why not hire Galactic Digital Studios for all your logo design needs and take that first important step in getting your brand and your company noticed? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web;
