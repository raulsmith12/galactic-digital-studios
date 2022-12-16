import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InsidePageHeader from "../../../components/InsidePageHeader";

const Website = () => {
    const router = useRouter();
    const { id } = router.query;
    const [website, setWebsite] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const websiteSet = await axios(
                `https://galacticblue.net/galactic-digital-studios/backend/public/api/websites/${id}`
            );

            setWebsite(websiteSet.data.data);
        };

        fetchData();
    }, []);

    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title={website.name} />
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
                    <img src={website.image_url} width="100%" alt={website.name} />
                </div>
                <div className="col-md-4 col-sm-12">
                    <h3>{website.description}</h3>
                    <Link href={website.site_url} target="_blank" className="h5">Visit the site!</Link>
                </div>
            </div>
        </div>
    )
}

export default Website;