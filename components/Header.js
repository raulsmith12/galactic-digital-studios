import Link from "next/link";
import Image from "next/image";

const Header = () => {
    function closeMenu() {
        const closeButton = document.getElementById('button-close');
        closeButton.click();
    }

    return (
        <div className="row mx-0 fixed-top">
            <div className="col px-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-alpha border-bottom border-secondary main-menu">
                    <div className="container">
                        <Link href="/" className="navbar-brand">
                            <Image alt="Galactic Digital Studios" src="https://galacticdigitalstudios.com/img/gds-logo-white.png" width={0} height={75} style={{ width: "auto" }} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#gdsNavbar" aria-controls="gdsNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" tabIndex="-1" id="gdsNavbar" aria-labelledby="gdsNavbarLabel">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item h4">
                                    <Link href="/" className="nav-link" onClick={() => closeMenu()}>Home</Link>
                                </li>
                                <li className="nav-item h4">
                                    <Link href="/about" className="nav-link" onClick={() => closeMenu()}>About</Link>
                                </li>
                                <li className="nav-item h4">
                                    <Link href="/faqs" className="nav-link" onClick={() => closeMenu()}>FAQs</Link>
                                </li>
                                <li className="nav-item h4">
                                    <Link href="/team" className="nav-link" onClick={() => closeMenu()}>Team</Link>
                                </li>
                                <li className="nav-item h4">
                                    <Link href="/examples" className="nav-link" onClick={() => closeMenu()}>Examples</Link>
                                </li>
                                <li className="nav-item h4">
                                    <Link href="/contact" className="nav-link" onClick={() => closeMenu()}>Contact</Link>
                                </li>
                                <li className="nav-item h4">
                                    <Link href="/services" className="nav-link" onClick={() => closeMenu()}>Services</Link>
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
