import Link from "next/link";

const Footer = () => {
    return (
        <div className="container-fluid px-0 py-2 bg-secondary fixed-bottom border-top border-black">
            <div className="row">
                <div className="col-10 offset-1">
                    <p className="text-white">
                        <Link href="/" className="text-white">Home</Link>&nbsp;&nbsp;
                        <Link href="/team" className="text-white">Team</Link>&nbsp;&nbsp;
                        <Link href="/contact" className="text-white">Contact</Link>&nbsp;&nbsp;
                        <Link href="/privacy" className="text-white">Privacy</Link>&nbsp;&nbsp;
                        <Link href="/request" className="text-white">Request Services</Link>&nbsp;&nbsp;
                        | &copy; {(new Date().getFullYear())} Galactic Digital Studios. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;