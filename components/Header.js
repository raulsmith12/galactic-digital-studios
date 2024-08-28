import Link from "next/link";
import { useState } from "react";
import ServiceMenu from "./ServiceMenu";
import Image from "next/image";

const Header = () => {
    const [servicesMenu, showServicesMenu] = useState(false);
    const [stateMenu, showStateMenu] = useState('');
    const [countyMenu, showCountyMenu] = useState('');
    const [cityMenu, showCityMenu] = useState('');

    function closeMenu() {
        const closeButton = document.getElementById('button-close');
        closeButton.click();
        showServicesMenu('');
        showStateMenu('');
        showCountyMenu('');
        showCityMenu('');
    }

    return (
        <div className="row mx-0 fixed-top">
            <div className="col px-0">
                <nav className="navbar navbar-dark bg-alpha border-bottom border-secondary main-menu">
                    <div className="container">
                        <Link href="/" className="navbar-brand">
                            <Image alt="Galactic Digital Studios" src="https://galacticdigitalstudios.com/img/gds-logo-white.png" width={0} height={75} style={{ width: "auto" }} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#gdsNavbar" aria-controls="gdsNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end bg-alpha text-bg-dark" tabIndex="-1" id="gdsNavbar" aria-labelledby="gdsNavbarLabel">
                            <div className="offcanvas-header">
                                <Image alt="Galactic Digital Studios" src="https://galacticdigitalstudios.com/img/gds-logo-white.png" width={0} height={75} style={{ width: "auto" }} id="gdsNavbarLabel" />
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#gdsNavbar" aria-label="Close" id="button-close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 pb-5">
                                    <li className="nav-item">
                                        <Link href="/" className="nav-link" onClick={() => closeMenu()}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about" className="nav-link" onClick={() => closeMenu()}>About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/faqs" className="nav-link" onClick={() => closeMenu()}>FAQs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/team" className="nav-link" onClick={() => closeMenu()}>Team</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/examples" className="nav-link" onClick={() => closeMenu()}>Examples</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact" className="nav-link" onClick={() => closeMenu()}>Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={() => showServicesMenu(true)} style={{ cursor: "pointer" }}>Services</a>
                                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (servicesMenu ? 'show' : 'hidden')}>
                                            <li className="nav-item">
                                                <a className="nav-link" onClick={() => (showStateMenu('web'), showCountyMenu(''), showCityMenu(''))} style={{ cursor: "pointer" }}>Web Development +</a>
                                                <ServiceMenu service="web" stateMenu={stateMenu} serviceName="web-development" closeMenu={closeMenu} showServicesMenu={showServicesMenu} countyMenu={countyMenu} cityMenu={cityMenu} showCountyMenu={showCountyMenu} showCityMenu={showCityMenu} />
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" onClick={() => (showStateMenu('graphic'), showCountyMenu(''), showCityMenu(''))} style={{ cursor: "pointer" }}>Graphic Design +</a>
                                                <ServiceMenu service="graphic" stateMenu={stateMenu} serviceName="graphic-design" closeMenu={closeMenu} showServicesMenu={showServicesMenu} countyMenu={countyMenu} cityMenu={cityMenu} showCountyMenu={showCountyMenu} showCityMenu={showCityMenu} />
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" onClick={() => (showStateMenu('logo'), showCountyMenu(''), showCityMenu(''))} style={{ cursor: "pointer" }}>Logo Design +</a>
                                                <ServiceMenu service="logo" stateMenu={stateMenu} serviceName="logo-design" closeMenu={closeMenu} showServicesMenu={showServicesMenu} countyMenu={countyMenu} cityMenu={cityMenu} showCountyMenu={showCountyMenu} showCityMenu={showCityMenu} />
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pb-2">&nbsp;</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;
