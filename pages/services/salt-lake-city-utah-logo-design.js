import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Salt Lake City Utah Logo Design - Galactic Digital Studios</title>
                <meta name="description" content="Logo design is a critical part of any company's brand identity, online or otherwise. Galactic Digital Studios brings logo design services to companies of all sizes and shapes." />
                <meta name="keywords" content="logo design, Salt Lake City, Utah" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-logo-design" />
                <meta property="og:title" content="Salt Lake City Utah Logo Design - Galactic Digital Studios" />
                <meta property="og:description" content="Logo design is a critical part of any company's brand identity, online or otherwise. Galactic Digital Studios brings logo design services to companies of all sizes and shapes." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/salt-lake-city-utah-logo-design" />
                <meta property="twitter:title" content="Salt Lake City Utah Logo Design - Galactic Digital Studios" />
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
                    <InsidePageHeader title="Salt Lake City Utah Logo Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Quality Logo Design For The Salt Lake Valley</h2>
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
                        <p className="h4">Logo design. Many claim that it is an art form. And in many ways, those people would be right. Designing logos is a form of digital art. Galactic Digital Studios was founded on two basic ideas: creating websites for small businesses and creating logos for local businesses. Many years later, Galactic Digital Studios is still dedicated to giving your digital branding that extra sauce that makes it stand apart from the rest.</p>
                        <p className="h4">Salt Lake City, Utah, has many great local small businesses, and many are in need of good quality logo design. That is why Galactic Digital Studios specializes in designing logos for any company of any size. Whether you are a small business working out of an apartment in downtown Salt Lake, or you are a business setting up shop along State Street, Galactic Digital Studios has you covered.</p>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">The logo design process with the team of digital graphic design professionals at Galactic Digital Studios will consist of taking your idea and what you hope to accomplish with your brand identity, mold it into many different drafts or mockups until we are on the right track, and then touching it up to your satisfaction. We are not done with designing your company&rsquo;s logo until everybody is satisfied with the result.</p>
                        <p className="h4">Your brand identity should be more than just your finished logo, though. That is why Galactic Digital Studios also offers comprehensive digital branding and style guides that will keep your look consistent across social media, billboards, digital marketing, print, and more.</p>
                        <h6 className="h4">Galactic Digital Studios has you covered for great logo design in Salt Lake City, Utah. Use the form below and contact a member of our courteous team today.</h6>
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