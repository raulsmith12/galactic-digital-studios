import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Seattle Washington Logo Design - Galactic Digital Studios</title>
                <meta name="description" content="Logo design is a critical part of any company's brand identity, online or otherwise. Galactic Digital Studios brings logo design services to companies of all sizes and shapes." />
                <meta name="keywords" content="logo design, Seattle, Washington" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/seattle-washington-logo-design" />
                <meta property="og:title" content="Seattle Washington Logo Design - Galactic Digital Studios" />
                <meta property="og:description" content="Logo design is a critical part of any company's brand identity, online or otherwise. Galactic Digital Studios brings logo design services to companies of all sizes and shapes." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/seattle-washington-logo-design" />
                <meta property="twitter:title" content="Seattle Washington Logo Design - Galactic Digital Studios" />
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
                    <InsidePageHeader title="Seattle Washington Logo Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Quality Logo Design For The Pacific Northwest</h2>
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
                        <p className="h4">Great logo design is an art form, and despite what many say, it is only a piece of your online brand identity. The professionals at Galactic Digital Studios understand this and are eager to help with creating your digital brand identity; from the style guides to the marketing slogans to, yes, even the logo design, our team of experienced professionals will help guide you every step of the way so that your brand identity is not only great, but also consistent.</p>
                        <p className="h4">Many local businesses in the Seattle, Washington area are looking to make a name for themselves and create an online brand that grabs people&rsquo;s attention. Whether it&rsquo;s a fresh seafood restaurant on Pine Street or a small herbal remedy shop along the pier at Pike Place Market or a coffee shop in Chinatown, small businesses are doing their best to compete with the big brands, and with each other.</p>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">A good way to stand out from the crowd - aside from not using the Space Needle in your logo - is to have a great logo design. The experienced team at Galactic Digital Studios will sit down with you and determine how to create a logo that both fits your brand and helps you to stand out from the crowd; because at the end of the day, the logo helps to sell your business just as much as anything else.</p>
                        <p className="h4">And just like any other of our graphic or digital design services, you can rest assured that Galactic Digital Studios will work with you to have your logo ready for you in any and every format possible, so that your company can put that logo to good use with embroidering, screen printing, even printing decals and stickers. Your logo should be yours to do with as you see fit. Let Galactic Digital Studios help get you the best logo design for your business.</p>
                        <h6 className="h4">Use the form below or contact Galactic Digital Studios today to schedule a consultation with any of our logo designers.</h6>
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