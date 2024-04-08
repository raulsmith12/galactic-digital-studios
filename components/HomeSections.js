import { FaStarAndCrescent } from "react-icons/fa";

const HomeSections = () => {
    return (
        <div className="row mx-0">
            <div className="col px-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4 className="display-6 text-center text-shadow-2">Galactic Digital Studios Can Handle Your Most Pressing Business Resources and Development Needs, Including:</h4>
                        </div>
                    </div>
                    <div className="row justify-content-center home-section">
                        <div className="col-md-4 col-sm-6 mb-2">
                            <h4 className="text-center display-3">
                                <FaStarAndCrescent className="g-star" />
                            </h4>
                            <h4 className="text-center h2">
                                Website Development
                            </h4>
                            <h5>
                                Websites are the modern day yellow pages. Why should you have a tough-to-find website that doesn&rsquo;t even look good or isn&rsquo;t responsive? We not only deliver great looking websites in the modern dev tech stacks but can also deliver sites that are responsive to both desktop and mobile.
                            </h5>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-2">
                            <h4 className="text-center display-3">
                                <FaStarAndCrescent className="g-star" />
                            </h4>
                            <h4 className="text-center h2">
                                Search Engine Optimization
                            </h4>
                            <h5>
                                Websites that are good to look at but hard to find don&rsquo;t really serve a purpose. That is why Galactic Digital Studios also specializes and stays up to date on all the changes going on with Search Engine Optimization and Google&rsquo;s ever-changing algorithms.
                            </h5>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-2">
                            <h4 className="text-center display-3">
                                <FaStarAndCrescent className="g-star" />
                            </h4>
                            <h4 className="text-center h2">
                                Content Management
                            </h4>
                            <h5>
                                Whether you are looking for a quick and easy Wordpress site with a custom theme, a Drupal site that is a bit more complex, or a completely custom-built CMS using Laravel, our team is equipped to handle all of your content management needs, including coaching on how <strong><em>you</em></strong> can even create and edit content on your own.
                            </h5>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-2">
                            <h4 className="text-center display-3">
                                <FaStarAndCrescent className="g-star" />
                            </h4>
                            <h4 className="text-center h2">
                                Logo Design
                            </h4>
                            <h5>
                                Part of a company&rsquo;s branding is the logo. A good logo will catch eyes and draw them to a product. Let Galactic Digital Studios work with you on creating a logo that says &ldquo;We are here and we mean business&rdquo;. That&rsquo;s right! No matter the complexity or simplicity, we work with you until you are satisfied with the end result.
                            </h5>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-2">
                            <h4 className="text-center display-3">
                                <FaStarAndCrescent className="g-star" />
                            </h4>
                            <h4 className="text-center h2">
                                Graphic Design
                            </h4>
                            <h5>
                                Need a business card but are unsure of who to go through? Need a design for your business card, banner, or announcement? Never fear. Galactic Digital Studios will help guide you through the process of designing that flashy business card. We also work with local print shops whether your business is in the Utah area or somewhere else.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSections;