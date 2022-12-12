import InsidePageHeader from "../../components/InsidePageHeader";
import RequestForm from "../../components/RequestForm";

const Request = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <InsidePageHeader title="Request Services" />
            </div>
            <div className="row">
                <div className="col">
                    <p className="display-7 mx-5 px-5">Using the form below, let us know what service of ours you are requesting today:</p>
                    <RequestForm />
                </div>
            </div>
        </div>
    )
}

export default Request;