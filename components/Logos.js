import axios from "axios";
import { useEffect, useState } from "react";

const Logos = () => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const logoList = await axios(
                'https://galacticblue.net/galactic-digital-studios/backend/public/api/logos'
            );

            setLogos(logoList.data.data);
        }

        fetchData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {logos.map(i => (
                    <div className="col-md-2 col-sm-4" key={i.id}>
                        <img src={i.thumb_url} width="100%" alt={i.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Logos;