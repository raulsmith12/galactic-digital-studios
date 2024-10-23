import InsidePageHeader from "../../../components/InsidePageHeader"
import RequestForm from "../../../components/RequestForm"
import MetaHeader from "../../../components/MetaHeader";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

const Page = () => {
    const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      const desktopDevice = window.innerWidth;
      if (desktopDevice > 767) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }, []);

    return (
        <>
            <MetaHeader
                metatitle = "Seattle Washington Web Development - Galactic Digital Studios"
                metadesc = "Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all."
                metakeys = "website design, website development, web development, web design, Seattle, Washington"
                metaurl = "https://galacticdigitalstudios.com/services/washington/seattle-washington-web-development/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
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
                                    <Image src="https://galacticdigitalstudios.com/img/web-development-l.webp" alt="Two monitors with web development code on them" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">Small businesses have a difficult time trying to get their name out there for people to find them, be it in real life or online. The team of web development professionals at Galactic Digital Studios understands how difficult getting your name out there can be. The web development professionals at Galactic Digital Studios has worked with companies ranging from mom-and-pop shops to major companies, and have done so for over ten years. Yet, despite the varying sizes of the companies and the various services they provide, the goal of Galactic Digital Studios remains the same: to help small businesses leave a lasting online impression on their customers.</p>
                        <p className="h6">And now, for the first time, Galactic Digital Studios brings their web development services to the Pacific Northwest, as we officially open up our services to businesses in the Seattle, Washington area. Seattle, Washington is best known for the Space Needle, Pike Place Market, Starbucks, and arguably the most beautiful marriage of architectural and natural beauty in the United States. But, Seattle, Washington now has a small business web development company that understands and sympathizes with the daily struggles of running a small business.</p>
                        <p className="h6">And, much like the natural and architectural beauty that Seattle, Washington possesses, your small business deserves an online presence and overall web presentation that are both equally stunning. The team of web development professionals at Galactic Digital Studios will work with you to go over the game plan for presenting your best website possible. We do this by asking important questions, gathering information, not only from the answers that you provide, but also from competitor sites, and putting all of that together in what will undoubtedly be the best decision your business could ever make.</p>
                        <p className="h6">The web development services offered by Galactic Digital Studios are not just limited to what is seen on a computer monitor or phone screen. We will go much deeper into the process. This process starts with a conversation about your business, what it is you hope to accomplish, and your intended message to your customers. From there, we take the concept from imagination to pen-and-paper and ultimately to the web.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Galactic Digital Studios&rsquo; web development services will take your idea from concept to pen-and-paper, then ultimately to the world wide web. Included in our web development services is front-end design, otherwise known as &ldquo;what you see on the screen&rdquo;. We also offer back-end architecture and database management to our fellow business owners in the Seattle, Washington area. Other services include content management, including some training or coaching from one of our professionals on how to modify, add, or remove content from your own website. After all, this is going to be your website, so why shouldn&rsquo;t we give you control over what it says?</p>
                            <p className="h6">Also included in our small business web development services is search engine optimization. Our team of web development professionals will take you step-by-step on how to get your site to list on Google. While we cannot guarantee you will make the first page on day one (really nobody can) we can guarantee we will set up the best possible path to organic growth for your website. We determine during this part of the process what your target audience is, what keywords will be best to go after for your website, and also what the target geographical location is going to be, be it in Seattle, Washington, or somewhere else entirely.</p>
                            <p className="h6">Galactic Digital Studios&rsquo; web development services don&rsquo;t end when the site is live. We offer Google Analytics services, which will help track things such as conversion rate and search traffic. We remain dedicated to ensuring your Seattle, Washington based small business gets the most out of its web development services.</p>
                            <h6>Contact Galactic Digital Studios today using the contact form below or the info found on this website to learn more about how we can offer the best web development services for you in Seattle, Washington and surrounding communities.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/seattle-washington-web-development.webp" alt="Seattle Washington web development" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Suspense>
                <Suspense fallback={<p>Loading...</p>}>
                    {isDesktop && (
                        <div className="row">
                            <div className="col">
                                <RequestForm selectedService="website" />
                            </div>
                        </div>
                    )}
                </Suspense>
            </div>
        </>
    )
}

export default Page;