import InsidePageHeader from "../../components/InsidePageHeader";
import MetaHeader from "../../components/MetaHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

const Team = () => {
    const [teamContent, setTeamContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const teamPage = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/team'
            );

            setTeamContent(teamPage.data.data);
        }

        fetchData();
    }, [teamContent]);

    return (
        <>
            <MetaHeader
                metatitle = "Meet the Galactic Digital Studios Team"
                metadesc = "The Galactic Digital Studios team is a diverse group of web professionals dedicated to provide the best possible service."
                metakeys = "website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Seattle, Portland, Tacoma"
                metaurl = "https://galacticdigitalstudios.com/team/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Meet the Team" />
                </div>
                <div className="row">
                    <div className="col mx-1">
                        <p className="h3">Our team of highly skilled designers and developers is here to help you with any of your digital marketing and branding needs, bringing a wealth of experience and expertise to the table. To help with putting faces to names, here is the Galactic Digital Studios team:</p>
                    </div>
                </div>
                {teamContent.map(i => (
                    <div className="row mx-1 my-2" key={i.id}>
                        <div className="col-md-2 col-sm-4">
                            <Image alt={i.name} src={i.image_url} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className="col-md-10 col-sm-8">
                            <h4 className="display-4">{i.name}</h4>
                            <h6 className="display-6">{i.title}</h6>
                            <p className="h6">{i.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Team;