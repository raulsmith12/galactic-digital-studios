import { Suspense, useEffect, useState } from "react";
import InsidePageHeader from "../../../components/InsidePageHeader"
import MetaHeader from "../../../components/MetaHeader";
import RequestForm from "../../../components/RequestForm"
import Image from "next/image"

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
                metatitle = "Boise Idaho Web Development - Galactic Digital Studios"
                metadesc = "Galactic Digital Studios offers top-notch web development services in Boise, Idaho. Boost your online presence with our expert, custom web solutions."
                metakeys = "website design, website development, web development, web design, Boise, Idaho"
                metaurl = "https://galacticdigitalstudios.com/services/idaho/boise-idaho-web-development/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
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
                                    <Image src="https://galacticdigitalstudios.com/img/web-development-l.webp" alt="Two monitors with web development code on them" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">Having an established and experienced small business web development specialist in your corner can make all the difference in the world when looking to establish your company on the digital marketplace. Galactic Digital Studios not only brings years of experience in development small business websites, but they also know how to establish small businesses in the digital marketplace.</p>
                        <p className="h6">And now Galactic Digital Studios is delivering web development services to small businesses in the Boise, Idaho area. While Boise, Idaho may be a small town by most standards, it is rapidly growing and teeming with small businesses - ranging from coffee shops to souvenir stands - ready to take that next step in establishing an online presence.</p>
                        <Suspense fallback={<p>Loading...</p>}>
                            <p className="h6">Boise, Idaho is a vibrant city that offers numerous opportunities for businesses of any size. When dealing with small business web development in Boise, Idaho, there are several key advantages worth considering. Galactic Digital Studios understands and acknowledges these unique opportunities and benefits that can be derived from working with small businesses in such a unique and thriving town.</p>
                            <p className="h6">One of the most important reasons to work with a small business web developer is the understanding of working in such a close-knit community like Boise, Idaho, that offers a strong sense of local support. Galactic Digital Studios has always believed in supporting local first, and in a town that fosters a tight community where small businesses are valued and actively supported like Boise, Idaho, that is very crucial. By working with smaller businesses, you contribute to the growth and vitality of the local economy, making a tangible impact on the community. Also, working with small businesses - particularly when hiring a web developer - allows for a more personalized experience, as they often have a deep understanding of the local market and its specific needs.</p>
                            <p className="h6">Small businesses in Boise, Idaho also tend to offer a more flexible approach to rendering services. Unlike large corporations, they can quickly adapt to changing market conditions and customer preferences. This flexibility enables small businesses to be innovative and responsive, which can be advantageous for clients seeking customized solutions or swift problem-solving. With Galactic Digital Studios, you can expect telephone or email customer service - even outside normal business hours. We want to make sure that your web development process is not only something that you are proud of, but that you will continue to come back to.</p>
                        </Suspense>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Small business web development services from Galactic Digital Studios often focus on building lasting business relationships. We ultimately do not want you to just think of our web development team as someone you hired to do a job, but rather a fellow small business that understands and recognizes the struggles of making it as a small business. We prioritize personalized attention and will go the extra mile to ensure you are satisfied with the result. The web development team at Galactic Digital Studios wants you as a Boise, Idaho small business owner to come to expect a higher level of individualized care and attention when dealing with Galactic Digital Studios.</p>
                            <p className="h6">Galactic Digital Studios believes that the launch of a website does not necessarily end our services; in fact, we can argue that our services have only started by that point. We perform post-launch website care including Google Analytics, search engine optimization, quick edits, and for those that purchase a custom content management system, coaching on how to operate and make necessary edits to the site. Our web development team is invested in the success of your Boise, Idaho small business.</p>
                            <p className="h6">Additionally, Galactic Digital Studios believes that not all websites should be created equal. While a fully dynamic, full stack web development package might work for mid-sized local businesses, small mom-and-pop shops that have no more than 3 pages on their website might not need as many features. Just like the bigger the company, the more advanced the web development package will need to be.</p>
                            <p className="h6">Also, every web development package is responsive by default. Meaning that you will be able to view your website on any screen and it will come through stunningly. Boise, Idaho businesses deserve to be seen and heard on not just desktops, but tablets and phones as well.</p>
                            <h6>If you have any questions about our web development services in Boise, Idaho or any of the surrounding communities, please use the contact form below or contact one of our team members using the contact info found on this site.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/boise-idaho-web-development.webp" alt="Boise Idaho web development" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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