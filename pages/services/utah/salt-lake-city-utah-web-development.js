import InsidePageHeader from "../../../components/InsidePageHeader"
import RequestForm from "../../../components/RequestForm"
import MetaHeader from "../../../components/MetaHeader"
import Image from "next/image"
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
                metatitle = "Salt Lake City Utah Web Development - Galactic Digital Studios"
                metadesc = "Galactic Digital Studios offers expert web development services in Salt Lake City, Utah, creating custom websites to elevate your online presence."
                metakeys = "website design, website development, web development, web design, Salt Lake City, Utah"
                metaurl = "https://galacticdigitalstudios.com/services/utah/salt-lake-city-utah-web-development/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Salt Lake City Utah Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For The Salt Lake Valley</h2>
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
                        <p className="h6">Web development is a crucial part of any online branding strategy. Whether you are looking for just a simple site that says &ldquo;We are here, and here is how to get in touch with us&rdquo; or if you are looking for a site that looks to not only announce your online presence but encourage consumers to purchase something online from you, Galactic Digital Studios is here to fulfill your professional web development needs.</p>
                        <p className="h6">Salt Lake City, Utah, now has a professional web development company that works with and for the small business owner. Whether you are just looking to work out of your home in the Avenues or you&rsquo;re a shop at the Gateway or City Creek center that needs a little advertising, our team of web development professionals is here to help.</p>
                        <p className="h6">Members of our team have done web development work with a number of small businesses throughout the Salt Lake valley, both in a small capacity and in helping develop a fully fledged website. We are definitely no stranger in helping small businesses in the Salt Lake City, Utah area make their online presence known.</p>
                        <p className="h6">Whether you are just a small startup and need to make an impact, a small mom-and-pop shop working out of a garage or basement, a small business owner just looking to make a little side cash, or you&rsquo;re a bigger, more well-known business that is looking for some extra help, the team at Galactic Digital Studios is here to assist any and all Salt Lake City, Utah based businesses with their web development needs.</p>
                        <p className="h6">Small business web development packages through Galactic Digital Studios, both for businesses in the Salt Lake City, Utah area and throughout the continental United States, includes full building and maintenance of the website for one year, hosting, registration, and technical support. We also provide your business with email support for as long as hosting is provided, including setting up email addresses and forwarding. If you are worried that you don&rsquo;t know how to set up your new email on your phone or computer, our team is able to help set that up as well.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">But Galactic Digital Studios&rsquo; web development packages do not end there. We also offer comprehensive Google Analytics support with weekly updates on how well your site is performing. We help break down the statistics in helping determine how best to take advantage of things such as search engine optimization, social media marketing, pay-per-click campaigns, and more. Furthermore, we also offer search engine optimization to help your website organically create growth. Because what good is a nice looking website if nobody can find it?</p>
                            <p className="h6">As for social media marketing, businesses in the Salt Lake City, Utah area should be aware that we also help in that department as well. We will help go over your key points that should be addressed, any calls to action that will help drive traffic, and put together a promising marketing campaign. Plus, as a part of our initial web development package, we will use Google Analytics to help monitor and track web traffic resulting from social media marketing. (Yes, Google is able to determine that that&rsquo;s where your traffic is coming from.)</p>
                            <p className="h6">Plus, as previously mentioned, our web development services include a full year of comprehensive and unlimited web hosting. This will allow for a multitude of options for your website, including emails, database management, and backend programming, which opens the door for more advanced sites that include Wordpress and other content management systems.</p>
                            <h6>So if you are in the market for web development in Salt Lake City, Utah, fill out the form below and contact Galactic Digital Studios today.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/salt-lake-city-utah-web-development.webp" alt="Salt Lake City Utah web development" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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