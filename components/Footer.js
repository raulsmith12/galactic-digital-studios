import Link from "next/link";

const Footer = () => {
    return (
        <div className="container-fluid px-0 py-2 bg-light sticky-bottom border-top border-primary">
            <div className="row">
                <div className="col-10 offset-1">
                    <p>
                        <Link href="/">Home</Link>&nbsp;&nbsp;
                        <Link href="/team">Team</Link>&nbsp;&nbsp;
                        <Link href="/contact">Contact</Link>&nbsp;&nbsp;
                        <Link href="/privacy">Privacy</Link>&nbsp;&nbsp;
                        <Link href="/request">Request Services</Link>&nbsp;&nbsp;
                        | &copy; {(new Date().getFullYear())} Galactic Digital Studios. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;