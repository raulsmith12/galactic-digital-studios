import Link from "next/link";
import { useState } from "react";

const ServiceMenu = ({ stateMenu, service, serviceName, closeMenu }) => {
    const [countyMenu, showCountyMenu] = useState('');
    const [cityMenu, showCityMenu] = useState('');

    return (
        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (stateMenu === service ? 'show' : 'hidden')}>
            <li className="nav-item" onClick={() => showCountyMenu('colorado')}>
                <a className="nav-link">Colorado +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'colorado' ? 'show' : 'hidden')}>
                    <li className="nav-item" onClick={() => showCityMenu('denver-county-colorado')}>
                        <a className="nav-link">Denver County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'denver-county-colorado' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/colorado/denver-colorado-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Denver</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item" onClick={() => showCountyMenu('idaho')}>
                <a className="nav-link">Idaho +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'idaho' ? 'show' : 'hidden')}>
                    <li className="nav-item" onClick={() => showCityMenu('ada-county-idaho')}>
                        <a className="nav-link">Ada County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'ada-county-idaho' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/idaho/boise-idaho-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Boise</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item" onClick={() => showCountyMenu('oregon')}>
                <a className="nav-link">Oregon +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'oregon' ? 'show' : 'hidden')}>
                    <li className="nav-item" onClick={() => showCityMenu('multnomah-county-oregon')}>
                        <a className="nav-link">Multnomah County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'multnomah-county-oregon' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/oregon/portland-oregon-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Portland</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item" onClick={() => showCityMenu('washington-county-oregon')}>
                        <a className="nav-link">Washington County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'washington-county-oregon' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/oregon/beaverton-oregon-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Beaverton</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item" onClick={() => showCountyMenu('utah')}>
                <a className="nav-link">Utah +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'utah' ? 'show' : 'hidden')}>
                    <li className="nav-item" onClick={() => showCityMenu('salt-lake-county-utah')}>
                        <a className="nav-link">Salt Lake County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'salt-lake-county-utah' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/utah/salt-lake-city-utah-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Salt Lake City</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item" onClick={() => showCityMenu('utah-county-utah')}>
                        <a className="nav-link">Utah County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'utah-county-utah' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/utah/lehi-utah-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Lehi</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item" onClick={() => showCityMenu('weber-county-utah')}>
                        <a className="nav-link">Weber County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'weber-county-utah' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/utah/ogden-utah-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Ogden</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item" onClick={() => showCountyMenu('washington')}>
                <a className="nav-link">Washington +</a>
                <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (countyMenu === 'washington' ? 'show' : 'hidden')}>
                    <li className="nav-item" onClick={() => showCityMenu('clark-county-washington')}>
                        <a className="nav-link">Clark County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'clark-county-washington' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/washington/vancouver-washington-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Vancouver</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item" onClick={() => showCityMenu('king-county-washington')}>
                        <a className="nav-link">King County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'king-county-washington' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/washington/auburn-washington-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Auburn</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/services/washington/bellevue-washington-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Bellevue</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/services/washington/seattle-washington-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Seattle</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item" onClick={() => showCityMenu('pierce-county-washington')}>
                        <a className="nav-link">Pierce County +</a>
                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (cityMenu === 'pierce-county-washington' ? 'show' : 'hidden')}>
                            <li className="nav-item">
                                <Link href={`/services/washington/lakewood-washington-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Lakewood</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={`/services/washington/tacoma-washington-${serviceName}`} className="nav-link" onClickCapture={() => closeMenu()}>Tacoma</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default ServiceMenu;
