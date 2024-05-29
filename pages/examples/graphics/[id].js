import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InsidePageHeader from "../../../components/InsidePageHeader";
import MetaHeader from "../../../components/MetaHeader";
import Image from "next/image";

const Graphic = () => {
    const router = useRouter();
    const { id } = router.query;
    const [graphic, setGraphic] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const graphicSet = await axios(
                `https://galacticdigitalstudios.com/backend/public/api/graphics/${id}`
            );

            setGraphic(graphicSet.data.data);
        };

        fetchData();
    }, [graphic]);

    return (
        <>
            <MetaHeader
                metatitle = {`${graphic.name}- Galactic Digital Studios - Trusted Small Business Web Development and Graphic Design Services`}
                metadesc = {`Galactic Digital Studios is capable of building websites big or small no matter what the client. As an example, here is a site for one of our esteemed clients, ${graphic.name}. ${graphic.description}`}
                metakeys = "graphic design, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
                metaurl = {`https://galacticdigitalstudios.com/examples/graphics/${id}`}
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title={graphic.name} />
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
                        <Image alt={graphic.name} src={graphic.image_url} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>{graphic.description}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graphic;