import Head from 'next/head';
import Script from 'next/script';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InsidePageHeader from "../../../components/InsidePageHeader";

const Website = () => {
    const router = useRouter();
    const { id } = router.query;
    const [website, setWebsite] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const websiteSet = await axios(
                `https://galacticdigitalstudios.com/backend/public/api/websites/${id}`
            );

            setWebsite(websiteSet.data.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>{website.name} - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="Galactic Digital Studios is capable of many great services, but our bread and butter for seven years has been and continues to be our web development services. Backend, frontend, WordPress, custom CMS, database management, we are able to do it all." />
                <meta name="keywords" content="website design, website development, web development, web design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/" />
                <meta property="og:title" content="Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="og:description" content="Galactic Digital Studios is your one-stop shop for website development, app development, search engine optimization, content management, database management, graphic and logo design, and much more!" />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/" />
                <meta property="twitter:title" content="Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="twitter:description" content="Galactic Digital Studios is your one-stop shop for website development, app development, search engine optimization, content management, database management, graphic and logo design, and much more!" />
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
                    <InsidePageHeader title={website.name} />
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="container">
                            <div className="row">
                                <div className="col d-block gap-2 pb-2">
                                    <Link href="/examples" className="btn btn-outline-alpha btn-lg btn-block">
                                        <FaAngleDoubleLeft />&nbsp;&nbsp;
                                        Back to Examples
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <img src={website.image_url} width="100%" alt={website.name} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>{website.description}</h3>
                        <a href={website.site_url} target="_blank" className="h5">Visit the site!</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Website;