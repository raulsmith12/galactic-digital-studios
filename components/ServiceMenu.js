import Link from "next/link";
import { useState } from "react";

const ServiceMenu = ({ stateMenu, service, serviceName }) => {
    const [countyMenu, showCountyMenu] = useState('');
    const [cityMenu, showCityMenu] = useState('');

    return (
        <ul className={"dropdown-submenu " + (stateMenu === service ? 'show' : 'hidden')}>
            <li className="dropdown-item position-relative" onClick={() => showCountyMenu('utah')} onMouseOver={() => showCountyMenu('utah')} onMouseOut={() => showCountyMenu('')}>
                <a className="nav-link text-black">Utah +</a>
                <ul className={"dropdown-submenu " + (countyMenu === 'utah' ? 'show' : 'hidden')}>
                    <li className="dropdown-item position-relative" onClick={() => showCityMenu('salt-lake-county-utah')} onMouseOver={() => showCityMenu('salt-lake-county-utah')} onMouseOut={() => showCityMenu('')}>
                        <a className="nav-link text-black">Salt Lake County +</a>
                        <ul className={"dropdown-submenu " + (cityMenu === 'salt-lake-county-utah' ? 'show' : 'hidden')}>
                            <li className="dropdown-item">
                                <Link className="nav-link text-black" href={`/services/salt-lake-city-utah-${serviceName}`}>Salt Lake City</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default ServiceMenu;
