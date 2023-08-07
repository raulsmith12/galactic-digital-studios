import Link from "next/link";
import { useState } from "react";

const ServiceMenu = ({ stateMenu, service, serviceName, hideNavbar }) => {
    const [countyMenu, showCountyMenu] = useState('');
    const [cityMenu, showCityMenu] = useState('');

    return (
        <ul className={"dropdown-submenu " + (stateMenu === service ? 'show' : 'hidden')}>
            <li className="dropdown-item position-relative" onClick={() => showCountyMenu('colorado')} onMouseOver={() => showCountyMenu('colorado')} onMouseOut={() => showCountyMenu('')}>
                <a className="nav-link text-black">Colorado +</a>
                <ul className={"dropdown-submenu " + (countyMenu === 'colorado' ? 'show' : 'hidden')}>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('denver-county-colorado')} onMouseOver={() => showCityMenu('denver-county-colorado')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Denver County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'denver-county-colorado' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/denver-colorado-${serviceName}`} onClick={hideNavbar}>Denver</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown-item position-relative" onClick={() => showCountyMenu('idaho')} onMouseOver={() => showCountyMenu('idaho')} onMouseOut={() => showCountyMenu('')}>
                <a className="nav-link text-black">Idaho +</a>
                <ul className={"dropdown-submenu " + (countyMenu === 'idaho' ? 'show' : 'hidden')}>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('ada-county-idaho')} onMouseOver={() => showCityMenu('ada-county-idaho')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Ada County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'ada-county-idaho' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/boise-idaho-${serviceName}`} onClick={hideNavbar}>Boise</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown-item position-relative" onClick={() => showCountyMenu('oregon')} onMouseOver={() => showCountyMenu('oregon')} onMouseOut={() => showCountyMenu('')}>
                <a className="nav-link text-black">Oregon +</a>
                <ul className={"dropdown-submenu " + (countyMenu === 'oregon' ? 'show' : 'hidden')}>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('multnomah-county-oregon')} onMouseOver={() => showCityMenu('multnomah-county-oregon')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Multnomah County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'multnomah-county-oregon' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/portland-oregon-${serviceName}`} onClick={hideNavbar}>Portland</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('washington-county-oregon')} onMouseOver={() => showCityMenu('washington-county-oregon')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Washington County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'washington-county-oregon' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/beaverton-oregon-${serviceName}`} onClick={hideNavbar}>Beaverton</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown-item position-relative" onClick={() => showCountyMenu('utah')} onMouseOver={() => showCountyMenu('utah')} onMouseOut={() => showCountyMenu('')}>
                <a className="nav-link text-black">Utah +</a>
                <ul className={"dropdown-submenu " + (countyMenu === 'utah' ? 'show' : 'hidden')}>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('salt-lake-county-utah')} onMouseOver={() => showCityMenu('salt-lake-county-utah')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Salt Lake County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'salt-lake-county-utah' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/salt-lake-city-utah-${serviceName}`} onClick={hideNavbar}>Salt Lake City</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('utah-county-utah')} onMouseOver={() => showCityMenu('utah-county-utah')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Utah County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'utah-county-utah' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/lehi-utah-${serviceName}`} onClick={hideNavbar}>Lehi</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('weber-county-utah')} onMouseOver={() => showCityMenu('weber-county-utah')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Weber County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'weber-county-utah' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/ogden-utah-${serviceName}`} onClick={hideNavbar}>Ogden</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown-item position-relative" onClick={() => showCountyMenu('washington')} onMouseOver={() => showCountyMenu('washington')} onMouseOut={() => showCountyMenu('')}>
                <a className="nav-link text-black">Washington +</a>
                <ul className={"dropdown-submenu " + (countyMenu === 'washington' ? 'show' : 'hidden')}>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('king-county-washington')} onMouseOver={() => showCityMenu('king-county-washington')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">King County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'king-county-washington' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/seattle-washington-${serviceName}`} onClick={hideNavbar}>Seattle</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('pierce-county-washington')} onMouseOver={() => showCityMenu('pierce-county-washington')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Pierce County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'pierce-county-washington' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/tacoma-washington-${serviceName}`} onClick={hideNavbar}>Tacoma</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default ServiceMenu;
