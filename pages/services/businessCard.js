import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";

const Web = () => {
    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title="Business Card Design" />
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
                    <p>The business card. A staple for the professional businessperson. The wrong one can turn somebody completely away. The right one, however, can change a person&rsquo;s or business&rsquo;s life. Galactic Digital Studios knows this all too well and are prepared to work with you to get the best business card experience you can get. Whether you&rsquo;re a young aspiring entrepreneur or one of many executives in a large company, no business card design job is too big or too small for Galactic Digital Studios.</p>
                    <h6>Be it a personal business card for you or a swath of business cards for your business, why not hire Galactic Digital Studios for all your business card design needs? Fill out the form below and let us know how we can assist with your business?</h6>
                    <RequestForm selectedService="graphic" />
                </div>
            </div>
        </div>
    )
}

export default Web;
