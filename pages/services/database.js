import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";

const Web = () => {
    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title="Database Management" />
            </div>
            <div className="row">
                <div className="col-3">
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
                                <img src="https://galacticdigitalstudios.com/img/ben-kolde-bs2Ba7t69mM-unsplash.jpg" width="100%" alt="Laptop with saying on it" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <p>What the customer sees on their phone, laptop, tablet, or desktop is only a fraction of a company&rsquo;s website these days. What lies beneath often times is a massive database of user information, products, content, and various other critical information that needs to be stored somewhere for safe keeping or later use. Galactic Digital Studios is dedicated to ensure that your databases are fully functional, operational, and ready to store all that data. Whether it is a small database that only has a few tables or a massive database with thousands of entries that need to be kept up to date, no table or database is too big or too small for Galactic Digital Studios&rsquo; team of experts.</p>
                    <h6>With all of that in mind, why not hire Galactic Digital Studios for all your database management needs? Fill out the form below and let us know how we can assist with your business?</h6>
                    <RequestForm selectedService="website" />
                </div>
            </div>
        </div>
    )
}

export default Web;
