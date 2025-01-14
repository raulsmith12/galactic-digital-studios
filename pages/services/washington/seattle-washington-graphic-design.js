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
                metatitle = "Seattle Washington Graphic Design - Galactic Digital Studios"
                metadesc = "Elevate your brand with expert graphic design services from Galactic Digital Studios in Seattle. Creative solutions tailored to your business needs."
                metakeys = "graphic design, flyer design, banner design, bookmark design, Seattle, Washington"
                metaurl = "https://galacticdigitalstudios.com/services/washington/seattle-washington-graphic-design/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Seattle Washington Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for Seattle</h2>
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
                        <p className="h6">If you are looking for a qualified and capable graphic design company that is equipped with the experience and skills to create great graphics for whatever the occasion may provide, give the team at Galactic Digital Studios a try. We are capable of creating graphics for your business cards, social media announcements, t-shirts, banners, lamp posts, billboards, and more. Whatever your needs may be, Galactic Digital Studios has you covered.</p>
                        <p className="h6">Seattle, Washington is home to many conventions and other social gatherings. Your business not only deserves to be seen and heard by people in the Seattle, Washington area, but it needs it. With an experienced and attentive graphic design company like Galactic Digital Studios in your corner, you will be more fully prepared to face any social or business occasion.</p>
                        <p className="h6">And while Galactic Digital Studios is new(ish) to the Seattle, Washington area, we also understand the need to shop local first. Our graphic design team has been towing the &ldquo;local first&rdquo; line for over ten years. The last thing you want or need as a small business owner is to deal with the big box online companies on a tight deadline and have your printed graphic design arrive a week later than anticipated. Galactic Digital Studios will shop around the local print shops for you, so that we can find the best deal for your business at the best price and the best timeline for your needs.</p>
                        <p className="h6">Furthermore, we will hand the graphic design files needed to the print shop for you as well, giving them a head start so that your printed designs will be completed faster. As a small business, Galactic Digital Studios understands the concept of &ldquo;time is money&rdquo;. Whether you need a fresh batch of business cards to distribute at the local coffee shops, a new billboard to be posted along I-5, or a fresh banner for your booth to show off at an upcoming convention, Galactic Digital Studios will ensure that you are satisfied with the final product.</p>
                        <p className="h6">Among the many great graphic design services that Galactic Digital Studios provides to Seattle, Washington area small businesses is banner design. With banner design services, you will be involved in the creative design process from the beginning. Our team will conduct a questionnaire that will give us a better understanding of what it is you are looking to advertise or convey in your banner, what brand colors you want to use, and how big the banner will be.</p>
                        <p className="h6">Also included in our graphic design services is something that we briefly touched on earlier, which is business card design. Seattle, Washington is considered by many to be the coffee capital of the United States. It is the birthplace of such staples as Starbucks and Seattle&rsquo;s Best. One staple in many small coffee shops is the display of business cards on a wall somewhere. Your business wants - no, needs - a business card that can stand out in any setting, but especially in a coffee shop business card board. Galactic Digital Studios is capable of designing a business card that will not only let potential customers know you mean business, but also will stand out from the crowd.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">An often-overlooked graphic design service that is starting to catch on with small businesses throughout Seattle, Washington and throughout the United States is sticker design. Our graphic design team will help design a sticker for your business that will give customers the pride and satisfaction of putting it on their water bottles or laptops. And in case the business card board doesn't work out, there&rsquo;s always putting stickers at local small music venues.</p>
                            <h6>Galactic Digital Studios stands ready to assist your Seattle, Washington-based small business with their graphic design needs. Use the contact form below or the contact info found on this site to schedule a consultation with one of our graphic design professionals today.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/seattle-washington-graphic-design.webp" alt="Seattle Washington graphic design" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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