import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";
import MetaHeader from "../../components/MetaHeader";
import Image from "next/image";

const Brochure = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Brochure Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "Whether you are looking to design a flyer that is advertising an upcoming event, a printed menu for your restaurant, or even a pamphlet chock full of information, Galactic Digital Studios is able to help you create your amazing brochure."
                metakeys = "brochure design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/services/brochure"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Brochure Design" />
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col d-block gap-2 pb-3">
                                    <Link href="/services" className="btn btn-outline-alpha btn-lg btn-block">
                                        <FaAngleDoubleLeft />&nbsp;&nbsp;
                                        Back to Services
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Image alt="Magazine demonstrating brochure design" src="https://galacticdigitalstudios.com/img/brochure-design.jpg" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>Are you looking to build a new menu for your restaurant? Maybe print out some programs for that important event that&rsquo;s coming up? Have a wedding you need to announce to the world? Galactic Digital Studios can do it all! Our team of graphic design experts can help with these and more. We also work with whatever print shop that is near you to make sure that you get the best professional experience you can possibly get.</p>
                        <h6>Be it a brochure, program, menu, or anything else you may need, why not hire Galactic Digital Studios for all your brochure design needs? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="graphic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brochure;
