import { Suspense, useEffect, useState } from "react";
import InsidePageHeader from "../../components/InsidePageHeader";
import MetaHeader from '../../components/MetaHeader';
import Image from "next/image";
import { FaStarAndCrescent } from "react-icons/fa";

const About = () => {
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
                metatitle = "About Us - Galactic Digital Studios"
                metadesc = "Started in 2015, Galactic Digital Studios has evolved past simply a web solutions company and has now become a trusted web, graphic, and logo design company."
                metakeys = "about us, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Seattle, Portland, Tacoma"
                metaurl = "https://galacticdigitalstudios.com/about/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="About Galactic Digital Studios" />
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="h5 mx-1">Started in 2015 as Galactic Web Solutions, Galactic has now grown into more than just a website development firm. Today, Galactic Digital Studios lives up to the new name, handling many different aspects of online digital marketing and branding.</p>
                        <p className="h5 mx-1">If you need a new logo, new graphic marketing, or even a new business card, Galactic Digital Studios has a team of designers ready to assist you. If you&rsquo;re in the market for assistance with search engine optimization, Galactic Digital Studios can help with that as well. And yes, we are still very much in the website development business, handling everything from dynamic, fully-functioning frontend sites, to behind-the-curtain backend work that would make Oz take up and notice, to database management to help keep your day-to-day running smoothly as ever.<br /><br />
                        Whatever your online digital branding or design/development needs, Galactic Digital Studios has you covered.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row">
                        {isDesktop && (
                            <div className="col-md-2 py-3">
                                <Image alt="Laptop with saying on it" src="https://galacticdigitalstudios.com/img/ben-kolde-bs2Ba7t69mM-unsplash.jpg" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                            </div>
                        )}
                        <div className="col-sm-12 col-md-10">
                            <h2 className="mx-1">
                                <FaStarAndCrescent className="g-star" />&nbsp;
                                Behind the Name Galactic Digital Studios...
                            </h2>
                            <p className="h5 mx-1">The name &ldquo;Galactic&rdquo; has been at the core of our business since 2015, through the different iterations of the business. It is also at the core of what we stand for. The phrase &ldquo;shoot for the stars&rdquo; is our mantra, and it is something we truly believe every business - no matter big or small - should aspire to do.</p>
                            <p className="h5 mx-1">And at the end of the day, we are a digital studio. We don&rsquo;t just fancy ourselves as a web development studio, but we handle many different digital services that business may require. Those services can include but are not limited to:</p>
                            <ul>
                                <li className="h5 mx-1">Web development</li>
                                <li className="h5 mx-1">Graphic design</li>
                                <li className="h5 mx-1">Logo design</li>
                                <li className="h5 mx-1">Video editing</li>
                                <li className="h5 mx-1">Sound editing</li>
                                <li className="h5 mx-1">Database management</li>
                                <li className="h5 mx-1">Content management and maintenance</li>
                                <li className="h5 mx-1">Search Engine Optimization</li>
                                <li className="h5 mx-1">...and more</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mx-1">
                                <FaStarAndCrescent className="g-star" />&nbsp;
                                What You Can Expect From Us
                            </h2>
                            <p className="h5 mx-1">We strive to better people&rsquo;s lives by helping empower them and their business to achieve heights they never thought possible. Our goal is to provide out of this world service at down to earth prices. Sometimes that means going above and beyond the call of duty and sometimes that means simply reaching out. We aim to make you as the business owner feel like you are an important part of the entire process, even after the process has concluded.</p>
                        </div>
                    </div>
                </Suspense>
            </div>
        </>
    )
}

export default About;