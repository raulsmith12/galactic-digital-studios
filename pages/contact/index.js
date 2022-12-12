import ContactForm from "../../components/ContactForm";
import InsidePageHeader from "../../components/InsidePageHeader";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt, FaFlagUsa, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <InsidePageHeader title="Contact Galactic Digital Studios" />
            </div>
            <div className="row mx-0">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <ContactForm />
                            </div>
                            <div className="col-6">
                                <p>Use the contact form on this page to contact our team of designers and developers, or you can contact the team members directly using the information below:</p>
                                <h5>Galactic Digital Studios</h5>
                                <p>
                                    <FaMapMarkerAlt />&nbsp;
                                    Located in Salt Lake City, Utah but servicing clients throughout the continental United States&nbsp;<FaFlagUsa />
                                </p>
                                <p>
                                    <FaFacebookF />
                                </p>
                                <p>
                                    <FaTwitter />
                                </p>
                                <h5>Raul Smith</h5>
                                <p>
                                    <FaEnvelopeOpenText />&nbsp;
                                    Email: raul@galacticdigitalstudios.com
                                </p>
                                <p>
                                    <FaPhoneAlt />&nbsp;
                                    Phone: 385.275.8665
                                </p>
                                <p>
                                    <FaGithub />&nbsp;
                                    Github: https://github.com/raulsmith12
                                </p>
                                <h5>Orion Hoag</h5>
                                <p>
                                    <FaEnvelopeOpenText />&nbsp;
                                    Email: orion@galacticdigitalstudios.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;