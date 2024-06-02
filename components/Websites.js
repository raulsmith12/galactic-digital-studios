import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Websites = () => {
    const [websites, setWebsites] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const websiteList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/websites'
            );

            setWebsites(websiteList.data.data.reverse());
        }

        fetchData();
    }, [websites]);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {websites.map(i => (
                    <div className="col-md-2 col-sm-4 mb-2" key={i.id}>
                        <Link href={"/examples/websites/" + i.id}>
                            <Image alt={i.name} src={i.thumb_url} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Websites;