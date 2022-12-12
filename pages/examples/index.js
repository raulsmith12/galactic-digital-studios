import InsidePageHeader from "../../components/InsidePageHeader";
import Graphics from "../../components/Graphics";
import Logos from "../../components/Logos";
import Websites from "../../components/Websites";

const Examples = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <InsidePageHeader title="Examples" />
            </div>
            <div className="row mb-5 pb-5">
                <div className="col">
                    <div className="mx-3 px-3">
                        <h3>
                            <img src="https://galacticblue.net/galactic-digital-studios/img/gds-logo-favicon.png" height="35" alt="Galactic Digital Studios short icon" />
                            Logos
                        </h3>
                        <Logos />
                    </div>
                    <hr />
                    <div className="mx-3 px-3">
                        <h3>
                            <img src="https://galacticblue.net/galactic-digital-studios/img/gds-logo-favicon.png" height="35" alt="Galactic Digital Studios short icon" />
                            Graphics
                        </h3>
                        <Graphics />
                    </div>
                    <hr />
                    <div className="mx-3 px-3">
                        <h3>
                            <img src="https://galacticblue.net/galactic-digital-studios/img/gds-logo-favicon.png" height="35" alt="Galactic Digital Studios short icon" />
                            Websites
                        </h3>
                        <Websites />
                    </div>
                    <hr />
                    <div className="mx-3 px-3">
                        <div className="container-fluid">
                            <div className="row text-center">
                                <div className="col-6">
                                    To view more examples from Raul Smith, please visit <a href="https://github.com/raulsmith12" target="_blank">his Github profile.</a>
                                </div>
                                <div className="col-6">
                                    Orion&rsquo;s Github is coming soon
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples;