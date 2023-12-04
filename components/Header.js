import Link from "next/link";
import { useState } from "react";
import ServiceMenu from "./ServiceMenu";

const Header = () => {
    const [servicesMenu, showServicesMenu] = useState(false);
    const [stateMenu, showStateMenu] = useState('');
    const [countyMenu, showCountyMenu] = useState('');
    const [cityMenu, showCityMenu] = useState('');

    function closeMenu() {
        const closeButton = document.getElementById('button-close');
        closeButton.click();
        showServicesMenu('');
        showCountyMenu('');
        showCityMenu('');
    }

    return (
        <div className="row mx-0">
            <div className="col px-0">
                <nav className="navbar navbar-dark bg-alpha sticky-top border-bottom border-secondary overflow-scroll">
                    <div className="container">
                        <Link href="/" className="navbar-brand">
                            <img src="https://galacticdigitalstudios.com/img/gds-logo-white.png" height="75" alt="Galactic Digital Studios" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#gdsNavbar" aria-controls="gdsNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end bg-alpha text-bg-dark" tabIndex="-1" id="gdsNavbar" aria-labelledby="gdsNavbarLabel">
                            <div className="offcanvas-header">
                                <img src="https://galacticdigitalstudios.com/img/gds-logo-white.png" height="75" alt="Galactic Digital Studios" id="gdsNavbarLabel" />
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
                                    <li className="nav-item" onClick={() => showServicesMenu(true)} style={{ cursor: "pointer" }}>
                                        <a className="nav-link">Services</a>
                                        <ul className={"bg-alpha text-bg-dark border border-0 ps-2 dropdown-menu " + (servicesMenu ? 'show' : 'hidden')}>
                                            <li className="nav-item" onClick={() => showStateMenu('web')}>
                                                <a className="nav-link">Web Development +</a>
                                                <ServiceMenu service="web" stateMenu={stateMenu} serviceName="web-development" closeMenu={closeMenu} showServicesMenu={showServicesMenu} countyMenu={countyMenu} cityMenu={cityMenu} showCountyMenu={showCountyMenu} showCityMenu={showCityMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showStateMenu('graphic')}>
                                                <a className="nav-link">Graphic Design +</a>
                                                <ServiceMenu service="graphic" stateMenu={stateMenu} serviceName="graphic-design" closeMenu={closeMenu} showServicesMenu={showServicesMenu} countyMenu={countyMenu} cityMenu={cityMenu} showCountyMenu={showCountyMenu} showCityMenu={showCityMenu} />
                                            </li>
                                            <li className="nav-item" onClick={() => showStateMenu('logo')}>
                                                <a className="nav-link">Logo Design +</a>
                                                <ServiceMenu service="logo" stateMenu={stateMenu} serviceName="logo-design" closeMenu={closeMenu} showServicesMenu={showServicesMenu} countyMenu={countyMenu} cityMenu={cityMenu} showCountyMenu={showCountyMenu} showCityMenu={showCityMenu} />
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services/businessCard" className="nav-link" onClick={() => closeMenu()}>Business Card Design</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services/brochure" className="nav-link" onClick={() => closeMenu()}>Brochure Design</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services/database" className="nav-link" onClick={() => closeMenu()}>Database Management</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services/cms" className="nav-link" onClick={() => closeMenu()}>Content Management</Link>
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
