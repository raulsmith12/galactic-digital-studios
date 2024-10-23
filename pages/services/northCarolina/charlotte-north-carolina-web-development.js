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
                metatitle = "Charlotte North Carolina Web Development - Galactic Digital Studios"
                metadesc = "Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all."
                metakeys = "website design, website development, web development, web design, Charlotte, North Carolina"
                metaurl = "https://galacticdigitalstudios.com/services/northCarolina/charlotte-north-carolina-web-development/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Charlotte North Carolina Web Development" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Web Development and Design For The Queen City</h2>
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
                        <p className="h6">In the pulsating heart of Charlotte, North Carolina, where tradition meets innovation, Galactic Digital Studios emerges as the vanguard of web development services. With a commitment to excellence and a passion for pushing the boundaries of digital creativity, we are your trusted partner in crafting remarkable online experiences.</p>
                        <p className="h6">In the dynamic landscape of the digital age, having a strong online presence is not just an advantage; it&rsquo;s a necessity. Galactic Digital Studios understands the intricate dance between design and functionality, ensuring your website not only captivates visitors but also delivers a seamless user experience. We take pride in being the catalyst that propels your brand to new heights.</p>
                        <p className="h6">At Galactic Digital Studios, we recognize that each client is unique, and so are their requirements. Our team of seasoned web development professionals, designers, and strategists collaborate to create bespoke solutions tailored to your specific needs. Whether you&rsquo;re a small local business or a thriving enterprise, we have the expertise to build a web presence that resonates with your audience.</p>
                        <p className="h6">In a world where users access the internet from an array of devices, responsive design is paramount. Galactic Digital Studios specializes in creating websites that seamlessly adapt to various screen sizes, ensuring an optimal viewing experience across desktops, laptops, tablets, and smartphones. Our commitment to responsive design guarantees that your audience receives a consistent and engaging experience, regardless of the device they use.</p>
                        <p className="h6">Galactic Digital Studios prides itself on standing out as a beacon of creativity. We leverage cutting-edge technologies to build websites that not only meet current web development standards but also future-proof your online presence. From interactive user interfaces to immersive web applications, our team is equipped to turn your vision into a digital masterpiece.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Our web development process is rooted in collaboration. We believe in working closely with our clients to understand their goals, challenges, and aspirations. This collaborative approach ensures that the final product not only meets but exceeds expectations. Transparent communication, regular updates, and client feedback are the cornerstones of our methodology, fostering a partnership that goes beyond mere transactions.</p>
                            <p className="h6">Studies show that users abandon websites that take too long to load. A recent study showed that 4 out of 10 users will go to a different website if the intended website is not loaded within five seconds. Galactic Digital Studios places a premium on speed and performance, optimizing every line of code to ensure swift loading times and smooth navigation. A fast website not only enhances user experience but also improves search engine rankings, contributing to the overall success of your online venture.</p>
                            <p className="h6">A visually stunning website is only effective if it can be found. Galactic Digital Studios believes in the power of organic SEO and integrates SEO best practices into every aspect of web development, ensuring your site is not just a work of art but also a powerful marketing tool. Our SEO experts employ a multifaceted approach to enhance your website&rsquo;s visibility, driving organic traffic and boosting your online presence.</p>
                            <p className="h6">In an era of increasing cyber threats, the security of your website is non-negotiable. Galactic Digital Studios implements robust security measures to safeguard your digital assets and protect sensitive information. From secure socket layer (SSL) certificates to regular security audits, we go the extra mile to ensure your peace of mind. In fact, every website that Galactic Digital Studios develops has an SSL certificate by default.</p>
                            <p className="h6">The digital landscape is ever-evolving, and Galactic Digital Studios is at the forefront of embracing emerging technologies. Whether it&rsquo;s the adoption of progressive web apps (PWAs), integration of artificial intelligence (AI), or harnessing the potential of the latest frameworks, we stay ahead of the curve to future-proof your online presence.</p>
                            <p className="h6">The success of our clients is a testament to the quality of our work. At Galactic Digital Studios, we take pride in the partnerships we build and the success stories we help create. From small businesses making a mark in the local community to enterprises expanding their global footprint, our portfolio is a diverse tapestry of digital achievements.</p>
                            <p className="h6">Embark on a digital journey with Galactic Digital Studios, where innovation meets reliability. Whether you&rsquo;re looking to launch a brand-new website, revamp an existing one, or explore the possibilities of web applications, we have the expertise to turn your ideas into reality.</p>
                            <h6>Use the form below to contact us today, and let&rsquo;s build something extraordinary together.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/charlotte-north-carolina-web-development.webp" alt="Charlotte North Carolina web development" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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