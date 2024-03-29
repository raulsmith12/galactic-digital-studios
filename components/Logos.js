import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logos = () => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const logoList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/logos'
            );

            setLogos(logoList.data.data.reverse());
        }

        fetchData();
    }, [logos]);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {logos.map(i => (
                    <div className="col-md-2 col-sm-4 mb-2" key={i.id}>
                        <Link href={"/examples/logos/" + i.id}>
                            <img src={i.thumb_url} width="100%" alt={i.name} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Logos;