import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";
import MetaHeader from "../../components/MetaHeader";
import Image from "next/image";

const CMS = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Content Management System Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "For a truly great dynamic website to work, you need a solid content management system. From WordPress to Drupal to Joomla to even creating our own barebones custom content management system, Galactic Digital Studios has you covered."
                metakeys = "content management, CMS, WordPress, Drupal, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/services/cms"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Content Management" />
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
                                    <Image alt="Laptop displaying content management dashboard" src="https://galacticdigitalstudios.com/img/content-management-l.jpg" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>We get it. There are sometimes that you, as the owner of your company&rsquo;s website, don&rsquo;t want to call a developer at 2am to make a couple small content changes. And with Galactic Digital Studios, you won&rsquo;t have to. Our team is trained and ready to work with you on building a content management system for your website that is designed with the idea in mind of <strong>YOU</strong> being in charge of your content. We will even coach you on how to make the changes yourself so that you are in control of your content.</p>
                        <h6>Be it a website build in Wordpress, a complex Drupal app, or a completely custom-built CMS built in Laravel, why not hire Galactic Digital Studios for all your content management needs? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="website" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CMS;
