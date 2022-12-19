import ContactForm from "./ContactForm";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt, FaFlagUsa, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const HomeContactForm = () => {
    return (
        <div className="row mx-0 pb-4 bg-secondary border-bottom border-light">
            <div className="col px-0">
                <div className="container pt-2">
                    <h4 className="text-white text-center">
                        Contact Galactic Digital Studios
                    </h4>
                    <div className="row">
                        <div className="col-md-8 col-sm-12 text-white">
                            <ContactForm />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h6 className="text-white text-center mt-4">
                                <FaMapMarkerAlt />&nbsp;
                                Located in Salt Lake City, Utah<br />but serving businesses throughout the continental United States&nbsp;
                                <FaFlagUsa />
                            </h6>
                            <h6 className="text-white mt-4">
                                <FaEnvelopeOpenText />&nbsp;&nbsp;&nbsp;
                                raul.smith@galacticdigitalstudios.com
                            </h6>
                            <h6 className="text-white mt-4">
                                <FaEnvelopeOpenText />&nbsp;&nbsp;&nbsp;
                                orion.hoag@galacticdigitalstudios.com
                            </h6>
                            <h6 className="text-white mt-4">
                                <FaPhoneAlt />&nbsp;&nbsp;&nbsp;
                                385.275.8665
                            </h6>
                            <h6 className="text-white mt-4">
                                <FaFacebookF />&nbsp;&nbsp;&nbsp;
                                facebook.com/notyetknown
                            </h6>
                            <h6 className="text-white mt-4">
                                <FaTwitter />&nbsp;&nbsp;&nbsp;
                                @notyetknown 
                            </h6>
                            <h6 className="text-white mt-4">
                                <FaGithub />&nbsp;&nbsp;&nbsp;
                                github.com/raulsmith12
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactForm;