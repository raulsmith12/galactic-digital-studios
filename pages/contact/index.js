import Head from 'next/head';
import Script from 'next/script';
import ContactForm from "../../components/ContactForm";
import InsidePageHeader from "../../components/InsidePageHeader";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt, FaFlagUsa, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="There are many ways to contact the team at Galactic Digital Studios. You can contact any team member directly by email or phone number or you can contact the team directly using our contact form on this page." />
                <meta name="keywords" content="contact us, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/" />
                <meta property="og:title" content="Contact Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="og:description" content="There are many ways to contact the team at Galactic Digital Studios. You can contact any team member directly by email or phone number or you can contact the team directly using our contact form on this page." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/" />
                <meta property="twitter:title" content="Contact Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services" />
                <meta property="twitter:description" content="There are many ways to contact the team at Galactic Digital Studios. You can contact any team member directly by email or phone number or you can contact the team directly using our contact form on this page." />
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
                    <InsidePageHeader title="Contact Galactic Digital Studios" />
                </div>
                <div className="row mx-0">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <ContactForm />
                                </div>
                                <div className="col-6">
                                    <p>Use the contact form on this page to contact our team of designers and developers, or you can contact the team members directly using the information below:</p>
                                    <h5>Galactic Digital Studios</h5>
                                    <p>
                                        <FaMapMarkerAlt />&nbsp;
                                        Located in Salt Lake City, Utah but servicing clients throughout the continental United States&nbsp;<FaFlagUsa />
                                    </p>
                                    <p>
                                        <FaFacebookF />&nbsp;facebook.com/galacticdigitalstudios
                                    </p>
                                    <p>
                                        <FaTwitter />&nbsp;@galactic_stud10
                                    </p>
                                    <h5>Raul Smith</h5>
                                    <p>
                                        <FaEnvelopeOpenText />&nbsp;
                                        Email: raul.smith@galacticdigitalstudios.com
                                    </p>
                                    <p>
                                        <FaPhoneAlt />&nbsp;
                                        Phone: 801.917.4262
                                    </p>
                                    <p>
                                        <FaGithub />&nbsp;
                                        Github: https://github.com/raulsmith12
                                    </p>
                                    <h5>Orion Hoag</h5>
                                    <p>
                                        <FaEnvelopeOpenText />&nbsp;
                                        Email: orion.hoag@galacticdigitalstudios.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;