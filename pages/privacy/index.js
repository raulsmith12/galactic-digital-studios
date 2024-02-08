import InsidePageHeader from "../../components/InsidePageHeader";
import MetaHeader from '../../components/MetaHeader';

const Privacy = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Privacy Policy - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "Being a web development and other services company in the 2020s, we understand how important the privacy and the data of our clients are. This is why we have a privacy policy in place that expressly prohibits the sale of user data to third-party companies."
                metakeys = "privacy policy, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/privacy"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Privacy Policy" />
                </div>
                <div className="row">
                    <div className="col mx-1">
                        <p>This privacy notice discloses the privacy practices for Galactic Digital Studios, our partner websites and any businesses we are associated with. This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                            <li className="list-group-item">What choices are available to you regarding the use of your data.</li>
                            <li className="list-group-item">The security procedures in place to protect the misuse of your information.</li>
                            <li className="list-group-item">How you can correct any inaccuracies in the information.</li>
                        </ul>
                        <h4 className="my-3">Information Collection, Use, and Sharing</h4>
                        <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                        <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>
                        <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                        <h4 className="my-3">Your Access to and Control Over Information</h4>
                        <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">See what data we have about you, if any.</li>
                            <li className="list-group-item">Change/correct any data we have about you.</li>
                            <li className="list-group-item">Have us delete any data we have about you.</li>
                            <li className="list-group-item">Express any concern you have about our use of your data.</li>
                        </ul>
                        <h4 className="my-3">Security</h4>
                        <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                        <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
                        <p>If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at 385.275.8665 or <a href="mailto:contact@galacticdigitalstudios.com">via email.</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Privacy;