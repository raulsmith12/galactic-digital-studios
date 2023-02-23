import Head from 'next/head';
import Script from 'next/script';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InsidePageHeader from "../../../components/InsidePageHeader";

const Logo = () => {
    const router = useRouter();
    const { id } = router.query;
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const logoSet = await axios(
                `https://galacticdigitalstudios.com/backend/public/api/logos/${id}`
            );

            setLogo(logoSet.data.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>{logo.name} - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="Whether you are a mom-and-pop shop just starting out or you are just looking for a fresh coat of paint, a proper logo - while not the entire brand - is a great way for possible consumers to identify your brand." />
                <meta name="keywords" content="logo design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />
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
                    <InsidePageHeader title={logo.name} />
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
                        <img src={logo.image_url} width="100%" alt={logo.name} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>{logo.description}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo;