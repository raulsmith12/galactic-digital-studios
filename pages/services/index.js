import Head from 'next/head';
import Script from 'next/script';
import InsidePageHeader from "../../components/InsidePageHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const Services = () => {
    return (
        <>
            <Head>
                <title>Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="Galactic Digital Studios provides many services to businesses, ranging from simple 3 page websites to fully dynamic sites, fully-designed graphics and logos, mobile apps, database management, and more!" />
                <meta name="keywords" content="website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services" />
                <meta property="og:title" content="Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="og:description" content="Galactic Digital Studios provides many services to businesses, ranging from simple 3 page websites to fully dynamic sites, fully-designed graphics and logos, mobile apps, database management, and more!" />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services" />
                <meta property="twitter:title" content="Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="twitter:description" content="Galactic Digital Studios provides many services to businesses, ranging from simple 3 page websites to fully dynamic sites, fully-designed graphics and logos, mobile apps, database management, and more!" />
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
                    <InsidePageHeader title="Services" />
                </div>
                <div className="row">
                    <div className="col mx-1">
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