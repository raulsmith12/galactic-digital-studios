import InsidePageHeader from "../../components/InsidePageHeader";
import axios from "axios";
import { useState, useEffect } from "react";

const Team = () => {
    const [teamContent, setTeamContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const teamPage = await axios(
                'https://galacticdigitalsolutions.com/backend/public/api/team'
            );

            setTeamContent(teamPage.data.data);
        }

        fetchData();
    }, []);

    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <InsidePageHeader title="Meet the Team" />
            </div>
            <div className="row">
                <div className="col mx-5 px-5">
                    <p className="display-7">Our team of highly skilled designers and developers is here to help you with any of your digital marketing and branding needs, bringing a wealth of experience and expertise to the table. To help with putting faces to names, here is the Galactic Digital Studios team:</p>
                </div>
            </div>
            {teamContent.map(i => (
                <div className="row px-5 mx-5 my-2" key={i.id}>
                    <div className="col-md-2 col-sm-4">
                        <img src={i.image_url} width="100%" alt={i.name} />
                    </div>
                    <div className="col-md-10 col-sm-8">
                        <h4 className="display-4">{i.name}</h4>
                        <h6 className="display-6">{i.title}</h6>
                        <p className="display-7">{i.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Team;