import Head from 'next/head';
import Script from 'next/script';
import InsidePageHeader from "../../components/InsidePageHeader";

const About = () => {
    return (
        <>
            <Head>
                <title>About Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services</title>
                <meta name="description" content="Started in 2015, Galactic Digital Studios has evolved past simply a web solutions company and has now become a trusted graphic and logo design company on top of web development, mobile app development, and content management service." />
                <meta name="keywords" content="about us, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise" />
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
                    <InsidePageHeader title="About Galactic Digital Studios" />
                </div>
                <div className="row">
                    <div className="col-md-2 offset-md-1">
                        <img src="https://galacticdigitalstudios.com/img/ben-kolde-bs2Ba7t69mM-unsplash.jpg" width="100%" alt="Laptop with saying on it" />
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="display-7 mx-5 px-5">Started in 2015 as Galactic Web Solutions, Galactic has now grown into more than just a website development firm. Today, Galactic Digital Studios lives up to the new name, handling many different aspects of online digital marketing and branding.<br /><br />
                        If you need a new logo, new graphic marketing, or even a new business card, Galactic Digital Studios has a team of designers ready to assist you. If you&rsquo;re in the market for assistance with search engine optimization, Galactic Digital Studios can help with that as well. And yes, we are still very much in the website development business, handling everything from dynamic, fully-functioning frontend sites, to behind-the-curtain backend work that would make Oz take up and notice, to database management to help keep your day-to-day running smoothly as ever.<br /><br />
                        Whatever your online digital branding or design/development needs, Galactic Digital Studios has you covered.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;