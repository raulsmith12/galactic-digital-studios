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
                metatitle = "Salt Lake City Utah Logo Design - Galactic Digital Studios"
                metadesc = "Boost your brand with custom logo design services from Galactic Digital Studios in Salt Lake City. Creative, professional, and tailored to your business needs."
                metakeys = "logo design, Salt Lake City, Utah"
                metaurl = "https://galacticdigitalstudios.com/services/utah/salt-lake-city-utah-logo-design/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
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
                                    <Image src="https://galacticdigitalstudios.com/img/logo-design-l.webp" alt="Monitor with laptop with logo design on both" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">Many will claim that good quality logo design is an art form, and in many ways, those people would be correct. Designing logos that help a brand&rsquo;s identity become more recognizable and more appealing is a form of digital art. Galactic Digital Studios was founded on two basic premises: creating websites for small businesses and creating logos for local small businesses. Several years later, Galactic Digital Studios continues to remain dedicated to giving your digital branding that extra sauce that makes it stand apart from the rest.</p>
                        <p className="h6">There are many great local small businesses in Salt Lake City, Utah, and a good majority of them are in need of good quality logo design. That is why Galactic Digital Studios specializes in designing logos for companies of varying sizes. Whether you are a small mom-and-pop shop working out of an apartment in downtown Salt Lake City or you are a business setting up shop along State Street, Galactic Digital Studios promises to deliver the same quality of logo design no matter what; no business or job is too small or too big.</p>
                        <p className="h6">In addition to the logo design service that Galactic Digital Studios offers, Salt Lake City, Utah business owners will be happy to note that we also offer many services to go with your new logo. Our team of designers and business planners will happily go over brand style guides to help keep your new brand identity consistent across all forms of media, business card designs to help promote and expose your new logo to the public, even social media items such as icons, banners, advertising, and social media posts. The options are definitely aplenty with our logo and graphic design packages.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row pt-2">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">The logo design process with the team of digital graphic design professionals at Galactic Digital Studios will consist of taking your idea and what you hope to accomplish with your brand identity, mold it into different drafts or mockups until we are on the right track, and then we give it some style and touch it up until you are ready to move forward with the process of putting together a final product. We are not done with designing your company&rsquo;s logo until everybody is satisfied with the result.</p>
                            <p className="h6">And while throwing mountains or a J note on a Salt Lake City, Utah logo design might be fun and &ldquo;hip&rdquo;, let&rsquo;s be honest; it&rsquo;s been way overdone and most of the time comes across as tacky. While Galactic Digital Studios is definitely about thinking outside the box with your logo design, you can rest assured that we don&rsquo;t follow or suggest following any fads, both locally and otherwise. We want to put out a logo into general consumption that will remain in the market for years to come.</p>
                            <p className="h6">Furthermore, you are the owner of a unique business. Sure, there are dozens of other businesses that offer the services you offer, but yours is unique in its presentation and its quality; shouldn&rsquo;t your logo design reflect that uniqueness and not be a carbon copy of other similar companies? Whether you are a Salt Lake City, Utah based company or you call another part of the country home, Galactic Digital Studios will remain committed to giving you a great and agreeable logo.</p>
                            <p className="h6">Your brand identity should be more than just your finished logo design, though. That is why Galactic Digital Studios also offers comprehensive digital branding and style guides that will keep your look consistent across social media, billboards, digital marketing, print, and more.</p>
                            <h6>Galactic Digital Studios has you covered for great logo design in Salt Lake City, Utah. Use the form below and contact a member of our courteous team today.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/salt-lake-city-utah-logo-design.webp" alt="Salt Lake City Utah logo design" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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
                                <RequestForm selectedService="logo" />
                            </div>
                        </div>
                    )}
                </Suspense>
            </div>
        </>
    )
}

export default Page;