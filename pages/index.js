import Link from 'next/link';
import HomeSections from '../components/HomeSections';
import HomeContactForm from '../components/HomeContactForm';
import MetaHeader from '../components/MetaHeader';
import { Suspense, useEffect, useState } from 'react';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const desktopDevice = window.innerWidth;
    if (desktopDevice > 767) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [])

  return (
    <>
      <MetaHeader
        metatitle = "Galactic Digital Studios - Small Business Web Development Services"
        metadesc = "Galactic Digital Studios is your one-stop shop for web development, search engine optimization, content management, graphic and logo design, and much more!"
        metakeys = "Galactic Digital Studios, website design, website development, web development, web design, mobile app design, mobile app development, graphic design, logo design, content management, database management, search engine optimization, SEO, CMS, Salt Lake City, Ogden, Provo, Denver, Seattle, Portland, Tacoma, Beaverton, Boise"
        metaurl = "https://galacticdigitalstudios.com/"
      />
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col py-5 bg-dark bg-animation home-bg-hero overflow-hidden">
            {isDesktop && (
              <>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
              </>
            )}
            <div className="align-items-center" style={{ minHeight: '100vh', display: 'flex' }}>
              <div style={{ width: '100%' }}>
                <h1 className="home-title display-1 pb-3 neon-text">Out of This World Service<br />Down to Earth Prices</h1>
                <div className="text-center">
                  <Link href="/contact/" className="home-subtitle btn btn-white">
                    <span className="h2">Contact Us Today!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<p>Loading section...</p>}>
          <HomeSections />
        </Suspense>
        {isDesktop && (
          <Suspense fallback={<p>Loading contact form...</p>}>
            <HomeContactForm />
          </Suspense>
        )}
      </div>
    </>
  )
}

export default Home;