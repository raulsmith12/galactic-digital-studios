import { useEffect, useState } from "react";
import InsidePageHeader from "../../components/InsidePageHeader";
import MetaHeader from '../../components/MetaHeader';
import { FaStarAndCrescent } from "react-icons/fa";
import Service from "../../components/Service";

const Services = () => {
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
                metatitle = "Services - Galactic Digital Studios"
                metadesc = "We are more than just another web design company. We offer fully-scalable web development, graphic design, and logo design, too."
                metakeys = "services, Galactic Digital Studios, web development, web design, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Seattle, Portland, Tacoma"
                metaurl = "https://galacticdigitalstudios.com/services"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Services" />
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="h5 mx-1">Below is a list of services that we deliver and the cities that we can deliver these services to (though we are not limited to just the cities listed below):</p>
                    </div>
                </div>
                <Service serviceTitle="Web Development" serviceSlug="web-development" />
                <Service serviceTitle="Graphic Design" serviceSlug="graphic-design" />
                <Service serviceTitle="Logo Design" serviceSlug="logo-design" />
            </div>
        </>
    )
}

export default Services;