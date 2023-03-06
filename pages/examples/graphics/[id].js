import Head from 'next/head';
import Script from 'next/script';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InsidePageHeader from "../../../components/InsidePageHeader";

const Graphic = () => {
    const router = useRouter();
    const { id } = router.query;
    const [graphic, setGraphic] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const graphicSet = await axios(
                `https://galacticdigitalstudios.com/backend/public/api/graphics/${id}`
            );

            setGraphic(graphicSet.data.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>{graphic.name} - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content={`Galactic Digital Studios is capable of building websites big or small no matter what the client. As an example, here is a site for one of our esteemed clients, ${graphic.name}. ${graphic.description}`} />
                <meta name="keywords" content="graphic design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://galacticdigitalstudios.com/examples/graphics/${id}`} />
                <meta property="og:title" content={`${graphic.name} - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services`} />
                <meta property="og:description" content={`Galactic Digital Studios is capable of building websites big or small no matter what the client. As an example, here is a site for one of our esteemed clients, ${graphic.name}. ${graphic.description}`} />
                <meta property="og:image" content={graphic.image_url} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://galacticdigitalstudios.com/examples/graphics/${id}`} />
                <meta property="twitter:title" content={`${graphic.name} - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services`} />
                <meta property="twitter:description" content={`Galactic Digital Studios is capable of building websites big or small no matter what the client. As an example, here is a site for one of our esteemed clients, ${graphic.name}. ${graphic.description}`} />
                <meta property="twitter:image" content={graphic.image_url} />
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
                    <InsidePageHeader title={graphic.name} />
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
                        <img src={graphic.image_url} width="100%" alt={graphic.name} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>{graphic.description}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graphic;