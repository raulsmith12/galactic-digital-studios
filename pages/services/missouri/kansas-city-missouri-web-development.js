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
                metatitle = "Kansas City Missouri Web Development - Galactic Digital Studios"
                metadesc = "Galactic Digital Studios offers web development services in Kansas City, Missouri, creating websites that drive results and enhance your online presence."
                metakeys = "website design, website development, web development, web design, Kansas City, Missouri"
                metaurl = "https://galacticdigitalstudios.com/services/missouri/kansas-city-missouri-web-development/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Kansas City Missouri Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For The Greater Midwest</h2>
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
                        <p className="h6">At Galactic Digital Studios, we pride ourselves on being at the forefront of web development innovation, crafting captivating digital experiences tailored to the unique essence of Kansas City, Missouri, and its vibrant community. With a deep understanding of the local landscape and a passion for cutting-edge technology, we are your trusted partner in bringing your online vision to life.</p>
                        <p className="h6">Galactic Digital Studios has emerged from a shared vision to revolutionize the digital landscape of this beloved city. Our journey began with a simple belief: that every business, big or small, deserves a powerful online presence that resonates with its audience and drives tangible results. Guided by this principle, we set out to empower businesses across Kansas City to thrive in the digital age.</p>
                        <p className="h6">Despite not being physically located in Kansas City, Missouri, we understand the pulse of the local market because of our &ldquo;shop local first&rdquo; mentality. From the bustling streets of the Power & Light District to the serene landscapes of Loose Park, we infuse our projects with the essence of our city, creating digital experiences that speak directly to your target audience.</p>
                        <p className="h6">At Galactic Digital Studios, innovation is in our DNA. We stay ahead of the curve, leveraging the latest technologies and trends to deliver cutting-edge solutions that propel your business forward. Whether it&rsquo;s responsive web design, progressive web application development, e-commerce integration, or custom web applications, we have the expertise to turn your vision into reality.</p>
                        <p className="h6">We believe in the power of collaboration. Our team of seasoned professionals works closely with you every step of the way, ensuring that your vision is translated into a digital masterpiece that exceeds your expectations. From initial concept to final launch, we&rsquo;re with you at every turn, providing expert guidance and unparalleled support.</p>
                        <p className="h6">Your website is the digital storefront of your business. Our team specializes in creating stunning, user-friendly websites that captivate your audience and drive engagement. Whether you&rsquo;re a local restaurant looking to showcase your menu or a tech startup aiming to disrupt the industry, we have the expertise to bring your vision to life.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">In today&rsquo;s digital landscape, e-commerce is king. We design and develop robust e-commerce platforms that streamline the buying process, enhance user experience, and maximize conversions. From seamless payment integration to intuitive product navigation, we equip your online store with the tools it needs to succeed in a competitive market.</p>
                            <p className="h6">Have a unique idea that requires a custom solution? Look no further. Our team specializes in developing bespoke web applications tailored to your specific needs. Whether it&rsquo;s a customer management system, a booking platform, or a data visualization tool, we have the skills and experience to turn your concept into a reality.</p>
                            <p className="h6">Building a website is only half the battle. To truly succeed online, you need to be visible to your target audience. Our SEO experts employ proven strategies to boost your website&rsquo;s ranking on search engines, driving organic traffic and increasing your online visibility. From keyword research to content optimization, we optimize every aspect of your website to ensure maximum exposure.</p>
                            <p className="h6">In an increasingly mobile world, having a mobile app is essential for reaching your audience on the go. Our team specializes in developing sleek, intuitive mobile apps that enhance user experience and drive engagement. Whether it&rsquo;s iOS, Android, or cross-platform development, we have the skills and expertise to bring your app idea to life.</p>
                            <p className="h6">At Galactic Digital Studios, excellence is not just a goal - it&rsquo;s our standard. From the quality of our work to the level of service we provide, we hold ourselves to the highest standards of professionalism and integrity. When you choose Galactic Digital Studios as your web development partner, you can rest assured knowing that you&rsquo;re working with a team that is dedicated to your success.</p>
                            <p className="h6">Ready to take your online presence to new heights? Contact Galactic Digital Studios today to schedule a consultation with one of our experts. Together, we&rsquo;ll explore your goals, brainstorm ideas, and craft a customized solution that sets you apart from the competition. Join the ranks of satisfied clients who have transformed their online presence with Galactic Digital Studios - the premier web development partner in Kansas City, Missouri.</p>
                            <h6>Remember to use the contact form below or the information found on the website to contact one of our web development professionals today.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/kansas-city-missouri-web-development.webp" alt="Kansas City Missouri web development" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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
