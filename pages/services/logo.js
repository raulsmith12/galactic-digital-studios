import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";

const Web = () => {
    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title="Logo Design" />
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
                    <p>Logos are important. They are a main component in a company&rsquo;s brand identity. They may not be the only thing that matters to having a great brand, but they are very vital. Galactic Digital Studios employs a team of logo designers that is both experienced and capable of making your logo be one that people will stand up and notice right away. We also will help you build a brand style guide that will make your branding all that much more official and professional.</p>
                    <h6>So why not hire Galactic Digital Studios for all your logo design needs and take that first important step in getting your brand and your company noticed? Fill out the form below and let us know how we can assist with your business?</h6>
                    <RequestForm selectedService="logo" />
                </div>
            </div>
        </div>
    )
}

export default Web;
