import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InsidePageHeader from "../../../components/InsidePageHeader";

const Graphic = () => {
    const router = useRouter();
    const { id } = router.query;
    const [graphic, setGraphic] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const graphicSet = await axios(
                `https://galacticblue.net/galactic-digital-studios/backend/public/api/graphics/${id}`
            );

            setGraphic(graphicSet.data.data);
        };

        fetchData();
    }, []);

    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title={graphic.name} />
            </div>
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="container">
                        <div className="row">
                            <div className="col d-block gap-2 pb-2">
                                <Link href="/examples" className="btn btn-outline-primary btn-lg btn-block">
                                    <FaAngleDoubleLeft />&nbsp;&nbsp;
                                    Back to Examples
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img src={graphic.image_url} width="100%" alt={graphic.name} />
                </div>
                <div className="col-md-4 col-sm-12">
                    <h3>{graphic.description}</h3>
                </div>
            </div>
        </div>
    )
}

export default Graphic;