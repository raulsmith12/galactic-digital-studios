import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";
import MetaHeader from "../../components/MetaHeader";
import Image from "next/image";

const BusinessCard = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Business Card Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "A proper, eye-catching, effective business card can make all the difference in the world. Your business card should sing to the world that you are ready to work for them! Let Galactic Digital Studios work for you to design your business card."
                metakeys = "business card design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/services/businessCard"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Business Card Design" />
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
                                    <Image alt="Wooden business card design on wooden display stand" src="https://galacticdigitalstudios.com/img/business-card-design-l.jpg" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>The business card. A staple for the professional businessperson. The wrong one can turn somebody completely away. The right one, however, can change a person&rsquo;s or business&rsquo;s life. Galactic Digital Studios knows this all too well and are prepared to work with you to get the best business card experience you can get. Whether you&rsquo;re a young aspiring entrepreneur or one of many executives in a large company, no business card design job is too big or too small for Galactic Digital Studios.</p>
                        <h6>Be it a personal business card for you or a swath of business cards for your business, why not hire Galactic Digital Studios for all your business card design needs? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="graphic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessCard;
