import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";

const Web = () => {
    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title="Graphic Design" />
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col d-block gap-2 pb-3">
                                <Link href="/services" className="btn btn-outline-primary btn-lg btn-block">
                                    <FaAngleDoubleLeft />&nbsp;&nbsp;
                                    Back to Services
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="https://galacticdigitalstudios.com/img/ben-kolde-bs2Ba7t69mM-unsplash.jpg" width="100%" alt="Laptop with saying on it" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <p>There are many graphic design services that are not individually outlined on this website that Galactic Digital Studios is prepared to work with your business on, including:</p>
                    <ul>
                        <li>Lamp Post Banners</li>
                        <li>Kiosk Banners</li>
                        <li>Flyers</li>
                        <li>Online Style Guides</li>
                        <li>Packaging</li>
                        <li>And more!</li>
                    </ul>
                    <h6>Why not hire Galactic Digital Studios for all your various graphic design needs? Fill out the form below and let us know how we can assist with your business?</h6>
                    <RequestForm selectedService="graphic" />
                </div>
            </div>
        </div>
    )
}

export default Web;
