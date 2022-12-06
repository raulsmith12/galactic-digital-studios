const HomeContactForm = () => {
    return (
        <div className="row pe-0 pb-4 bg-secondary border-bottom border-light">
            <div className="col pe-0">
                <div className="container pt-2">
                    <h5 className="text-white text-center">
                        Contact Galactic Digital Studios
                    </h5>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <form>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="custName" className="form-label text-white">Name</label>
                                        <input type="text" className="form-control" id="custName" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="custEmail" className="form-label text-white">Email</label>
                                        <input type="email" className="form-control" id="custEmail" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="custMessage" className="form-label text-white">Message</label>
                                        <textarea className="form-control" id="custMessage" rows="3" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-light">Send</button>
                            </form>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h6 className="text-white text-center mt-4">Located in Salt Lake City, Utah<br />but serving businesses throughout the continental United States</h6>
                            {/* Email address here  */}
                            {/* Phone number here  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactForm;