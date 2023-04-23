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
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/ogden-utah-graphic-design" />
                <meta property="og:title" content="Ogden Utah Graphic Design - Galactic Digital Studios" />
                <meta property="og:description" content="Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/ogden-utah-graphic-design" />
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
                        <p className="h5">If you have been on the fence lately about hiring a professional graphic designer and you are unsure how to go about hiring one, Galactic Digital Studios may be just the firm for your needs. Our team has been working in the graphic design field for over ten years, with projects ranging from announcement flyers to business cards to social media banners. Whatever your needs may be, however big or small your project is, Galactic Digital Studios has you covered.</p>
                        <p className="h5">Many people refer to Ogden, Utah as the little brother to Salt Lake City, but in the hearts of the graphic design team at Galactic Digital Studios, it is not just home in many ways, but it is also a city rich in its history and natural beauty. Where else can you find a street with as much historical and scenic beauty as Historic 25th Street? Where else can you find a mountainscape as majestic and breathtaking as the Wasatch Mountains, including the mountain that inspired the Paramount logo? Where else can you find two historical landmarks within miles of each other like the Union Station and Ogden High School?</p>
                        <p className="h5">With so much architectural and natural beauty to inspire even the most novice of graphic designers, Ogden, Utah almost feels like the perfect muse for a professional graphic design team to handle the small business needs of the area. In addition to finding any number of muses for the latest lamp post or bookmark project, Galactic Digital Studios can also get in touch with many local print shops in the area. In fact, we will refer to these print shops before we suggest going with any of the big box online shops for your printing needs. Galactic Digital Studios firmly believes in keeping with the Ogden mantra of &ldquo;local first&rdquo;.</p>
                        <p className="h5">And because we have a direct line with print shops in the Ogden, Utah area, Galactic Digital Studios can get you the best deal on that bookmark, that screen-printed hoodie, that banner for your booth at an upcoming convention, or even that sign for your window at your business. Our team of graphic design professionals remain standing by, ready and willing to help your company reach that next level.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h5">Now what do we mean when we say we handle your graphic design needs? It's simple, really. We will walk you through the process of what it is that you are wanting done. Say, for instance, you want a screen printing for a new t-shirt to help promote an upcoming event or your business. Our graphic design team will go over every detail with you. What is the shirt color you're looking to have this printed on? What are your brand's colors? Will this be a front-and-back project? How many are you looking to have printed and when by? Then, we take all of that information and we come up with a design mockup that we believe is the best fit, and then make adjustments from there until you are satisfied with the end result. Then, and only then, do we submit it to the print shop for printing.</p>
                        <p className="h5">Another example of our graphic design process is creating a lamp post banner design. We gather information such as what the side of the banner is going to be, what shape, and what the colors that will be used are going to be. We then create a mockup of what that lamp post banner will look like and make adjustments as we need to before handing it off to the print shop.</p>
                        <h6 className="h5">For more information about graphic design services in the Ogden, Utah area, please contact our graphic design team using the contact form and/or info below.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/ogden-utah-graphic-design.jpg" width="100%" alt="Ogden Utah Graphic Design" />
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