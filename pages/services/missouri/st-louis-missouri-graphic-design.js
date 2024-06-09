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
                metatitle = "St. Louis Missouri Graphic Design - Galactic Digital Studios"
                metadesc = "Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow."
                metakeys = "graphic design, flyer design, banner design, bookmark design, St. Louis, Missouri"
                metaurl = "https://galacticdigitalstudios.com/services/missouri/st-louis-missouri-graphic-design"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="St. Louis Missouri Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for St. Louis</h2>
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
                        <p className="h6">Are you ready to propel your business into the visual stratosphere? Look no further! Galactic Digital Studios is your premier destination for cutting-edge graphic design services in the heart of St. Louis, Missouri. We&rsquo;re not just a studio; we&rsquo;re a launchpad for your brand&rsquo;s journey through the cosmos of creativity.</p>
                        <p className="h6">At Galactic Digital Studios, we understand that in the digital age, first impressions are everything. Your brand&rsquo;s visual identity is the key to unlocking success in a competitive market. With a stellar team of passionate and skilled graphic designers, we go above and beyond to transform your ideas into captivating visual experiences.</p>
                        <p className="h6">Galactic Digital Studios offers a comprehensive suite of graphic design services tailored to meet the diverse needs of businesses in St. Louis, Missouri and beyond. Whether you&rsquo;re a startup seeking a distinctive logo, an established brand in need of a website revamp, or an event organizer looking for eye-catching promotional materials, we&rsquo;ve got you covered.</p>
                        <p className="h6">Your logo is the nucleus of your brand. Let us create a unique and memorable logo that sets your business apart from the rest.</p>
                        <p className="h6">Navigate the digital galaxy with a website that not only looks stunning but also provides a seamless user experience. Our web design experts craft visually appealing, responsive, and user-friendly websites.</p>
                        <p className="h6">From business cards to brochures, our print design services add a touch of cosmic elegance to your promotional materials. Make an impact in the physical realm with our print design expertise.</p>
                        <p className="h6">Engage your audience on social media with captivating graphics. Our designers will create visuals that speak volumes and leave a lasting impression across various social platforms.</p>
                        <p className="h6">Build a cohesive brand identity with our comprehensive branding solutions. We&rsquo;ll work with you to develop a brand strategy that resonates with your target audience.</p>
                        <p className="h6">Our design process is as transparent as the night sky. When you choose Galactic Digital Studios, you embark on a journey of collaboration and creativity.</p>
                        <p className="h6">We start by getting to know you and your brand. What are your goals, values, and aspirations? Understanding your vision is the first step toward creating stellar designs.</p>
                        <p className="h6">Armed with insights, our designers take to the drawing board - or rather, the digital canvas. We brainstorm, sketch, and conceptualize ideas that align with your brand identity and objectives.</p>
                        <p className="h6">Once a concept is chosen, our skilled designers bring it to life. Using the latest tools and techniques, we craft designs that not only meet but exceed your expectations.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Your feedback is invaluable. We believe in collaboration and refinement. We work closely with you to fine-tune the designs until they align perfectly with your vision.</p>
                            <p className="h6">When the designs have reached the level of perfection that defines Galactic Digital Studios, we deliver them to you in the format of your choice. Whether it&rsquo;s a high-resolution logo, a fully functional website, or a set of engaging social media graphics, we ensure that the final deliverables exceed your expectations.</p>
                            <p className="h6">What sets Galactic Digital Studios apart from the rest? It&rsquo;s not just about designing visuals; it&rsquo;s about creating experiences. Our commitment to innovation and imagination is reflected in every pixel we place and every line we draw. Here&rsquo;s why we&rsquo;re the go-to graphic design business for your St. Louis, Missouri small business.</p>
                            <p className="h6">Our team comprises seasoned graphic design professionals with a passion for pushing the boundaries of creativity. We stay abreast of industry trends to ensure that your designs are not just current but ahead of the curve.</p>
                            <p className="h6">Your satisfaction is our priority. We believe in open communication, active collaboration, and a client-centric approach that ensures your needs and preferences are not just met but exceeded.</p>
                            <p className="h6">Whether you&rsquo;re a small startup or a large corporation, our services are tailored to suit businesses of all sizes. We adapt our design approach to match the unique requirements of each client.</p>
                            <p className="h6">We understand that time is of the essence. Our efficient workflow and project management ensure that your designs are delivered on time, without compromising on quality.</p>
                            <p className="h6">Stellar design shouldn&rsquo;t break the bank. At Galactic Digital Studios, we offer competitive pricing without compromising on the quality of our work. We believe in making top-notch design services accessible to businesses of all sizes.</p>
                            <p className="h6">Embark on a journey of creativity and innovation with Galactic Digital Studios. Whether you&rsquo;re starting from scratch or looking to refresh your brand&rsquo;s image, our team is ready to bring your vision to life. Let&rsquo;s collaborate to create designs that not only meet expectations but exceed them, propelling your brand to new heights in the St. Louis, Missouri business galaxy.</p>
                            <h6>Use the form below and contact Galactic Digital Studios today!</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/st-louis-missouri-graphic-design.webp" alt="St. Louis Missouri graphic design" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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