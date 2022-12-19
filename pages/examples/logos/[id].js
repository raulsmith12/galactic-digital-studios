import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InsidePageHeader from "../../../components/InsidePageHeader";

const Logo = () => {
    const router = useRouter();
    const { id } = router.query;
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const logoSet = await axios(
                `https://galacticdigitalsolutions.com/backend/public/api/logos/${id}`
            );

            setLogo(logoSet.data.data);
        };

        fetchData();
    }, []);

    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title={logo.name} />
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
                    <img src={logo.image_url} width="100%" alt={logo.name} />
                </div>
                <div className="col-md-4 col-sm-12">
                    <h3>{logo.description}</h3>
                </div>
            </div>
        </div>
    )
}

export default Logo;