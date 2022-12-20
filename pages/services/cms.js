import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";

const Web = () => {
    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title="Content Management" />
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
                    <p>We get it. There are sometimes that you, as the owner of your company&rsquo;s website, don&rsquo;t want to call a developer at 2am to make a couple small content changes. And with Galactic Digital Studios, you won&rsquo;t have to. Our team is trained and ready to work with you on building a content management system for your website that is designed with the idea in mind of <strong>YOU</strong> being in charge of your content. We will even coach you on how to make the changes yourself so that you are in control of your content.</p>
                    <h6>Be it a website build in Wordpress, a complex Drupal app, or a completely custom-built CMS built in Laravel, why not hire Galactic Digital Studios for all your content management needs? Fill out the form below and let us know how we can assist with your business?</h6>
                    <RequestForm selectedService="website" />
                </div>
            </div>
        </div>
    )
}

export default Web;
