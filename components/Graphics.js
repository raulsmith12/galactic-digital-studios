import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Graphics = () => {
    const [graphics, setGraphics] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const graphicList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/graphics'
            );

            setGraphics(graphicList.data.data.reverse());
        }

        fetchData();
    }, [graphics]);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {graphics.map(i => (
                    <div className="col-md-2 col-sm-4 mb-2" key={i.id}>
                        <Link href={"/examples/graphics/" + i.id + "/"}>
                            <Image alt={i.name} src={i.thumb_url} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Graphics;