import Link from "next/link";
import { useState } from "react";
import ServiceMenu from "./ServiceMenu";

const Header = () => {
    const [servicesMenu, showServicesMenu] = useState(false);
    const [stateMenu, showStateMenu] = useState('');

    function hideNavbar() {
        const element = document.getElementById('navbarSupportedContent');
        element.classList.remove('show');
    }

    return (
        <div className="row mx-0">
            <div className="col px-0">
                <nav className="navbar navbar-dark navbar-expand-lg bg-alpha sticky-top border-bottom border-secondary">
                    <div className="container">
                        <Link href="/" className="navbar-brand">
                            <img src="https://galacticdigitalstudios.com/img/gds-logo-white.png" height="75" alt="Galactic Digital Studios" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                                <li className="nav-item px-1">
                                    <Link href="/" className="nav-link" onClick={hideNavbar}>Home</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/about" className="nav-link" onClick={hideNavbar}>About</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/faqs" className="nav-link" onClick={hideNavbar}>FAQs</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/team" className="nav-link" onClick={hideNavbar}>Team</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/examples" className="nav-link" onClick={hideNavbar}>Examples</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/contact" className="nav-link" onClick={hideNavbar}>Contact</Link>
                                </li>
                                <li className="nav-item px-1" onClick={() => showServicesMenu(true)} onMouseOver={() => showServicesMenu(true)} onMouseOut={() => showServicesMenu(false)}>
                                    <a className="nav-link">Services</a>
                                    <ul className={"dropdown-menu " + (servicesMenu ? 'show' : 'hidden')}>
                                        <li className="dropdown-item position-relative" onClick={() => showStateMenu('web')} onMouseOver={() => showStateMenu('web')} onMouseOut={() => showStateMenu('')}>
                                            <a className="nav-link text-black">Web Development +</a>
                                            <ServiceMenu service="web" stateMenu={stateMenu} serviceName="web-development" hideNavbar={hideNavbar} />
                                        </li>
                                        <li className="dropdown-item position-relative" onClick={() => showStateMenu('graphic')} onMouseOver={() => showStateMenu('graphic')} onMouseOut={() => showStateMenu('')}>
                                            <a className="nav-link text-black">Graphic Design +</a>
                                            <ServiceMenu service="graphic" stateMenu={stateMenu} serviceName="graphic-design" hideNavbar={hideNavbar} />
                                        </li>
                                        <li className="dropdown-item position-relative" onClick={() => showStateMenu('logo')} onMouseOver={() => showStateMenu('logo')} onMouseOut={() => showStateMenu('')}>
                                            <a className="nav-link text-black">Logo Design +</a>
                                            <ServiceMenu service="logo" stateMenu={stateMenu} serviceName="logo-design" hideNavbar={hideNavbar} />
                                        </li>
                                        <li className="dropdown-item position-relative" onClick={() => showStateMenu('business-card')} onMouseOver={() => showStateMenu('business-card')} onMouseOut={() => showStateMenu('')}>
                                            <Link className="nav-link text-black" href="/services/businessCard" onClick={hideNavbar}>Business Card Design</Link>
                                        </li>
                                        <li className="dropdown-item position-relative" onClick={() => showStateMenu('brochure')} onMouseOver={() => showStateMenu('brochure')} onMouseOut={() => showStateMenu('')}>
                                            <Link className="nav-link text-black" href="/services/brochure" onClick={hideNavbar}>Brochure Design</Link>
                                        </li>
                                        <li className="dropdown-item position-relative" onClick={() => showStateMenu('database')} onMouseOver={() => showStateMenu('database')} onMouseOut={() => showStateMenu('')}>
                                            <Link className="nav-link text-black" href="/services/database" onClick={hideNavbar}>Database Management</Link>
                                        </li>
                                        <li className="dropdown-item position-relative" onClick={() => showStateMenu('cms')} onMouseOver={() => showStateMenu('cms')} onMouseOut={() => showStateMenu('')}>
                                            <Link className="nav-link text-black" href="/services/cms" onClick={hideNavbar}>Content Management</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;
