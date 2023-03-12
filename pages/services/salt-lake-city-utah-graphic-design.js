import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Salt Lake City Utah Graphic Design - Galactic Digital Studios</title>
                <meta name="description" content="Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow." />
                <meta name="keywords" content="graphic design, flyer design, banner design, bookmark design, Salt Lake City, Utah" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-graphic-design" />
                <meta property="og:title" content="Salt Lake City Utah Graphic Design - Galactic Digital Studios" />
                <meta property="og:description" content="Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-graphic-design" />
                <meta property="twitter:title" content="Salt Lake City Utah Graphic Design - Galactic Digital Studios" />
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
                    <InsidePageHeader title="Salt Lake City Utah Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for Salt Lake City</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col text-center">
                                    <img src="https://galacticdigitalstudios.com/img/graphic-design-l.jpg" width="80%" alt="Laptop with trendy graphic design poster behind it" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">There are many reasons why you would want an experienced professional to handle your graphic design needs:</p>
                        <ul className="list-group">
                            <li className="list-group-item h4 py-3">An experienced graphic design professional will use the best tool to bring out the best in a particular project</li>
                            <li className="list-group-item h4 py-3">They will likely inquire a lot of feedback from the client regarding what they want</li>
                            <li className="list-group-item h4 py-3">Many times, when they make a mistake or something doesn&rsquo;t sit with the client, they will calmly but quickly pivot and make the necessary changes</li>
                        </ul>
                        <p className="h4">These are just a few reasons why hiring an experienced graphic designer is important.</p>
                        <p className="h4">Few metropolitan areas have both the historical richness and the trendy progressiveness of Salt Lake City, Utah. With the historical importance of Temple Square and the beautiful Rocky Mountains, combined with a growing progressive culture, particularly downtown, there are few places that both inspire and motivate graphic design quite like SLC.</p>
                        <p className="h4">And what&rsquo;s better is that Galactic Digital Studios was founded in Salt Lake City, Utah, so our team of graphic design professionals understands and knows the area and its people all too well. What&rsquo;s more, we work with and will often refer local print companies first before going to the big national print shops for all of your graphic design needs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">These needs could be anything from a new banner for that convention that&rsquo;s coming up, some bookmarks to distribute at the library, a new icon for your social media page, or even just a flyer advertising upcoming piano lessons. These are just a few examples of what the graphic design team at Galactic Digital Studios can do for your business.</p>
                        <h6 className="h4">If you are interested in obtaining graphic design services in the Salt Lake City, Utah area, please fill out the form below and contact one of our highly experienced professionals today.</h6>
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