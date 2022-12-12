import { useState, useRef } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';

import { GoogleKey } from './GoogleKey';

const API_PATH = 'https://galacticblue.net/galactic-digital-studios/api/contact/service-request-form.php';

const RequestForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerService, setCustomerService] = useState('');
    const [message, setMessage] = useState('');
    const [mailSent, setMailSent] = useState(false);

    const captchaRef = useRef(null);

    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { customerName, customerEmail, customerPhone, customerService, message }
        })
        .then(result => {
            setMailSent(result.data.sent),
            swal('Thank you!', 'We have received your message. You should hear back from us within the next two or three business days.', 'success')
        })
        .catch(error => swal('Uh oh!', 'Something went wrong. Please try sending your message again.', 'danger'));
    };

    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="customerName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="customerName" name="customerName" required value={customerName} onChange={e => setCustomerName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="customerEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="customerEmail" name="customerEmail" required value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="customerPhone" className="form-label">Phone Number</label>
                            <input type="phone" className="form-control" id="customerPhone" name="customerPhone" required value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="customerService" className="form-label">Service Requested</label>
                            <select className="form-select" id="customerService" onChange={e => setCustomerService(e.target.value)} defaultValue="">
                                <option selected>Please select a service</option>
                                <option value="website">Website/Database/CMS</option>
                                <option value="logo">Logo Design</option>
                                <option value="graphic">Graphic Design</option>
                                <option value="mobile">Mobile App Development</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="messageText" className="form-label">Details about the service you are requesting:</label>
                            <textarea className="form-control" id="messageText" name="messageText" required value={message} onChange={e => setMessage(e.target.value)} rows="3" />
                        </div>
                    </div>
                    <div className="col-12">
                        <ReCAPTCHA
                            sitekey={GoogleKey}
                            ref={captchaRef}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div>
                    {mailSent}
                </div>
            </div>
        </form>
    )

}

export default RequestForm;
