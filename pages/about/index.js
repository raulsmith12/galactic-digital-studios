import InsidePageHeader from "../../components/InsidePageHeader";

const About = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <InsidePageHeader title="About Galactic Digital Studios" />
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-1">
                    <img src="https://galacticblue.net/galactic-digital-studios/img/ben-kolde-bs2Ba7t69mM-unsplash.jpg" width="100%" alt="Laptop with saying on it" />
                </div>
                <div className="col-md-9 col-sm-12">
                    <p className="display-7 mx-5 px-5">Started in 2015 as Galactic Web Solutions, Galactic has now grown into more than just a website development firm. Today, Galactic Digital Studios lives up to the new name, handling many different aspects of online digital marketing and branding.<br /><br />
                    If you need a new logo, new graphic marketing, or even a new business card, Galactic Digital Studios has a team of designers ready to assist you. If you&rsquo;re in the market for assistance with search engine optimization, Galactic Digital Studios can help with that as well. And yes, we are still very much in the website development business, handling everything from dynamic, fully-functioning frontend sites, to behind-the-curtain backend work that would make Oz take up and notice, to database management to help keep your day-to-day running smoothly as ever.<br /><br />
                    Whatever your online digital marketing and branding needs, Galactic Digital Studios has you covered.</p>
                </div>
            </div>
        </div>
    )
}

export default About;