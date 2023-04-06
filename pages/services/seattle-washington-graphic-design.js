import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Seattle Washington Graphic Design - Galactic Digital Studios</title>
                <meta name="description" content="Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow." />
                <meta name="keywords" content="graphic design, flyer design, banner design, bookmark design, Seattle, Washington" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/seattle-washington-graphic-design" />
                <meta property="og:title" content="Seattle Washington Graphic Design - Galactic Digital Studios" />
                <meta property="og:description" content="Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/seattle-washington-graphic-design" />
                <meta property="twitter:title" content="Seattle Washington Graphic Design - Galactic Digital Studios" />
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
                    <InsidePageHeader title="Seattle Washington Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for Seattle</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col text-center">
                                    <img src="https://galacticdigitalstudios.com/img/graphic-design-l.jpg" width="50%" alt="Laptop with trendy graphic design poster behind it" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">Galactic Digital Studios is a qualified digital graphic design company equipped with the experience and skills to create great graphics for whatever the occasion may provide. We are capable of creating graphics for your business cards, social media announcements, t-shirts, banners, lamp posts, billboards, and more. Whatever your needs, Galactic Digital Studios has you covered.</p>
                        <p className="h4">Seattle, Washington is home to many conventions and other social gatherings. Your business not only deserves to be seen and heard by the people in the area, but it needs it. With an experienced and attentive graphic design company like Galactic Digital Studios in your corner, you will be more fully prepared to face any social or business occasion.</p>
                        <p className="h4">And while we may be new(ish) to the Seattle area, Galactic Digital Studios also understands the need to shop local first. The last thing you need is to deal with the big boy companies on a tight deadline and have your printed graphic design arrive a week later than anticipated. We work with local print shops, call around and do the shopping for you, and will get you the best price for your needs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">Furthermore, we will hand the graphic design files to the print shop for you as well, giving them the head start so that your printed designs will be done faster. Whether you need a fresh batch of business cards to distribute at the local coffee shops, a new billboard to be posted along I-5, or a fresh banner for your booth to show off at an upcoming convention, Galactic Digital Studios will ensure that you are satisfied with the final product.</p>
                        <h6 className="h4">Use the form below or contact us directly today and let Galactic Digital Studios be your graphic design experts.</h6>
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