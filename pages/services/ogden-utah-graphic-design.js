import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Ogden Utah Graphic Design - Galactic Digital Studios</title>
                <meta name="description" content="Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow." />
                <meta name="keywords" content="graphic design, flyer design, banner design, bookmark design, Ogden, Utah" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-graphic-design" />
                <meta property="og:title" content="Ogden Utah Graphic Design - Galactic Digital Studios" />
                <meta property="og:description" content="Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-graphic-design" />
                <meta property="twitter:title" content="Ogden Utah Graphic Design - Galactic Digital Studios" />
                <meta property="twitter:description" content="Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow." />
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
                    <InsidePageHeader title="Ogden Utah Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for Weber County</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col text-center">
                                    <img src="https://galacticdigitalstudios.com/img/graphic-design-l.jpg" width="60%" alt="Laptop with trendy graphic design poster behind it" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">If you&rsquo;ve been on the fence lately about hiring a professional graphic designer, Galactic Digital Studios may be just the firm for your needs. Our team has been working in the graphic design field for over ten years, with projects ranging from announcement flyers to social media banners to business cards. Whatever your needs, Galactic Digital Studios has you covered.</p>
                        <p>&nbsp;</p>
                        <p className="h4">Many refer to Ogden, Utah, as the little brother to Salt Lake, but in the hearts of Galactic Digital Studios&rsquo; team of graphic designers, it is a city rich in history and natural beauty. Where else can you find a street with as much history and scenic beauty as Historic 25th Street, turn your head to the north and find the mountainscape that inspired the Paramount logo, and turn your head to the east to find the beautiful snow-capped Rocky Mountains?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">With so much architectural and natural beauty to inspire any graphic designer, Ogden almost feels just right for a professional graphic design team to handle the small business needs of the area. In addition to finding any number of muses for the latest lamp post or bookmark project, Galactic Digital Studios is also in touch with many local print shops in the area. We firmly believe in keeping with the Ogden mantra of &ldquo;local first&rdquo;.</p>
                        <p className="h4">And because we have a direct line with print shops in the area, Galactic Digital Studios can get you the best deal on that bookmark or screen-printed hoodie or that flyer. Our team of graphic design professionals remain standing by, ready and willing to help your company reach that next level.</p>
                        <h6 className="h4">Contact our graphic design team using the contact form and/or info below.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/graphic-design-r.jpg" width="100%" alt="Man working on graphic design on laptop" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <RequestForm selectedService="graphic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;