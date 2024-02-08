import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";
import MetaHeader from "../../components/MetaHeader";

const Logo = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Logo Design Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "Logo design is a critical part of any company's brand identity, online or otherwise. Galactic Digital Studios brings logo design services to companies of all sizes and shapes."
                metakeys = "logo design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/services/logo"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Logo Design" />
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
                                    <img src="https://galacticdigitalstudios.com/img/logo-design-l.jpg" width="100%" alt="Monitor and laptop with logo design on it" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>Logos are important. They are a main component in a company&rsquo;s brand identity. They may not be the only thing that matters to having a great brand, but they are very vital. Galactic Digital Studios employs a team of logo designers that is both experienced and capable of making your logo be one that people will stand up and notice right away. We also will help you build a brand style guide that will make your branding all that much more official and professional.</p>
                        <h6>So why not hire Galactic Digital Studios for all your logo design needs and take that first important step in getting your brand and your company noticed? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo;
