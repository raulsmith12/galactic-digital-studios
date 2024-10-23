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
                metatitle = "Phoenix Arizona Web Development - Galactic Digital Studios"
                metadesc = "Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all."
                metakeys = "website design, website development, web development, web design, Phoenix, Arizona"
                metaurl = "https://galacticdigitalstudios.com/services/arizona/phoenix-arizona-web-development/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Phoenix Arizona Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For The Valley of the Sun</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <Image alt="Two monitors with web development code on them" src="https://galacticdigitalstudios.com/img/web-development-l.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">Welcome to Galactic Digital Studios, your premier destination for cutting-edge web development services in Phoenix, Arizona. In today&rsquo;s digital age, having a captivating online presence is crucial for any business to thrive. Whether you&rsquo;re a startup looking to establish your brand or a seasoned enterprise aiming to enhance your digital footprint, our team of skilled web development professionals is here to bring your vision to life.</p>
                        <p className="h6">At Galactic Digital Studios, we believe in the power of innovation and creativity to transform businesses. With years of experience in the industry, our team is dedicated to delivering top-notch web development solutions tailored to meet your specific needs. We pride ourselves on staying ahead of the curve, utilizing the latest technologies and trends to ensure your website stands out in the crowded online landscape.</p>
                        <Suspense fallback={<p>Loading...</p>}>
                            <p className="h6">Your website is more often than not the first point of contact for potential customers. Whether you have a Phoenix, Arizona based business looking to sell your merchandise online or you want to get vital information out there about your business, our web development experts will work closely with you to create a visually stunning and user-friendly website that reflects your brand identity and captivates your audience.</p>
                            <p className="h6">In today&rsquo;s mobile-driven world, it&rsquo;s essential to have a website that looks and performs flawlessly across all devices. We specialize in responsive web development, ensuring that your site is optimized for a seamless experience on smartphones, tablets, and desktops alike. In addition to this, Galactic Digital Studios has skilled web development professionals who can create a progressive web application for your website, making your responsive website a fully-compatible app for your smartphone, all without the need for extra storage on the end user&rsquo;s side.</p>
                            <p className="h6">Ready to take your online store to the next level? Our e-commerce solutions are designed to streamline the buying process, enhance user engagement, and drive conversions. From secure payment gateways to intuitive product catalogs, we&rsquo;ve got you covered. We work with every web payment gateway you can think of; from Paypal to Stripe, Google Pay to Square, our web development team is able to assist you in getting your online store rolling.</p>
                        </Suspense>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Take control of your website with a robust content management system. Whether you prefer WordPress, Shopify, or custom solutions, our developers will build a scalable and easy-to-manage platform that empowers you to update content, add new features, and stay ahead of the competition.</p>
                            <p className="h6">Building a beautiful website is only half the battle - it&rsquo;s essential to ensure that your target audience can find you online. Our SEO experts will optimize your site for search engines, improving its visibility and driving organic traffic to your business. Galactic Digital Studios believes in driving organic SEO for your website first before trying anything &ldquo;extra&rdquo;. This has typically been known to have the best results.</p>
                            <p className="h6">With a proven track record of success, Galactic Digital Studios brings a wealth of experience and expertise to every project we undertake. We&rsquo;ve worked with businesses of all sizes across various industries, delivering outstanding results that exceed expectations.</p>
                            <p className="h6">We believe in the power of collaboration and transparency. From the first time that we discuss your plan for your Phoenix, Arizona business&rsquo;s website to the day the site is launched, we openly and consistently communicate with you to discuss the progress made on the website and ask for and welcome feedback regarding our progress. Your satisfaction is our top priority.</p>
                            <p className="h6">The digital landscape is constantly evolving, and we&rsquo;re committed to staying ahead of the curve. Our team is always exploring new technologies and techniques to deliver innovative solutions that give your business a competitive edge.</p>
                            <p className="h6">Our relationship doesn&rsquo;t end once your website goes live. We offer ongoing support and maintenance services to keep your site running smoothly and securely. Whether you need updates, troubleshooting, or optimization, we&rsquo;re here to help. We also provide regular updates on ongoing SEO efforts as well as any changes to your analytics and site traffic.</p>
                            <p className="h6">Ready to take your online presence to new heights? Look no further than Galactic Digital Studios. From custom web design to e-commerce solutions and SEO optimization, we have the expertise and dedication to bring your vision to life.</p>
                            <h6>If your Phoenix, Arizona business is ready to shoot for the stars, use the contact form below today to schedule a consultation and discover how we can help your business succeed online.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image alt="Phoenix Arizona web development" src="https://galacticdigitalstudios.com/img/phoenix-arizona-web-development.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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