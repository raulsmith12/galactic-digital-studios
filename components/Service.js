import Link from "next/link";
import { FaStarAndCrescent } from "react-icons/fa";

const Service = ({ serviceTitle, serviceSlug }) => {
    return (
        <div className="row py-3">
            <div className="col">
                <h2 className="text-uppercase">{serviceTitle}</h2>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Arizona</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/arizona/phoenix-arizona-" + serviceSlug + "/"}>Phoenix</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Colorado</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/colorado/aurora-colorado-" + serviceSlug + "/"}>Aurora</Link> &nbsp;
                            <Link href={"/services/colorado/boulder-colorado-" + serviceSlug + "/"}>Boulder</Link> &nbsp;
                            <Link href={"/services/colorado/denver-colorado-" + serviceSlug + "/"}>Denver</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Idaho</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/idaho/boise-idaho-" + serviceSlug + "/"}>Boise</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Illinois</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/illinois/chicago-illinois-" + serviceSlug + "/"}>Chicago</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Missouri</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/missouri/kansas-city-missouri-" + serviceSlug + "/"}>Kansas City</Link> &nbsp;
                            <Link href={"/services/missouri/st-louis-missouri-" + serviceSlug + "/"}>St. Louis</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Nevada</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/nevada/las-vegas-nevada-" + serviceSlug + "/"}>Las Vegas</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;New Mexico</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/newMexico/albuquerque-new-mexico-" + serviceSlug + "/"}>Albuquerque</Link> &nbsp;
                            <Link href={"/services/newMexico/santa-fe-new-mexico-" + serviceSlug + "/"}>Santa Fe</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;North Carolina</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/northCarolina/charlotte-north-carolina-" + serviceSlug + "/"}>Charlotte</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Oregon</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/oregon/beaverton-oregon-" + serviceSlug + "/"}>Beaverton</Link> &nbsp;
                            <Link href={"/services/oregon/portland-oregon-" + serviceSlug + "/"}>Portland</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Utah</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/utah/kearns-utah-" + serviceSlug + "/"}>Kearns</Link> &nbsp;
                            <Link href={"/services/utah/lehi-utah-" + serviceSlug + "/"}>Lehi</Link> &nbsp;
                            <Link href={"/services/utah/ogden-utah-" + serviceSlug + "/"}>Ogden</Link> &nbsp;
                            <Link href={"/services/utah/park-city-utah-" + serviceSlug + "/"}>Park City</Link> &nbsp;
                            <Link href={"/services/utah/salt-lake-city-utah-" + serviceSlug + "/"}>Salt Lake City</Link> &nbsp;
                            <Link href={"/services/utah/st-george-utah-" + serviceSlug + "/"}>St. George</Link> &nbsp;
                            <Link href={"/services/utah/syracuse-utah-" + serviceSlug + "/"}>Syracuse</Link> &nbsp;
                            <Link href={"/services/utah/tooele-utah-" + serviceSlug + "/"}>Tooele</Link>
                        </div>
                    </div>
                </div>
                <h3><FaStarAndCrescent className="g-star" />&nbsp;Washington</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link href={"/services/washington/auburn-washington-" + serviceSlug + "/"}>Auburn</Link> &nbsp;
                            <Link href={"/services/washington/bellevue-washington-" + serviceSlug + "/"}>Bellevue</Link> &nbsp;
                            <Link href={"/services/washington/lakewood-washington-" + serviceSlug + "/"}>Lakewood</Link> &nbsp;
                            <Link href={"/services/washington/olympia-washington-" + serviceSlug + "/"}>Olympia</Link> &nbsp;
                            <Link href={"/services/washington/seattle-washington-" + serviceSlug + "/"}>Seattle</Link> &nbsp;
                            <Link href={"/services/washington/tacoma-washington-" + serviceSlug + "/"}>Tacoma</Link> &nbsp;
                            <Link href={"/services/washington/tukwila-washington-" + serviceSlug + "/"}>Tukwila</Link> &nbsp;
                            <Link href={"/services/washington/vancouver-washington-" + serviceSlug + "/"}>Vancouver</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;