import Link from "next/link";

const ServiceMenu = ({ stateMenu, service, serviceName, closeMenu, countyMenu, showCountyMenu, cityMenu, showCityMenu }) => {
    return (
        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (stateMenu === service ? 'show' : 'hidden')}>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('arizona'), showCityMenu(''))} style={{ cursor: "pointer" }}>Arizona +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'arizona' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('maricopa-county-arizona')} style={{ cursor: "pointer" }}>Maricopa County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'maricopa-county-arizona' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/arizona/phoenix-arizona-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Phoenix</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('colorado'), showCityMenu(''))} style={{ cursor: "pointer" }}>Colorado +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'colorado' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('arapahoe-county-colorado')} style={{ cursor: "pointer" }}>Arapahoe County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'arapahoe-county-colorado' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/colorado/aurora-colorado-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Aurora</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('boulder-county-colorado')} style={{ cursor: "pointer" }}>Boulder County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'boulder-county-colorado' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/colorado/boulder-colorado-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Boulder</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('denver-county-colorado')} style={{ cursor: "pointer" }}>Denver County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'denver-county-colorado' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/colorado/denver-colorado-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Denver</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('idaho'), showCityMenu(''))} style={{ cursor: "pointer" }}>Idaho +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'idaho' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('ada-county-idaho')} style={{ cursor: "pointer" }}>Ada County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'ada-county-idaho' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/idaho/boise-idaho-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Boise</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('illinois'), showCityMenu(''))} style={{ cursor: "pointer" }}>Illinois +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'illinois' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('cook-county-illinois')} style={{ cursor: "pointer" }}>Cook County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'cook-county-illinois' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/illinois/chicago-illinois-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Chicago</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('missouri'), showCityMenu(''))} style={{ cursor: "pointer" }}>Missouri +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'missouri' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('jackson-county-missouri')} style={{ cursor: "pointer" }}>Jackson County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'jackson-county-missouri' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/missouri/kansas-city-missouri-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Kansas City</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('st-louis-county-missouri')} style={{ cursor: "pointer" }}>St. Louis County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'st-louis-county-missouri' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/missouri/st-louis-missouri-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>St. Louis</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('nevada'), showCityMenu(''))} style={{ cursor: "pointer" }}>Nevada +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'nevada' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('clark-county-nevada')} style={{ cursor: "pointer" }}>Clark County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'clark-county-nevada' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/nevada/las-vegas-nevada-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Las Vegas</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('new-mexico'), showCityMenu(''))} style={{ cursor: "pointer" }}>New Mexico +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'new-mexico' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('bernalillo-county-new-mexico')} style={{ cursor: "pointer" }}>Bernalillo County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'bernalillo-county-new-mexico' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/newMexico/albuquerque-new-mexico-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Albuquerque</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('santa-fe-county-new-mexico')} style={{ cursor: "pointer" }}>Santa Fe County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'santa-fe-county-new-mexico' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/newMexico/santa-fe-new-mexico-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Santa Fe</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('north-carolina'), showCityMenu(''))} style={{ cursor: "pointer" }}>North Carolina +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'north-carolina' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('mecklenburg-county-north-carolina')} style={{ cursor: "pointer" }}>Mecklenburg County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'mecklenburg-county-north-carolina' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/northCarolina/charlotte-north-carolina-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Charlotte</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('oregon'), showCityMenu(''))} style={{ cursor: "pointer" }}>Oregon +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'oregon' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('multnomah-county-oregon')} style={{ cursor: "pointer" }}>Multnomah County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'multnomah-county-oregon' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/oregon/portland-oregon-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Portland</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('washington-county-oregon')} style={{ cursor: "pointer" }}>Washington County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'washington-county-oregon' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/oregon/beaverton-oregon-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Beaverton</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('utah'), showCityMenu(''))} style={{ cursor: "pointer" }}>Utah +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'utah' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('salt-lake-county-utah')} style={{ cursor: "pointer" }}>Salt Lake County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'salt-lake-county-utah' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/utah/salt-lake-city-utah-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Salt Lake City</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('summit-county-utah')} style={{ cursor: "pointer" }}>Summit County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'summit-county-utah' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/utah/park-city-utah-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Park City</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('utah-county-utah')} style={{ cursor: "pointer" }}>Utah County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'utah-county-utah' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/utah/lehi-utah-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Lehi</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('washington-county-utah')} style={{ cursor: "pointer" }}>Washington County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'washington-county-utah' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/utah/st-george-utah-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>St. George</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('weber-county-utah')} style={{ cursor: "pointer" }}>Weber County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'weber-county-utah' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/utah/ogden-utah-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Ogden</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => (showCountyMenu('washington'), showCityMenu(''))} style={{ cursor: "pointer" }}>Washington +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'washington' ? 'show' : 'hidden')}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('clark-county-washington')} style={{ cursor: "pointer" }}>Clark County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'clark-county-washington' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/washington/vancouver-washington-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Vancouver</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('king-county-washington')} style={{ cursor: "pointer" }}>King County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'king-county-washington' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/washington/auburn-washington-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Auburn</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/services/washington/bellevue-washington-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Bellevue</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/services/washington/seattle-washington-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Seattle</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('pierce-county-washington')} style={{ cursor: "pointer" }}>Pierce County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'pierce-county-washington' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/washington/lakewood-washington-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Lakewood</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/services/washington/tacoma-washington-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Tacoma</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => showCityMenu('thurston-county-washington')} style={{ cursor: "pointer" }}>Thurston County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'thurston-county-washington' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/washington/olympia-washington-${serviceName}`} className="nav-link" onClick={() => closeMenu()}>Olympia</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default ServiceMenu;
