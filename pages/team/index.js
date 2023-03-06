import Head from 'next/head';
import Script from 'next/script';
import InsidePageHeader from "../../components/InsidePageHeader";
import axios from "axios";
import { useState, useEffect } from "react";

const Team = () => {
    const [teamContent, setTeamContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const teamPage = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/team'
            );

            setTeamContent(teamPage.data.data);
        }

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Meet the Galactic Digital Studios Team - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="The Galactic Digital Studios team is a diverse group of professionals with one common goal in mind: to provide the best possible service to clients no matter what the service is." />
                <meta name="keywords" content="website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/team" />
                <meta property="og:title" content="Meet the Galactic Digital Studios Team - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="og:description" content="The Galactic Digital Studios team is a diverse group of professionals with one common goal in mind: to provide the best possible service to clients no matter what the service is." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/team" />
                <meta property="twitter:title" content="Meet the Galactic Digital Studios Team - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="twitter:description" content="The Galactic Digital Studios team is a diverse group of professionals with one common goal in mind: to provide the best possible service to clients no matter what the service is." />
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
                    <InsidePageHeader title="Meet the Team" />
                </div>
                <div className="row">
                    <div className="col mx-5 px-5">
                        <p className="display-7">Our team of highly skilled designers and developers is here to help you with any of your digital marketing and branding needs, bringing a wealth of experience and expertise to the table. To help with putting faces to names, here is the Galactic Digital Studios team:</p>
                    </div>
                </div>
                {teamContent.map(i => (
                    <div className="row px-5 mx-5 my-2" key={i.id}>
                        <div className="col-md-2 col-sm-4">
                            <img src={i.image_url} width="100%" alt={i.name} />
                        </div>
                        <div className="col-md-10 col-sm-8">
                            <h4 className="display-4">{i.name}</h4>
                            <h6 className="display-6">{i.title}</h6>
                            <p className="display-7">{i.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Team;