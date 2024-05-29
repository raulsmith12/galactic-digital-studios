import Image from "next/image";
import InsidePageHeader from "../../../components/InsidePageHeader"
import MetaHeader from "../../../components/MetaHeader";
import RequestForm from "../../../components/RequestForm"

const Page = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Portland Oregon Web Development - Galactic Digital Studios"
                metadesc = "Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all."
                metakeys = "website design, website development, web development, web design, Portland, Oregon"
                metaurl = "https://galacticdigitalstudios.com/services/oregon/portland-oregon-web-development"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Portland Oregon Web Development" />
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
                                    <Image src="https://galacticdigitalstudios.com/img/web-development-l.webp" alt="Two monitors with web development code on them" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">Small business web development doesn&rsquo;t have to be complicated or complex. Galactic Digital Studios wants to help ease the process for you, the small business owner, to have a clean, functioning, searchable website that you are not only happy to show off to friends and family, but you are proud to show off to the world.</p>
                        <p className="h6">And now, for the first time, Galactic Digital Studios brings their web development services to the Pacific Northwest and Portland, Oregon. There&rsquo;s so much to enjoy and explore in Portland, Oregon: from the colorful scene of Old Town to Washington Park and the Oregon Zoo to the tamer and less chaotic east side, Portland, Oregon has so much more to offer than one can expect.</p>
                        <p className="h6">So in a town that offers so much and in such a variety of ways, why should your Portland, Oregon based business feel any less? Small businesses based in the Portland, Oregon area shouldn&rsquo;t have to settle for cookie cutter templated sites when the town motto is &ldquo;get weird&rdquo;. Galactic Digital Studios can offer more than just a cookie cutter template site; we have experienced web development professionals that can take your online business to that next level.</p>
                        <p className="h6">Our web development team will go over every detail needed to help build the foundation for what will likely be your online billboard: your website. We know how important it is that you leave a lasting and positive impression on your customers, be it they&rsquo;re based in Portland, Oregon or anywhere in the United States.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">We start the web development process by going over the details of what your business brand is: the name, colors, hours of service, really any information that could prove to be useful to build the website. We&rsquo;ll go over with you any available names out there that fit what your business name is. From there we determine with you what the best options are for your website: CMS vs static site, how many pages, will there be ecommerce involved, etc.</p>
                        <p className="h6">Galactic Digital Studios is also driven to make sure that your website is responsive and mobile-friendly. What that means is that your site will come up clean no matter what device or screen you view it on. Technology has come to where websites can now adjust based on the screen size of the device you&rsquo;re viewing it on. Using that information, we can use our web development services build websites that will adjust from laptop to desktop to mobile.</p>
                        <p className="h6">Don&rsquo;t think that our web development services stop at what you see on your phone or laptop. In addition to full front-end services, the web development team at Galactic Digital Studios also offers database and content management services. Our dedicated professionals will coach you on how to add new content and even edit the content that&rsquo;s already on there. This comes especially in handy when you are promoting a sale or limited promotion on your site. The idea behind coaching the client on making their own edits is so that if a change needs to be made quickly, the client is able to do so without needing to rely heavily on the web development professional to do it.</p>
                        <p className="h6">As for the database side of things, our team of web development professionals will continue to monitor your database to make sure that everything is saved and backed up in a timely manner. And if there&rsquo;s ever an issue, our web development team is usually on top of things to troubleshoot and determine where the issue is located.</p>
                        <p className="h6">Galactic Digital Studios even offers Google Analytics and search engine optimization in addition to front-end web development services. After the site is launched, our work is not over; many could argue that that&rsquo;s just the beginning. Our team of web development professionals will go over what keywords will likely be targeted in our SEO efforts, then go over Google Analytics to determine where you&rsquo;re struggling and help focus on your strong points.</p>
                        <h6>Your local small business in Portland, Oregon deserves to stand out among the crowd; why not hire a web development professional to create a website that helps you stand out? Use the contact form below or the contact info found on this website and let Galactic Digital Studios handle all of your web development needs.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <Image src="https://galacticdigitalstudios.com/img/portland-oregon-web-development.webp" alt="Portland Oregon web development" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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