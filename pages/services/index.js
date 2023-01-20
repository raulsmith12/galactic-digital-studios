import Head from 'next/head';
import Script from 'next/script';
import InsidePageHeader from "../../components/InsidePageHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const Services = () => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const servicePage = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/services'
            );

            setServiceList(servicePage.data.data);
        }

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Services - Galactic Digital Studios</title>
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
                    <InsidePageHeader title="Services" />
                </div>
                <div className="row">
                    <div className="col mx-5 px-5">
                        <p className="display-7">Galactic Digital Studios prides itself on being a one-stop-shop of sorts for all your digital and online marketing needs. Here is a list of all the services that Galactic provides:</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/web" className="btn btn-alpha btn-lg btn-block">Website Development</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/logo" className="btn btn-alpha btn-lg btn-block">Logo Design</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/brochure" className="btn btn-alpha btn-lg btn-block">Brochure Design</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/businessCard" className="btn btn-alpha btn-lg btn-block">Business Card Design</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/graphic" className="btn btn-alpha btn-lg btn-block">Various Graphic Design</Link>
                    </div>
                    {/* <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/mobileApp" className="btn btn-alpha btn-lg btn-block">Mobile App Development</Link>
                    </div> */}
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/database" className="btn btn-alpha btn-lg btn-block">Database Management</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/cms" className="btn btn-alpha btn-lg btn-block">Content Management</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;