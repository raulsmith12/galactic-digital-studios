import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Seattle Washington Web Development - Galactic Digital Studios</title>
                <meta name="description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta name="keywords" content="website design, website development, web development, web design, Seattle, Washington" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/seattle-washington-web-development" />
                <meta property="og:title" content="Seattle Washington Web Development - Galactic Digital Studios" />
                <meta property="og:description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/seattle-washington-web-development" />
                <meta property="twitter:title" content="Seattle Washington Web Development - Galactic Digital Studios" />
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
                    <InsidePageHeader title="Seattle Washington Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For The Pacific Northwest</h2>
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
                        <p className="h4">Small businesses have a difficult time trying to get their name out there for people to find them. Galactic Digital Studios understands this and realizes how competitive small business web development can be. Our developers have been in the field for over ten years, working with companies ranging from mom-and-pop shops working out of a garage to multi-million-dollar companies with physical offices. And yet, despite the varying sizes of the companies and varying services they provide, the goal remains the same: to leave a lasting online impression on their customers.</p>
                        <p className="h4">And now, for the first time, Galactic Digital Studios brings their patented web development services to the Pacific Northwest as we are now open for business in Seattle, Washington. Home to the Space Needle, Pike Place Market, Starbucks, and one of the most beautiful marriages of architectural and natural beauty that has ever been witnessed, Seattle now has a small business web development company that understands and sympathizes with the daily struggles of running a small business.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h4">And much like the natural and architectural beauty Seattle possesses, Galactic Digital Studios will work with you to ensure that your online presence and overall web presentation is equally stunning. Our team of web developers will sit with you to go over the game plan to present your best website possible by asking important questions and putting it all together in what will undoubtedly be the best decision your business could ever make.</p>
                        <p className="h4">And what&rsquo;s more, our team of search optimization professionals will perform some reconnaissance to determine what are the best keywords to go after and proceed to create a search optimization plan to help your business be found on the web.</p>
                        <h6 className="h4">What are you waiting for? Use the form below or contact us today for great web development services now available in the Seattle, Washington area.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/web-development-r.jpg" width="100%" alt="Man working on web development on laptop" />
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