import InsidePageHeader from "../../components/InsidePageHeader";
import MetaHeader from '../../components/MetaHeader';
import { FaStarAndCrescent } from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Examples = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [hideModal, setHideModal] = useState(true);
    const [modalTitle, setModalTitle] = useState("");
    const [modalImage, setModalImage] = useState();
    const [modalDescription, setModalDescription] = useState("");
    const [modalUrl, setModalUrl] = useState();
    const [graphics, setGraphics] = useState([]);
    const [logos, setLogos] = useState([]);
    const [websites, setWebsites] = useState([]);
  
    useEffect(() => {
      const desktopDevice = window.innerWidth;
      if (desktopDevice > 767) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }, []);

    useEffect(() => {
        async function fetchData() {
            const graphicList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/graphics'
            );

            const logoList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/logos'
            );

            const websiteList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/websites'
            );

            setGraphics(graphicList.data.data.reverse());
            setLogos(logoList.data.data.reverse());
            setWebsites(websiteList.data.data.reverse());
        }

        fetchData();
    }, [graphics, logos, websites]);

    const openModal = (name, image, description, url) => {
        setModalTitle(name);
        setModalImage(image);
        setModalDescription(description);
        if (url !== null) {
            setModalUrl(url);
        }
        setHideModal(false);
    }

    const closeModal = () => {
        setHideModal(true);
        setModalTitle("");
        setModalImage();
        setModalDescription("");
        setModalUrl();
    }

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
                {isDesktop === false && (
                    <div className="row">
                        <div className="col-12"> 
                            <h2 className="my-5">This page showcases some of our best work that we&rsquo;ve done for clients in the past. Please feel free to look around.</h2>
                            <h3 className="my-5">If you have any questions please feel free to <a href="mailto:raul.smith@galacticdigitalstudios.com">email us</a>.</h3>
                        </div>
                    </div>
                )}
                <div className="row mb-5 pb-5">
                    <div className="col-12">
                        <Suspense fallback={<p>Loading Websites...</p>}>
                            <div className="mx-3 px-3">
                                <h3>
                                    <FaStarAndCrescent className="g-star" /> &nbsp; Websites
                                </h3>
                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        {websites.map(i => (
                                            <div className="col-md-2 col-sm-4 mb-2" key={i.id}>
                                                <a className="border-0" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(i.name, i.image_url, i.description, i.site_url)} style={{ cursor: "pointer" }}>
                                                    <Image alt={i.name} src={i.thumb_url} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </Suspense>
                        <Suspense fallback={<p>Loading Logos...</p>}>
                            <div className="mx-3 px-3">
                                <h3>
                                    <FaStarAndCrescent className="g-star" /> &nbsp; Logos
                                </h3>
                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        {logos.map(i => (
                                            <div className="col-md-2 col-sm-4 mb-2" key={i.id}>
                                                <a className="border-0" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(i.name, i.image_url, i.description, null)} style={{ cursor: "pointer" }}>
                                                    <Image alt={i.name} src={i.thumb_url} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </Suspense>
                        <Suspense fallback={<p>Loading Graphics...</p>}>
                            <div className="mx-3 px-3">
                                <h3>
                                    <FaStarAndCrescent className="g-star" /> &nbsp; Graphics
                                </h3>
                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        {graphics.map(i => (
                                            <div className="col-md-2 col-sm-4 mb-2" key={i.id}>
                                                <a className="border-0" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(i.name, i.image_url, i.description, null)} style={{ cursor: "pointer" }}>
                                                    <Image alt={i.name} src={i.thumb_url} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
            <div className="modal fade" tabIndex="-1" id="exampleModal" style={{ display: hideModal ? 'none' : 'block' }}>
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="display-4">{modalTitle}</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => closeModal()}></button>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-9 col-sm-6">
                                    <Image alt={modalTitle} src={modalImage} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <h5>{modalDescription}</h5>
                                    {modalUrl && (
                                        <h5>
                                            <a href={modalUrl} target="_blank" className="h5">Visit the site!</a>
                                        </h5>
                                    )}
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => closeModal()}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Examples;