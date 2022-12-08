import ContactForm from "./ContactForm";

const HomeContactForm = () => {
    return (
        <div className="row mx-0 pb-4 bg-secondary border-bottom border-light">
            <div className="col px-0">
                <div className="container pt-2">
                    <h5 className="text-white text-center">
                        Contact Galactic Digital Studios
                    </h5>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 text-white">
                            <ContactForm />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h6 className="text-white text-center mt-4">Located in Salt Lake City, Utah<br />but serving businesses throughout the continental United States</h6>
                            {/* Email address here  */}
                            {/* Phone number here  */}
                            {/* Social Media here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactForm;