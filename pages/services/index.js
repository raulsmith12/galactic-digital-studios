import InsidePageHeader from "../../components/InsidePageHeader";
import Link from "next/link";
import MetaHeader from "../../components/MetaHeader";

const Services = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Services - Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services"
                metadesc = "Galactic Digital Studios provides many services to businesses, ranging from simple 3 page websites to fully dynamic sites, fully-designed graphics and logos, mobile apps, database management, and more!"
                metakeys = "website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = "https://galacticdigitalstudios.com/services"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Services" />
                </div>
                <div className="row">
                    <div className="col mx-1">
                        <p className="display-7">Galactic Digital Studios prides itself on being a one-stop-shop of sorts for all your digital and online marketing needs. Here is a list of all the services that Galactic provides:</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/web" className="btn btn-alpha btn-lg btn-block">Website Development</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/logo" className="btn btn-alpha btn-lg btn-block">Logo Design</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/brochure" className="btn btn-alpha btn-lg btn-block">Brochure Design</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/businessCard" className="btn btn-alpha btn-lg btn-block">Business Card Design</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/graphic" className="btn btn-alpha btn-lg btn-block">Various Graphic Design</Link>
                    </div>
                    {/* <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/mobileApp" className="btn btn-alpha btn-lg btn-block">Mobile App Development</Link>
                    </div> */}
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/database" className="btn btn-alpha btn-lg btn-block">Database Management</Link>
                    </div>
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2">
                        <Link href="/services/cms" className="btn btn-alpha btn-lg btn-block">Content Management</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;