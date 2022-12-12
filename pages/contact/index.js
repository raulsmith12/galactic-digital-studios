import ContactForm from "../../components/ContactForm";
import InsidePageHeader from "../../components/InsidePageHeader";

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
                                <h6>Raul Smith</h6>
                                <p>Email: raul@galacticdigitalstudios.com</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;