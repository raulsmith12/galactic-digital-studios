import InsidePageHeader from "../../components/InsidePageHeader";
import axios from "axios";
import { useState, useEffect } from "react";

const Services = () => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const servicePage = await axios(
                'https://galacticblue.net/galactic-digital-studios/backend/public/api/services'
            );

            setServiceList(servicePage.data.data);
        }

        fetchData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <InsidePageHeader title="Services" />
            </div>
            <div className="row">
                <div className="col mx-5 px-5">
                    <p className="display-7">Galactic Digital Studios prides itself on being a one-stop-shop of sorts for all your digital and online marketing needs. Here is a list of all the services that Galactic provides:</p>
                </div>
            </div>
            <div className="row justify-content-center">
                {serviceList.map(i => (
                    <div className="col-md-4 col-sm-12 d-grid gap-2 mb-2" key={i.id}>
                        <button type="button" className="btn btn-primary btn-lg btn-block" data-bs-toggle="collapse" data-bs-target={`#collapse${i.id}`} aria-expanded="false" aria-controls={`#collapse${i.id}`}>{i.service}</button>
                    </div>
                ))}
            </div>
            {serviceList.map(i => (
                <div className="row my-2" key={i.id}>
                    <div className="col">
                        <div className="collapse multi-collapse" id={`collapse${i.id}`}>
                            <div className="card card-body shadow p-3 mb-5 rounded bg-secondary text-white">
                                <p>{i.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Services;