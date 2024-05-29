import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InsidePageHeader from "../../../components/InsidePageHeader";
import MetaHeader from "../../../components/MetaHeader";
import Image from "next/image";

const Logo = () => {
    const router = useRouter();
    const { id } = router.query;
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const logoSet = await axios(
                `https://galacticdigitalstudios.com/backend/public/api/logos/${id}`
            );

            setLogo(logoSet.data.data);
        };

        fetchData();
    }, [logo]);

    return (
        <>
            <MetaHeader
                metatitle = {`${logo.name}- Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services`}
                metadesc = {`Galactic Digital Studios is capable of designing logos for businesses and clients big or small. As an example, here is a site for one of our esteemed clients, ${logo.name}. ${logo.description}`}
                metakeys = "logo design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = {`https://galacticdigitalstudios.com/examples/logos/${id}`}
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title={logo.name} />
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="container">
                            <div className="row">
                                <div className="col d-block gap-2 pb-2">
                                    <Link href="/examples" className="btn btn-outline-alpha btn-lg btn-block">
                                        <FaAngleDoubleLeft />&nbsp;&nbsp;
                                        Back to Examples
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Image alt={logo.name} src={logo.image_url} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>{logo.description}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo;