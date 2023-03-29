import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Ogden Utah Logo Design - Galactic Digital Studios</title>
                <meta name="description" content="Logo design is a critical part of any company's brand identity, online or otherwise. Galactic Digital Studios brings logo design services to companies of all sizes and shapes." />
                <meta name="keywords" content="logo design, Ogden, Utah" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-logo-design" />
                <meta property="og:title" content="Ogden Utah Logo Design - Galactic Digital Studios" />
                <meta property="og:description" content="Logo design is a critical part of any company's brand identity, online or otherwise. Galactic Digital Studios brings logo design services to companies of all sizes and shapes." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-logo-design" />
                <meta property="twitter:title" content="Ogden Utah Logo Design - Galactic Digital Studios" />
                <meta property="twitter:description" content="Logo design is a critical part of any company's brand identity, online or otherwise. Galactic Digital Studios brings logo design services to companies of all sizes and shapes." />
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
                    <InsidePageHeader title="Ogden Utah Logo Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Quality Logo Design For Junction City and the Northern Wasatch Front</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/logo-design-l.jpg" width="100%" alt="Monitor with laptop with logo design on both" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">Trying to find a small business logo designer that gets your business and what you want to convey to your customers can be a challenge. Galactic Digital Studios is well versed in logo design for any business, no matter the size. Our courteous and professional team of designers will help guide you through the arduous process and design the best logo for your business.</p>
                        <p className="h4">Not just that, but because Galactic Digital Studios understands that a logo is only one piece of the much larger brand identity puzzle, we&rsquo;ll even go over the ins-and-outs of coming up with a consistent and thorough brand style guide to match your logo, so that your online brand can stay consistent in all things that you do.</p>
                        <p className="h4">Ogden, Utah is home to many inspirations for logo design. From the Ogden River bridge to Ogden High School to the Union Station and adjacent Historic 25th Street to the beautiful east bench, there are so many inspirations to draw from. In fact, it is often said that Ben Lomond Peak is the inspiration behind the Paramount Pictures logo.</p>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">With a town as rich in its history - from the pioneers to the meeting of the railroads at nearby Promontory Point to the Union Station to the underground tunnels where Al Capone himself was once rumored to frequent - Ogden is maybe the spot for inspiring logo design.</p>
                        <p className="h4">And with Ogden continuing to grow into the town it has become and the town that it hopes to be, there is a lot of room for growth for many small businesses in the area. Your small business could be one great logo design away from making a name for itself in a big way. Let Galactic Digital Studios be the catalyst for your small business&rsquo;s success.</p>
                        <h6 className="h4">Use the contact form below or contact us today to learn more about our logo design services.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/logo-design-r.jpg" width="100%" alt="Desk layout with logo design sketches" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <RequestForm selectedService="website" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;