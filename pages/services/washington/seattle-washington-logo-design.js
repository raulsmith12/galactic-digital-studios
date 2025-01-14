import InsidePageHeader from "../../../components/InsidePageHeader"
import RequestForm from "../../../components/RequestForm"
import MetaHeader from "../../../components/MetaHeader";
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
                metatitle = "Seattle Washington Logo Design - Galactic Digital Studios"
                metadesc = "Transform your brand with professional logo design services from Galactic Digital Studios in Seattle, Washington. Custom designs to make your business stand out."
                metakeys = "logo design, Seattle, Washington"
                metaurl = "https://galacticdigitalstudios.com/services/washington/seattle-washington-logo-design/"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row pt-5 mt-5">
                    <InsidePageHeader title="Seattle Washington Logo Design" />
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
                        <p className="h6">Great logo design is an art form, and despite what many say, it is only a piece of your online brand identity. The professionals at Galactic Digital Studios understand this and are eager to help with creating your digital brand identity. From the style guides to the marketing slogans to, yes, even the logo design, our team of experienced professionals will help guide you every step of the way so that your brand identity is not only great, but also consistent.</p>
                        <p className="h6">Many local businesses in the Seattle, Washington area are looking to make a name for themselves and create an online brand that grabs people&rsquo;s attention. Whether it&rsquo;s a fresh seafood restaurant on Pine Street or a small herbal remedy shop along the pier at Pike Place Market or a coffee and tea shop in Chinatown, small businesses are doing their best to compete with the big brands, as well as with each other.</p>
                        <p className="h6">A good way to stand out from the crowd - aside from not using the Space Needle in your logo - is to have a great logo design. The experienced team at Galactic Digital Studios will work with you to determine how to create a logo that both fits your brand and helps you stand out from the crowd. Because at the end of the day, the logo helps to sell your business just as much as anything else.</p>
                        <p className="h6">And just like any other of our graphic or digital design services, Seattle, Washington business owners can rest assured that Galactic Digital Studios will work with you to have your logo ready for you in any and every format possible, so that your company can put that logo to good use with embroidering, screen printing, even printing decals and stickers. Your logo should be yours to do with as you see fit. Let Galactic Digital Studios help get you the best logo design for your Seattle, Washington-based business.</p>
                    </div>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="row pt-2">
                        <div className="col-md-9 col-sm-12">
                            <p className="h6">Along with logo design services with Galactic Digital Studios, Seattle, Washington business owners will receive a plethora of other graphic design services to go with your new logo. For instance, if you are in need of a new business card design to go with that new logo, our design specialists will be sure to create a design that will make you stand out from the crowd. If you are in need of a banner for an upcoming event that will make people stop and take notice, we can do that as well. If your new logo needs to be showcased on a billboard along I-5 or even in nearby Kent, that&rsquo;s another service that we offer.</p>
                            <p className="h6">The logo design process with Galactic Digital Studios typically consists of taking the concept and writing down key points about what the logo should convey. From there, we go through the font library online to see what appeals the most to you as the Seattle, Washington business owner. We narrow down the list of fonts and typefaces down to about three or four final candidates and create mockups of each individual font, until a decision has been reached on what font or typeface is to be used. This is when we will create a more refined mockup and make any adjustments that are needed from there. The process is not concluded until you, as the Seattle, Washington business owner, are satisfied with the end result.</p>
                            <h6>Galactic Digital Studios wants to make sure that your logo reflects not only your business but your commitment to the delivery of quality service from your business. If you or anybody you know in the Seattle, Washington area is in need of logo design, contact Galactic Digital Studios today using the form below or the contact info found on this site.</h6>
                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <Image src="https://galacticdigitalstudios.com/img/seattle-washington-logo-design.webp" alt="Seattle Washington logo design" width={0} height={0} style={{ width: "100%", height: "auto" }} />
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