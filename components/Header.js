import Link from "next/link";

const Header = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary sticky-top border-bottom border-black">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    <img src="https://galacticblue.net/galactic-digital-studios/img/gds-logo-white.png" height="75" alt="Galactic Digital Studios" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item px-1">
                            <Link href="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/faqs" className="nav-link">FAQs</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/team" className="nav-link">Team</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/examples" className="nav-link">Examples</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/request" className="nav-link">Request Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
