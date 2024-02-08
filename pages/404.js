import MetaHeader from "../components/MetaHeader";

const Home = () => {
  return (
    <>
      <MetaHeader
        metatitle = "404 - Not Found - Galactic Digital Studios"
        metadesc = "The page you are looking for cannot be found. Please try typing that in again."
        metakeys = "Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
        metaurl = "https://galacticdigitalstudios.com/404"
      />
      <div className="container-fluid px-0 pb-4 mb-4">
        <div className="row">
            <div className="col-md-4 col-sm-12 text-center py-5">
                <h1 className="display-1">
                    Page not found
                </h1>
                <h3 className="display-2">404</h3>
            </div>
            <div className="col-md-8 col-sm-12 text-center py-4" style={{ backgroundImage: 'url("https://galacticdigitalstudios.com/img/banner-1.jpg")', backgroundRepeat: 'no-repeat', textShadow: '1px 1px 5px #000' }}>
                <h3 className="display-3 text-white">It appears you are a little lost. Let's see if we can't get you back on track. Re-type the page you are trying to access in the address bar or use the links in the menu to find the page you are looking for.</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;