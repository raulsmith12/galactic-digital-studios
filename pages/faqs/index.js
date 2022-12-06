import Link from 'next/link';
import InsidePageHeader from '../../components/InsidePageHeader';

const Faqs = () => {
    return (
        <div className="container-fluid pe-0">
            <div className="row">
                <InsidePageHeader title="Frequently Asked Questions" />
            </div>
            <div className="row">
                <div className="col-md-9 col-sm-12">
                    <div className="mx-5 px-5">
                        <p className="display-7">We get asked a lot of questions, particularly as our team and services continue to grow. Here is a list of the questions we hear the most often:</p>
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
                                <p><em>A full listing of our team can be found on the <Link href="/team">team page</Link>.</em></p>
                            </li>
                            <li>
                                What services do you administer?
                                <p><em>A full listing of our available services can be found <Link href="/services">here</Link>, which include web development, graphic design, and logo design services.</em></p>
                            </li>
                            <li>
                                Where are you located?
                                <p><em>Currently we operate out of our respective homes in the Salt Lake City, Utah area, but are available to work with anybody anywhere in the continental United States.</em></p>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-3">
                    <img src="https://galacticblue.net/galactic-digital-studios/img/domenico-loia-hGV2TfOh0ns-unsplash.jpg" width="85%" alt="Laptop with monitor behind it" />
                </div>
            </div>
        </div>
    )
}

export default Faqs;