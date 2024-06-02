import InsidePageHeader from "../../components/InsidePageHeader";
import Graphics from "../../components/Graphics";
import Logos from "../../components/Logos";
import Websites from "../../components/Websites";
import MetaHeader from '../../components/MetaHeader';
import { FaStarAndCrescent } from "react-icons/fa";
import { Suspense } from "react";

const Examples = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Examples - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "These are but a few examples of what Galactic Digital Studios can bring to the table for your business. Need a new logo? We've got you. Need graphic work done? We can do that too. A new website? Yep, we've got that too."
                metakeys = "website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/examples"
            />
            <div className="container-fluid pb-5">
                <div className="row">
                    <InsidePageHeader title="Examples" />
                </div>
                <div className="row mb-5 pb-5">
                    <div className="col-12">
                        <Suspense fallback={<p>Loading Websites...</p>}>
                            <div className="mx-3 px-3">
                                <h3>
                                    <FaStarAndCrescent className="g-star" /> &nbsp; Websites
                                </h3>
                                    <Websites />
                            </div>
                            <hr />
                        </Suspense>
                        <Suspense fallback={<p>Loading Logos...</p>}>
                            <div className="mx-3 px-3">
                                <h3>
                                    <FaStarAndCrescent className="g-star" /> &nbsp; Logos
                                </h3>
                                <Logos />
                            </div>
                            <hr />
                        </Suspense>
                        <Suspense fallback={<p>Loading Graphics...</p>}>
                            <div className="mx-3 px-3">
                                <h3>
                                    <FaStarAndCrescent className="g-star" /> &nbsp; Graphics
                                </h3>
                                <Graphics />
                            </div>
                        </Suspense>
                        <hr />
                        <Suspense fallback={<p>Loading...</p>}>
                            <div className="mx-3 px-3">
                                <div className="container-fluid">
                                    <div className="row text-center">
                                        <div className="col-6">
                                            To view more examples from Raul Smith, please visit <a href="https://github.com/raulsmith12" target="_blank">his Github profile.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Examples;