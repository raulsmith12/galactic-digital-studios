import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";
import MetaHeader from '../../components/MetaHeader';

const Request = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Request Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "We get that after the pandemic that face-to-face interaction isn't always accessible or easy. That's why Galactic Digital Studios is able to take service requests by phone, email, or contact form."
                metakeys = "request service, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/request"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Request Services" />
                </div>
                <div className="row">
                    <div className="col">
                        <p className="display-7 mx-1">Using the form below, let us know what service of ours you are requesting today:</p>
                        <RequestForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Request;