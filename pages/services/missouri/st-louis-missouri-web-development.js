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
                metatitle = "St. Louis Missouri Web Development - Galactic Digital Studios"
                metadesc = "Galactic Digital Studios offers expert web development services in St. Louis, Missouri, delivering custom solutions to enhance your online presence."
                metakeys = "website design, website development, web development, web design, St. Louis, Missouri"
                metaurl = "https://galacticdigitalstudios.com/services/missouri/st-louis-missouri-web-development/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="St. Louis Missouri Web Development" />
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
                        <p className="h6">Are you ready to elevate your online presence and make a lasting impact in the digital sphere? Look no further than Galactic Digital Studios, your premier destination for cutting-edge web development services right here in St. Louis, Missouri. As a dynamic and forward-thinking company, we pride ourselves on transforming ideas into powerful online experiences that captivate, engage, and drive results.</p>
                        <p className="h6">In the bustling digital landscape, a well-crafted website serves as the cornerstone of your brand identity. Galactic Digital Studios is here to ensure that your online presence not only meets industry standards but sets a new benchmark for excellence. Our team of seasoned web developers combines technical prowess with artistic flair, crafting bespoke solutions that seamlessly blend form and function.</p>
                        <p className="h6">At Galactic Digital Studios, we understand that each business is unique, and we approach web development with a personalized touch. Whether you are a startup looking to make a splash or an established enterprise aiming to revamp your online strategy, our experts work closely with you to understand your goals, challenges, and aspirations.</p>
                        <p className="h6">Our commitment to tailor-made solutions means that your website won&lsquo;t be just another template; it will be a digital representation of your brand&lsquo;s personality and values. From intuitive user interfaces to robust backend systems, we have the expertise to bring your vision to life.</p>
                        <p className="h6">In the fast-paced world of web development, staying ahead of the curve is non-negotiable. Galactic Digital Studios prides itself on being at the forefront of technological advancements. Our developers are adept at leveraging the latest tools and frameworks to ensure that your website is not only aesthetically pleasing but also performs seamlessly across devices and platforms.</p>
                        <p className="h6">Whether it&lsquo;s responsive design, progressive web apps, or the integration of emerging technologies like AI and machine learning, we are well-equipped to infuse your website with the innovation it deserves. Galactic Digital Studios doesn&lsquo;t just build websites; we create digital experiences that leave a lasting impression.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Embarking on the journey of web development with Galactic Digital Studios is a collaborative and transparent experience. We believe in keeping our clients informed and involved throughout the process. Here&lsquo;s a glimpse into our comprehensive web development process:</p>
                            <p className="h6">The journey begins with a thorough understanding of your business, goals, and target audience. Our team conducts in-depth consultations to gather insights that will shape the foundation of your digital presence.</p>
                            <p className="h6">Armed with the information gathered, we formulate a strategic plan that outlines the architecture, features, and design elements of your website. This blueprint serves as a roadmap for the development phase.</p>
                            <p className="h6">Our creative team takes the lead in crafting visually stunning designs that align with your brand identity. Simultaneously, our UX/UI experts ensure that the design is not only eye-catching but also intuitive and user-friendly.</p>
                            <p className="h6">The coding magic begins! Our developers bring the designs to life, employing the latest technologies to ensure a seamless and robust website. We prioritize scalability and performance to future-proof your online presence.</p>
                            <p className="h6">Before your website goes live, it undergoes rigorous testing to identify and rectify any potential issues. Our quality assurance process goes beyond &ldquo;happy path&rdquo; testing and ensures that your website is not only visually appealing but also functions flawlessly.</p>
                            <p className="h6">With thorough testing complete, your website is ready for launch. Our team handles the deployment process, ensuring a smooth transition from development to the live environment.</p>
                            <p className="h6">Our commitment to your success doesn&lsquo;t end with the launch. Galactic Digital Studios provides ongoing support and maintenance to keep your website running smoothly. Whether it&lsquo;s updates, troubleshooting, or scaling, we&lsquo;ve got you covered.</p>
                            <p className="h6">Galactic Digital Studios has a track record of delivering exceptional web development solutions to businesses across diverse industries. Our portfolio speaks for itself, showcasing the success stories of clients who have witnessed tangible results through our services.</p>
                            <p className="h6">We believe in the power of collaboration. When you choose Galactic Digital Studios, you are not just hiring a service; you are partnering with a team that is invested in the success of your business. We value open communication and work hand-in-hand with our clients to achieve shared goals.</p>
                            <p className="h6">The digital landscape is ever-evolving, and so are we. Galactic Digital Studios doesn&lsquo;t just build websites for today; we create future-proof solutions that adapt and evolve with the changing technological landscape. Your online presence should be an asset that stands the test of time.</p>
                            <p className="h6">Are you ready to embark on a journey that will redefine your online identity and propel your business to new heights? Galactic Digital Studios is your trusted partner in web development, combining creativity, technology, and strategy to craft digital experiences that resonate.</p>
                            <h6>Use the form below and contact us today to schedule a consultation and take the first step toward a digital transformation that sets you apart in the competitive online landscape, be it in St. Louis, Missouri, or beyond. Your success is our mission, and at Galactic Digital Studios, we&lsquo;re ready to make it a reality.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/st-louis-missouri-web-development.webp" alt="St. Louis Missouri web development" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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