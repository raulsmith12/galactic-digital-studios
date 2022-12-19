import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Websites = () => {
    const [websites, setWebsites] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const websiteList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/websites'
            );

            setWebsites(websiteList.data.data);
        }

        fetchData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {websites.map(i => (
                    <div className="col-md-2 col-sm-4" key={i.id}>
                        <Link href={"/examples/websites/" + i.id}>
                            <img src={i.thumb_url} width="100%" alt={i.name} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Websites;