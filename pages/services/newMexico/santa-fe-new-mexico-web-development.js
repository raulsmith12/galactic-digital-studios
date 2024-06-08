import Image from "next/image";
import InsidePageHeader from "../../../components/InsidePageHeader"
import MetaHeader from "../../../components/MetaHeader";
import RequestForm from "../../../components/RequestForm"
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
                metatitle = "Santa Fe New Mexico Web Development - Galactic Digital Studios"
                metadesc = "Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all."
                metakeys = "website design, website development, web development, web design, Santa Fe, New Mexico"
                metaurl = "https://galacticdigitalstudios.com/services/newMexico/santa-fe-new-mexico-web-development"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Santa Fe New Mexico Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For The Land of Enchantment</h2>
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
                        <p className="h6">At Galactic Digital Studios, we embark on a cosmic journey to bring your digital dreams to life. We pride ourselves on being more than just a web development company—we are pioneers in the digital frontier, pushing boundaries, and transforming visions into stunning online realities.</p>
                        <p className="h6">Santa Fe, New Mexico, renowned for its rich cultural heritage and artistic vibrancy, serves as the perfect backdrop for our mission. Inspired by the city&rsquo;s eclectic blend of tradition and innovation, we strive to marry cutting-edge technology with timeless design principles. Whether you&rsquo;re a local business looking to establish your online presence or a global brand seeking to captivate new audiences, we&rsquo;re here to transform your aspirations into digital masterpieces.</p>
                        <p className="h6">In the vibrant tapestry of Santa Fe&rsquo;s small business community, the significance of a strong online presence cannot be overstated. With its unique blend of culture, art, and history, Santa Fe offers a fertile ground for local businesses to thrive. However, in an increasingly digital world, having a robust online presence is essential for reaching new customers, expanding market reach, and staying ahead of the competition. At Galactic Digital Studios, we understand the challenges and opportunities facing Santa Fe&rsquo;s small businesses, and we&rsquo;re committed to empowering them with cutting-edge web development services. From artisanal shops to boutique galleries, restaurants to wellness centers, our tailored solutions are designed to amplify their voices, elevate their brands, and connect them with the global marketplace. By harnessing the power of the internet, Santa Fe&rsquo;s small businesses can unlock a universe of possibilities, driving growth, and prosperity for years to come.</p>
                        <p className="h6">We understand that no two businesses are alike. That&rsquo;s why we take the time to listen, collaborate, and tailor our services to suit your unique needs. Whether you require a sleek e-commerce platform, a dynamic corporate website, or a captivating portfolio showcase, our team of experts is dedicated to delivering solutions that exceed your expectations.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Being a web development company working with companies throughout the continental United States, we understand the need for a global reach. Leveraging the latest technologies and best practices, we develop websites that not only resonate with the local community but also attract attention on a global scale. From search engine optimization (SEO) to responsive design, we ensure that your website stands out in a crowded digital landscape.</p>
                            <p className="h6">At Galactic Digital Studios, creativity knows no limits. Our team of designers, developers, and digital strategists are passionate about pushing boundaries and exploring new horizons. Whether it&rsquo;s crafting visually stunning interfaces, optimizing user experiences, or integrating cutting-edge functionalities, we&rsquo;re committed to delivering excellence in every aspect of our work.</p>
                            <p className="h6">We believe that collaboration is the key to success. From concept to completion, we work closely with our clients every step of the way, keeping you informed, engaged, and empowered throughout the entire process. We want to make sure that your vision is realized with precision and efficiency.</p>
                            <p className="h6">From wireframing to final deployment, we specialize in crafting visually stunning, user-friendly websites that captivate audiences and drive results. Whether you&rsquo;re starting from scratch or looking to revamp your existing site, our team has the expertise and creativity to bring your vision to life.</p>
                            <p className="h6">Ready to take your online store to the next level? Our e-commerce solutions are designed to streamline the shopping experience, maximize conversions, and enhance customer satisfaction. From secure payment gateways to intuitive product catalogs, we&rsquo;ll help you create a seamless online shopping destination that keeps customers coming back for more.</p>
                            <p className="h6">In today&rsquo;s mobile-centric world, having a mobile app is essential for reaching and engaging your audience on the go. Whether you&rsquo;re targeting iOS, Android, or cross-platform users, our mobile app development services are tailored to your specific needs, ensuring a smooth and intuitive user experience across all devices.</p>
                            <p className="h6">A stunning website is just the beginning. Our digital marketing services are designed to help you reach your target audience, drive traffic to your site, and maximize your online visibility. From search engine optimization (SEO) to social media marketing, we&rsquo;ll develop a customized strategy that puts your brand in front of the right people at the right time.</p>
                            <p className="h6">As pioneers in the digital realm, we&rsquo;re passionate about pushing boundaries, sparking creativity, and unlocking the full potential of the online world. Whether you&rsquo;re a small startup or a global enterprise, we&rsquo;re here to be your trusted partner in the journey towards digital success.</p>
                            <h6>Use the form below and contact us today to learn more about how Galactic Digital Studios can help elevate your online presence to new heights. Together, let&rsquo;s embark on a cosmic adventure unlike any other.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/santa-fe-new-mexico-web-development.webp" alt="Santa Fe New Mexico web development" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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