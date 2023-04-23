import Head from "next/head"
import Script from "next/script"
import InsidePageHeader from "../../components/InsidePageHeader"
import RequestForm from "../../components/RequestForm"

const Page = () => {
    return (
        <>
            <Head>
                <title>Ogden Utah Web Development - Galactic Digital Studios</title>
                <meta name="description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta name="keywords" content="website design, website development, web development, web design, Ogden, Utah" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://galacticdigitalstudios.com/services/ogden-utah-web-development" />
                <meta property="og:title" content="Ogden Utah Web Development - Galactic Digital Studios" />
                <meta property="og:description" content="Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all." />
                <meta property="og:image" content="https://galacticdigitalstudios.com/img/gds-logo-short-transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://galacticdigitalstudios.com/services/ogden-utah-web-development" />
                <meta property="twitter:title" content="Ogden Utah Web Development - Galactic Digital Studios" />
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
                    <InsidePageHeader title="Ogden Utah Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For Junction City</h2>
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
                        <p className="h5">With web development services from Galactic Digital Studios, creating and maintaining a website has never been easier or more involved. Yes, our team of professionals are the ones that are building and maintaining the site initially, but you will have input into the content and design from the beginning of the process to well after the launch of your site. And yes, we believe it is your website, and therefore you should have a say in what it wants to tell the world about you and your business.</p>
                        <p className="h5">In a lot of ways, Ogden, Utah is considered the birthplace of Galactic Digital Studios. Founder and head of development Raul Smith was born and raised in Ogden, Utah, and he has not forgotten where he came from. It was also in Ogden that he came up with the original idea for Galactic Digital Studios. From the beautiful eastern and northern mountains that nestle up against the region to historic 25th Street and all of the hustle and bustle that it provides, to the rich and vibrant Union Station that is home to so much of Ogden&rsquo;s history, shouldn&rsquo;t your business also have something to offer to such a historically rich town?</p>
                        <p className="h5">Well now it can, with web development services from Galactic Digital Studios. These services, available to residents of Ogden, Utah, as well as throughout the continental United States, range from creating an entire new site from scratch to simple upkeep and maintenance to transferring data and design from one Wordpress site to another. Our team of developers will have your business and its future growth firmly in mind every step of the way. As we like to say, &ldquo;easier to plan future growth and not need the room than to not plan for it and scramble later.&rdquo;</p>
                        <p className="h5">Our web development services will take your concept from imagination and pen-and-paper to the world wide web. This will include stunning front end design, back end architecture, database management, content management (should you need it), and even some coaching from our development team to help you maintain your own content. Again, what we would be building would essentially be your website, and ultimately you should be the one to take ownership of it.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h5">But even after your site is live and your business is now out in the universe and the world wide web, our services do not end there. In addition to everything that we mentioned, Galactic Digital Studios also includes in its web development services our search engine optimization package. This is where we set you up with a clear and concise path to organic growth. We will work with you on finding out what your target audience is, what keywords are best to go after on Google and other search engines, and what your target geographic area is going to be. We can&rsquo;t promise you will hit the first page of Google right away, but we can promise that we will work our hardest to get you as far up the search rankings as we can get you. Ultimately, we want to provide organic growth that will last well after we hand the website over to you for you to work on and use as you see fit.</p>
                        <p className="h5">And even outside of the website itself, Galactic Digital Studios will help with any and all social media advertising campaigns, as well as coach you on how to use Google Analytics to determine how best to continue to drive traffic to your website. Your business success is highest priority with us.</p>
                        <p className="h5">Stop delaying and contact our web development team today using the form below. We look forward to providing web development services to residents of the Ogden, Utah area.</p>
                        <h6 className="h5">Stop delaying and contact our web development team today using the form below. We look forward to working with you.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/ogden-utah-web-development.jpg" width="100%" alt="Ogden Utah web development" />
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