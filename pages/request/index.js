import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";
import MetaHeader from '../../components/MetaHeader';
import { Suspense } from "react";

const Request = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Request Services - Galactic Digital Studios"
                metadesc = "We get that face-to-face interaction isn't always accessible or easy. That's why we are able to take service requests by phone, email, or contact form."
                metakeys = "request service, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/request/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Request Services" />
                </div>
                <div className="row">
                    <div className="col">
                        <p className="display-7 mx-1 my-5">Using the form below, let us know what service of ours you are requesting today:</p>
                        <Suspense fallback={<p>Loading...</p>}>
                            <RequestForm />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Request;