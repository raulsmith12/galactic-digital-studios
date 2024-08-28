import ContactForm from "../../components/ContactForm";
import InsidePageHeader from "../../components/InsidePageHeader";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt, FaFlagUsa, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import MetaHeader from '../../components/MetaHeader';
import { Suspense } from "react";

const Contact = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Contact Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "There are many ways to contact the team at Galactic Digital Studios. You can contact any team member directly by email or phone number or you can contact the team directly using our contact form on this page."
                metakeys = "contact us, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/contact"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Contact Galactic Digital Studios" />
                </div>
                <div className="row mx-0">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 order-md-last">
                                    <p>Use the contact form on this page to contact our team of designers and developers, or you can contact the team members directly using the information below:</p>
                                    <h5>Galactic Digital Studios</h5>
                                    <p>
                                        <FaMapMarkerAlt />&nbsp;
                                        Servicing clients throughout the continental United States&nbsp;<FaFlagUsa />
                                    </p>
                                    <p>
                                        <FaFacebookF />&nbsp;facebook.com/galacticdigitalstudios
                                    </p>
                                    <h5>Raul Smith</h5>
                                    <p>
                                        <FaEnvelopeOpenText />&nbsp;
                                        Email: raul.smith@galacticdigitalstudios.com
                                    </p>
                                    <p>
                                        <FaPhoneAlt />&nbsp;
                                        Phone: 801.410.0738
                                    </p>
                                    <p>
                                        <FaGithub />&nbsp;
                                        Github: https://github.com/raulsmith12
                                    </p>
                                </div>
                                <Suspense fallback={<p>Loading Form...</p>}>
                                    <div className="col-md-6 col-sm-12 order-md-first">
                                        <ContactForm />
                                    </div>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;