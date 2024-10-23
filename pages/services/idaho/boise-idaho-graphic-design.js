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
                metatitle = "Boise Idaho Graphic Design - Galactic Digital Studios"
                metadesc = "Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow."
                metakeys = "graphic design, flyer design, banner design, bookmark design, Boise, Idaho"
                metaurl = "https://galacticdigitalstudios.com/services/idaho/boise-idaho-graphic-design/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Boise Idaho Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for Idaho</h2>
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
                        <p className="h6">Welcome to Galactic Digital Studios, your all-in-one experts for professional graphic design services. We specialize in creating captivating designs that bring your brand and vision to life while helping your business thrive. With our ability in business card design, banner design, and a range of other services, we are dedicated to providing exceptional visuals that will leave a lasting impression on your target audience.</p>
                        <p className="h6">Boise, Idaho, is a beautiful and vibrant town full of color and design, so what better place to stand out from the crowd? A well-designed business card is a powerful tool for making connections and leaving a lasting impact. At Galactic Digital Studios, we understand the importance of a visually appealing and professional business card that accurately represents your brand. The talented team of graphic design professionals at Galactic Digital Studios will work with you to create unique business cards that stand out from the crowd. From choosing the right color scheme to selecting the right typography that fits your brand, we make sure that your business card represents your brand identity and leaves a lasting impression on potential clients and partners in the Boise, Idaho area and beyond. With our expertise, you can make a statement and establish credibility in the competitive Boise, Idaho market.</p>
                        <p className="h6">In a visually driven world, eye-catching banners play a crucial role in attracting attention and driving foot traffic to your Boise, Idaho business. Whether you need banners for trade shows, events, or outdoor activities such as birthday parties, Galactic Digital Studios has you covered. No job is too big or too small for . Our team of skilled graphic design professionals will work with you to understand your business goals, target audience and demographics, and brand message. We will then create compelling banners that effectively communicate your key messages and showcase your products or services. With our attention to detail and creative approach, your banners will not only grab attention but also inspire action, helping your Boise, Idaho small business stand out.</p>
                        <p className="h6">In addition to these services, Galactic Digital Studios also offers a comprehensive range of other graphic design services to elevate your brand and enhance your marketing efforts. Our team of highly experienced and professional graphic designers can assist your business with logo design, brochure design, flyer design, social media graphics, and more. We understand the unique needs of Boise, Idaho small businesses and our designs are tailored to reflect the local aesthetics, culture, and values of the city. By working with Galactic Digital Studios, you&rsquo;ll have access to a dedicated team of professionals who will go above and beyond to deliver exceptional designs that align with your business objectives and resonate with the Boise, Idaho community.</p>
                        <p className="h6">By partnering with Galactic Digital Studios for your Boise, Idaho graphic design needs, you will get the benefits of a small business and medium-sized business all in one. Not only will you be getting local expertise from somebody that is familiar with the Boise, Idaho area, helping you connect with the local market and your target audience more effectively, but you also get customized solutions that are tailored to your specific requirements and brand identity. After all, one of the biggest mistakes a small business can make is not following through on brand consistency.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">You also get professional and timely delivery that better reflects the professionalism and dedication you put into your business. And because Galactic Digital Studios is a big believer in working with local businesses first, we will shop around to find the best local print shops in Boise, Idaho and get you the best product for the best price. As a small business ourselves, we understand budget restraints, so we do our best - even in this insane economic time we live in - to work with you on prices and services that are fair and competitive.</p>
                            <h6>Your Boise, Idaho small business deserves exceptional graphic design that captures people&rsquo;s attention, builds brand credibility, and drives success. At Galactic Digital Studios, we have the expertise, creativity, and local understanding to deliver designs that exceed your expectations. Whether you need striking business cards, attention-grabbing banners, or a range of other graphic design services, we are here to help. Use the form below or the contact info found on this site to discuss your requirements and let Galactic Digital Studios make your Boise, Idaho business shine.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/boise-idaho-graphic-design.webp" alt="Boise Idaho graphic design" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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