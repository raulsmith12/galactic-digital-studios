import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../../components/InsidePageHeader"
import RequestForm from "../../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Boise Idaho Web Development - Galactic Digital Studios</title>
                <meta name="description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta name="keywords" content="website design, website development, web development, web design, Boise, Idaho" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/boise-idaho-web-development" />
                <meta property="og:title" content="Boise Idaho Web Development - Galactic Digital Studios" />
                <meta property="og:description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/boise-idaho-web-development" />
                <meta property="twitter:title" content="Boise Idaho Web Development - Galactic Digital Studios" />
                <meta property="twitter:description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
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
                    <InsidePageHeader title="Boise Idaho Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For The Greater Boise Valley</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/web-development-l.jpg" width="100%" alt="Two monitors with web development code on them" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h5">Having an established and experienced small business web development specialist in your corner can make all the difference in the world when looking to establish your company on the digital marketplace. Galactic Digital Studios not only brings years of experience in development small business websites, but they also know how to establish small businesses in the digital marketplace.</p>
                        <p className="h5">And now Galactic Digital Studios is delivering web development services to small businesses in the Boise, Idaho area. While Boise, Idaho may be a small town by most standards, it is rapidly growing and teeming with small businesses - ranging from coffee shops to souvenir stands - ready to take that next step in establishing an online presence.</p>
                        <p className="h5">Boise, Idaho is a vibrant city that offers numerous opportunities for businesses of any size. When dealing with small business web development in Boise, Idaho, there are several key advantages worth considering. Galactic Digital Studios understands and acknowledges these unique opportunities and benefits that can be derived from working with small businesses in such a unique and thriving town.</p>
                        <p className="h5">One of the most important reasons to work with a small business web developer is the understanding of working in such a close-knit community like Boise, Idaho, that offers a strong sense of local support. Galactic Digital Studios has always believed in supporting local first, and in a town that fosters a tight community where small businesses are valued and actively supported like Boise, Idaho, that is very crucial. By working with smaller businesses, you contribute to the growth and vitality of the local economy, making a tangible impact on the community. Also, working with small businesses - particularly when hiring a web developer - allows for a more personalized experience, as they often have a deep understanding of the local market and its specific needs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h5">Small businesses in Boise, Idaho also tend to offer a more flexible approach to rendering services. Unlike large corporations, they can quickly adapt to changing market conditions and customer preferences. This flexibility enables small businesses to be innovative and responsive, which can be advantageous for clients seeking customized solutions or swift problem-solving. With Galactic Digital Studios, you can expect telephone or email customer service - even outside normal business hours. We want to make sure that your web development process is not only something that you are proud of, but that you will continue to come back to.</p>
                        <p className="h5">Small business web development services from Galactic Digital Studios often focus on building lasting business relationships. We ultimately do not want you to just think of our web development team as someone you hired to do a job, but rather a fellow small business that understands and recognizes the struggles of making it as a small business. We prioritize personalized attention and will go the extra mile to ensure you are satisfied with the result. The web development team at Galactic Digital Studios wants you as a Boise, Idaho small business owner to come to expect a higher level of individualized care and attention when dealing with Galactic Digital Studios.</p>
                        <p className="h5">Galactic Digital Studios believes that the launch of a website does not necessarily end our services; in fact, we can argue that our services have only started by that point. We perform post-launch website care including Google Analytics, search engine optimization, quick edits, and for those that purchase a custom content management system, coaching on how to operate and make necessary edits to the site. Our web development team is invested in the success of your Boise, Idaho small business.</p>
                        <p className="h5">Additionally, Galactic Digital Studios believes that not all websites should be created equal. While a fully dynamic, full stack web development package might work for mid-sized local businesses, small mom-and-pop shops that have no more than 3 pages on their website might not need as many features. Just like the bigger the company, the more advanced the web development package will need to be.</p>
                        <p className="h5">Also, every web development package is responsive by default. Meaning that you will be able to view your website on any screen and it will come through stunningly. Boise, Idaho businesses deserve to be seen and heard on not just desktops, but tablets and phones as well.</p>
                        <h6 className="h5">If you have any questions about our web development services in Boise, Idaho or any of the surrounding communities, please use the contact form below or contact one of our team members using the contact info found on this site.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/boise-idaho-web-development.jpg" width="100%" alt="Boise Idaho web development" />
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