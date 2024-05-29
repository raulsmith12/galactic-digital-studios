import Link from "next/link";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";
import MetaHeader from "../../components/MetaHeader";
import Image from "next/image";

const Web = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Website Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "Simple 3 page websites advertising a local business. Multi-page websites that go a little deeper with content. Dynamic websites that grow with your business. Galactic Digital Studios has done and can do them all."
                metakeys = "website design, website development, web development, web design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/services/web"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Website Design and Development" />
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
                                    <Image alt="Laptop with saying on it" src="https://galacticdigitalstudios.com/img/ben-kolde-bs2Ba7t69mM-unsplash.jpg" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>Websites are a vital part of a company&rsquo;s online presence, even in the age of mobile apps and social media. Whether you are looking to get more eyeballs on your brand or you want to sell merchandise to your customers, websites are a key component to it all. Why shouldn&rsquo;t you have an amazing website? Better yet, why shouldn&rsquo;t people be able to see your website? Not only does Galactic Digital Studios have all the tools needed to make your website shine and sparkle, but we also have a team of specialists that are experienced in search engine optimization.</p>
                        <h6>Be it a completely new website or an SEO audit, why not hire Galactic Digital Studios for all your website design and development needs? Fill out the form below and let us know how we can assist with your business?</h6>
                        <RequestForm selectedService="website" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web;
