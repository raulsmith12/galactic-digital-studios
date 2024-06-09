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
                metatitle = "Phoenix Arizona Graphic Design - Galactic Digital Studios"
                metadesc = "Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow."
                metakeys = "graphic design, flyer design, banner design, bookmark design, Phoenix, Arizona"
                metaurl = "https://galacticdigitalstudios.com/services/illinois/phoenix-arizona-graphic-design"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Phoenix Arizona Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for Phoenix</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col text-center">
                                    <Image alt="Laptop with trendy graphic design poster behind it" src="https://galacticdigitalstudios.com/img/graphic-design-l.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">Welcome to Galactic Digital Studios, a digital marketing company devoted to high quality graphic design for small businesses. We keep our overhead costs low and pass the savings of that reduced cost on to you, the customer. Whether you are a small business located in the Phoenix, Arizona area or a respectable mid-size regional business, Galactic Digital Studios is here to solve your graphic design problems.</p>
                        <p className="h6">Phoenix, Arizona is a place where its vibrant heart meets the boundless creativity of graphic design excellence. Nestled in the heart of this dynamic city, we stand as the premier destination for those seeking to elevate their brand through captivating visual storytelling. With a dedication to innovation, a passion for collaboration, and a commitment to quality, Galactic Digital Studios is your trusted partner in bringing your creative vision to life.</p>
                        <p className="h6">In the bustling metropolis of Phoenix, Arizona amidst the desert landscape and urban sprawl, Galactic Digital Studios emerges as a beacon of creativity. Our team of seasoned graphic design professionals, each a master of their craft, harnesses the latest tools and techniques to transform ideas into visual masterpieces. From sleek corporate logos to vibrant marketing collateral, we tailor our designs to suit your unique brand identity and captivate your target audience.</p>
                        <p className="h6">At Galactic Digital Studios, we understand that your brand identity is more than just a logo or color scheme - it&rsquo;s a reflection of your values, your mission, and your story. That&rsquo;s why we take a holistic approach to graphic design, delving deep into the essence of your brand to create designs that resonate with authenticity and purpose. Whether you&rsquo;re a startup looking to make a splash or an established business seeking a fresh perspective, we&rsquo;re here to empower your brand identity and help you stand out in a crowded marketplace.</p>
                        <p className="h6">We believe that the best designs are born from collaboration - a meeting of minds, ideas, and perspectives. That&rsquo;s why collaboration lies at the heart of everything we do at Galactic Digital Studios. From the initial brainstorming session to the final touches, we work closely with you every step of the way to ensure that your vision is brought to life with precision and care. Your input is invaluable to us, and we welcome your feedback with open arms, knowing that together, we can achieve greatness.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">We may not be centrally located in the Phoenix, Arizona area, but thanks to the power of technology, we&rsquo;ve had the privilege of working with clients from across the globe, bringing our unique blend of local expertise and global perspective to every project. Whether you&rsquo;re a local business looking to make waves in your community or a multinational corporation seeking a fresh perspective, Galactic Digital Studios has the creativity, the talent, and the passion to help you succeed.</p>
                            <p className="h6">In a world where attention spans are fleeting and competition is fierce, the importance of impactful design cannot be overstated. That&rsquo;s why at Galactic Digital Studios, we&rsquo;re constantly pushing the boundaries of creativity, embracing new technologies, and staying ahead of the curve. Whether it&rsquo;s the latest trends in typography, the cutting-edge techniques in digital illustration, or the innovative approaches to user experience design, we&rsquo;re always on the forefront of the industry, ensuring that your brand remains relevant, engaging, and unforgettable.</p>
                            <p className="h6">Are you ready to embark on a creative journey like no other? Join forces with Galactic Digital Studios and experience the Galactic difference for yourself. From the moment you step through our doors, you&rsquo;ll be greeted with enthusiasm, professionalism, and a passion for design that knows no bounds. Whether you&rsquo;re a seasoned entrepreneur or a first-time business owner, we&rsquo;ll treat your project with the care and attention it deserves, guiding you every step of the way towards graphic design excellence.</p>
                            <h6>Ready to elevate your brand to new heights? Use the form below or the contact information located on this website and contact Galactic Digital Studios today to schedule a consultation with one of our experienced graphic design professionals. Together, we&rsquo;ll unlock the full potential of your brand and create designs that are as bold, as unique, and as unforgettable as the city of Phoenix, Arizona itself. Join us on a journey of creativity, collaboration, and boundless possibility - together, the sky&rsquo;s the limit.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image alt="Phoenix Arizona graphic design" src="https://galacticdigitalstudios.com/img/phoenix-arizona-graphic-design.webp" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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