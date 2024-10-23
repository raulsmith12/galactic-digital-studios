import InsidePageHeader from "../../components/InsidePageHeader";
import MetaHeader from '../../components/MetaHeader';
import Image from "next/image";
import { Suspense } from "react";

const Faqs = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Frequently Asked Questions - Galactic Digital Studios"
                metadesc = "While we enjoy answering questions directly with clients, we understand that there are some questions that get asked frequently. Here is a page with our most frequently asked questions."
                metakeys = "faqs, frequently asked questions, Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/faqs/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Frequently Asked Questions" />
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className="mx-1">
                            <p className="h4">We get asked a lot of questions, particularly as our team and services continue to grow. Here is a list of the questions we hear the most often:</p>
                            <Suspense fallback={<p>Loading FAQs...</p>}>
                                <ol>
                                    <li>
                                        What are your office hours like?
                                        <p><em>First of all, we don&rsquo;t really work out of an office. Our entire team is remote (in an effort to keep overhead costs down). As for hours of operation, we are typically on-call but tend to keep our hours between 7am and 11pm MST, but will occasionally work with customers as needed outside those hours.</em></p>
                                    </li>
                                    <li>
                                        What is the most difficult customer you have ever dealt with like?
                                        <p><em>I don&rsquo;t really like using the term &ldquo;difficult&rdquo; when describing customers. However, on occasion, I have dealt with customers that have been a bit problematic. The most problematic customer, I knew right away I was not going to enjoy working with them. I have been known to turn away customers in the past as a result of their being problematic; however, those instances happen not nearly as often these days.</em></p>
                                    </li>
                                    <li>
                                        How big is the team?
                                        <p><em>A full listing of our team can be found on the team page.</em></p>
                                    </li>
                                    <li>
                                        What services do you administer?
                                        <p><em>We offer a wide variety of digital design and development services, which include web development, graphic design, and logo design services. A more extended listing of the services we offer can be found on our about page.</em></p>
                                    </li>
                                    <li>
                                        Where are you located?
                                        <p><em>Currently we operate out of our respective homes remotely and are available to work with anybody anywhere in the continental United States.</em></p>
                                    </li>
                                    <li>
                                        Are you able to handle clients and businesses of any size?
                                        <p><em>Primarily we deal with small businesses but have been known to work with businesses that have multiple locations from time to time.</em></p>
                                    </li>
                                    <li>
                                        How many businesses have you worked with in the past?
                                        <p><em>We don&rsquo;t have a lot of clients listed on our examples page, but over the course of a 14-year career I have worked with approximately 500 different businesses across web, graphic, and logo design services of varying sizes.</em></p>
                                    </li>
                                </ol>
                            </Suspense>
                        </div>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <div className="col-md-3 col-sm-12 text-center">
                            <Image alt="Laptop with monitor behind it" src="https://galacticdigitalstudios.com/img/domenico-loia-hGV2TfOh0ns-unsplash.jpg" width={0} height={0} style={{ width: "85%", height: "auto" }} />
                        </div>
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default Faqs;