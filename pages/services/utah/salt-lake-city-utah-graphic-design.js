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
                metatitle = "Salt Lake City Utah Graphic Design - Galactic Digital Studios"
                metadesc = "Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow."
                metakeys = "graphic design, flyer design, banner design, bookmark design, Salt Lake City, Utah"
                metaurl = "https://galacticdigitalstudios.com/services/utah/salt-lake-city-utah-graphic-design/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Salt Lake City Utah Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for Salt Lake City</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col text-center">
                                    <Image src="https://galacticdigitalstudios.com/img/graphic-design-l.webp" alt="Laptop with trendy graphic design poster behind it" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">There are many reasons why you would want an experienced professional to handle your graphic design needs. First, an experienced graphic design professional will use the best tool to bring out the best in a particular project. Also they will likely inquire a lot of feedback from the client regarding what they want. Many times, when they make a mistake or something doesn&rsquo;t sit with the client, they will calmly but quickly pivot and make the necessary changes. These are just a few reasons why hiring an experienced graphic designer is important.</p>
                        <p className="h6">Few metropolitan areas have both the historical richness and the trendy progressiveness of Salt Lake City, Utah. With the historical importance of Temple Square and the beautiful Rocky Mountains, combined with a growing progressive culture, particularly downtown, there are few places that both inspire and motivate graphic design quite like Salt Lake.</p>
                        <p className="h6">What&rsquo;s better is that Galactic Digital Studios was founded in Salt Lake City, Utah, so our team of graphic design professionals understands and knows the area and its people all too well. What&rsquo;s more, we work with and will often refer to local print companies first before going to the big national print shops for all of your graphic design needs.</p>
                        <p className="h6">There are a multitude of needs and services that one could get from a graphic designer, either in Salt Lake City, Utah, or anywhere. For instance, you could always need some business cards printed up for an upcoming social networking event. Perhaps you have an event coming up and need some flyers designed and printed.</p>
                        <p className="h6">If your business feels daring enough for one, there&rsquo;s always the possibility of a billboard design that could really catch the public eye. Maybe you&rsquo;re advertising during a book fair or an event at a library and need some bookmarks designed. Need some coffee cups for a local startup coffee shop? We can handle that too.</p>
                        <p className="h6">Graphic design services don&rsquo;t necessarily have to be about printed design, either. Galactic Digital Studios understands that there are many needs and applications of digital graphic design as well. It could be something as simple as an ad banner for an online advertising campaign, a social media ad, or even a banner or icon for your social media. It&rsquo;s as simple as giving our team the assets and information that you would need to convey in your digital design and letting us roll with the ball from there.</p>
                        <p className="h6">Whatever your needs for graphic design services in the Salt Lake City, Utah area, or anywhere in the United States, our team remains ready to assist you in whatever endeavor you are looking to accomplish.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Part of the graphic design process involves going over the details of the service requested. For instance, if you are looking for a business card design, we go over what the business card would say, if it&rsquo;s going to be embossed or not, what colors you want on the business card, and if it&rsquo;s single- or double-sided. Then we request assets from your end, starting with the logo and what colors are consistent with the brand identity. We may also ask for the font or typeface that is in the logo; another detail that keeps brand consistency up. Lastly, we discuss whether you want the business cards printed locally (which we prefer) or through one of the online big box companies. And while our team has their preferences, this is ultimately your project and your business, and therefore your decision. Whatever you as the client decide what to do is what our team of graphic designers will adhere to.</p>
                            <h6>If you are interested in obtaining graphic design services in the Salt Lake City, Utah area, please fill out the form below and contact one of our highly experienced professionals today.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/salt-lake-city-utah-graphic-design.webp" alt="Salt Lake City Utah graphic design" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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
                                <RequestForm selectedService="graphic" />
                            </div>
                        </div>
                    )}
                </Suspense>
            </div>
        </>
    )
}

export default Page;