import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";
import MetaHeader from "../../components/MetaHeader";
import Image from "next/image";

const Database = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Database Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "Databases are an integral part of any dynamic website. From products and shipping to content and user information, databases are everywhere online. Galactic Digital Studios will handle all of your database management needs."
                metakeys = "database management, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/services/database"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Database Management" />
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
                                    <Image alt="Man writing database management roadmap on glass window" src="https://galacticdigitalstudios.com/img/database-management-l.jpg" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>What the customer sees on their phone, laptop, tablet, or desktop is only a fraction of a company&rsquo;s website these days. What lies beneath often times is a massive database of user information, products, content, and various other critical information that needs to be stored somewhere for safe keeping or later use. Galactic Digital Studios is dedicated to ensure that your databases are fully functional, operational, and ready to store all that data. Whether it is a small database that only has a few tables or a massive database with thousands of entries that need to be kept up to date, no table or database is too big or too small for Galactic Digital Studios&rsquo; team of experts.</p>
                        <h6>With all of that in mind, why not hire Galactic Digital Studios for all your database management needs? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="website" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Database;
