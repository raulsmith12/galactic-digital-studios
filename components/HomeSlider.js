const HomeSlider = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://galacticblue.net/galactic-digital-studios/img/banner-1.jpg" className="d-block w-100" alt="Carousel Banner 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="display-1 text-shadow-1">Need Help with Digital Marketing?</h5>
                        <p className="display-5 text-shadow-1">Galactic Digital Studios is Here to Help</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSlider;