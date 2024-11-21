import InsidePageHeader from "../../../components/InsidePageHeader"
import RequestForm from "../../../components/RequestForm"
import MetaHeader from "../../../components/MetaHeader"
import Image from "next/image"
import { Suspense, useEffect, useState } from "react";

const Page = () => {
    const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      const desktopDevice = window.innerWidth;
      if (desktopDevice > 767) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }, []);

    return (
        <>
            <MetaHeader
                metatitle = "Portland Oregon Logo Design - Galactic Digital Studios"
                metadesc = "Get standout logo design in Portland, Oregon with Galactic Digital Studios. Crafting unique, professional logos that elevate your brand identity."
                metakeys = "logo design, Portland, Oregon"
                metaurl = "https://galacticdigitalstudios.com/services/oregon/portland-oregon-logo-design/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Portland Oregon Logo Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Quality Logo Design For The Pacific Northwest</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <Image src="https://galacticdigitalstudios.com/img/logo-design-l.webp" alt="Monitor with laptop with logo design on both" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">Your company&rsquo;s logo design is only a small piece of the much larger brand identity picture. A good logo design will help establish a brand identity and elevate your brand to the next level, whereas a bad logo design will shatter the entire brand identity picture. Galactic Digital Studios&rsquo; team of logo design professionals has been working with small businesses for over ten years, helping establish brands for local wedding DJs, Twitch streamers, and even non-profit volunteer programs.</p>
                        <p className="h6">Portland, Oregon is home to some of the most iconic brands in the western United States. Perhaps none as iconic as their donut franchises Blue Star Donuts and the world-renowned Voodoo Doughnuts. Portland, Oregon also has international brands calling the Rose City home to their office bases; none more prominent or more recognizable than Nike.</p>
                        <p className="h6">When discussing logo design, the brand that everybody points to as having had the most success and yet the cleanest and simplest logo design is Nike. Anywhere you go in the world, anytime you see the simple swoosh of Nike, it doesn&rsquo;t matter how old or young you are, whether or not you&rsquo;ve played sports, everybody recognizes the Nike swoosh. It is the cornerstone of a nearly-40-year-old brand that is synonymous with simple elegance and excellence. And yet, the simple, clean, enduring logo design is as much a testament to Nike&rsquo;s marketing prowess as it is a statement of how a simple logo design can be just one piece of a brand&rsquo;s marketing identity.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row pt-2">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Galactic Digital Studios prides itself on creating logos that are simple (but not too simple) and yet relates to your brand and what your company represents. We recognize brands like Nike, McDonald&rsquo;s, Apple, and Hewlett-Packard all have one thing in common: simple logo designs that can be used as a cornerstone of a brand&rsquo;s identity and marketing. Having a simple and clean logo design is essential in establishing a brand identity that withstands the test of time.</p>
                            <p className="h6">What does that mean for local businesses in Portland, Oregon and its surrounding communities? It means that you have access to logo design professionals that are both students of the industry and working with small businesses to create lasting brand identities. It also means that your Portland, Oregon small business will have a logo design that you will be both proud to show off to your friends and family as well as able to use in all of your marketing.</p>
                            <p className="h6">Now, in addition to getting a logo design that is both clean and representative of your brand, Galactic Digital Studios is willing to work with you on creating your graphic design and marketing strategies. Remember, great logo design is just the start of establishing a brand identity. There is also creating a brand style guide, establishing brand colors and font styles, determining proper use of the logo, determining how a logo will look in different marketing settings, creating web-friendly versions of the logo for a website, and much more.</p>
                            <p className="h6">Having a clean logo design has many other benefits than what has already been described. Using a cleaner logo design gives your logo a level of versatility that a clunky design wouldn&rsquo;t necessarily have. Now, does this mean that you wouldn&rsquo;t be able to add on to a clean logo design? Of course not. Remember, the logo design is a cornerstone, a piece of the brand identity, not the be-all-and-all; that&rsquo;s not to discredit or take away from its importance, though.</p>
                            <p className="h6">You also want a logo design that is professional and memorable. Again, using the Nike example, something that is clean and simple can be memorable for many reasons when used in an effective marketing campaign. And with the logo design professionals at Galactic Digital Studios, you will be able to put together a marketing campaign that will help establish your brand&rsquo;s identity and use your logo design in an effective manner.</p>
                            <h6>Galactic Digital Studios will also work with you to make sure that you receive all the files you need to submit your new logo design for all of your digital and/or printed graphic design needs. If you are still unsure about your Portland, Oregon small business needing a new logo design, use the contact form below or the contact info found on this site to consult with one of our professionals today.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/portland-oregon-logo-design.webp" alt="Portland Oregon logo design" width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Suspense>
                <Suspense fallback={<p>Loading...</p>}>
                    {isDesktop && (
                        <div className="row">
                            <div className="col">
                                <RequestForm selectedService="logo" />
                            </div>
                        </div>
                    )}
                </Suspense>
            </div>
        </>
    )
}

export default Page;