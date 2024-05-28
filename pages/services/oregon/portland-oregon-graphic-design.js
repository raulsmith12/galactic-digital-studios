import InsidePageHeader from "../../../components/InsidePageHeader"
import RequestForm from "../../../components/RequestForm"
import MetaHeader from "../../../components/MetaHeader"

const Page = () => {
    return (
        <>
            <MetaHeader
                metatitle = "Portland Oregon Graphic Design - Galactic Digital Studios"
                metadesc = "Business cards. Brochures. Banners. Social media graphics. Flyers. Bookmarks. Galactic Digital Studios can do all of these and more. Ask a professional member of our team about how we can help your business grow."
                metakeys = "graphic design, flyer design, banner design, bookmark design, Portland, Oregon"
                metaurl = "https://galacticdigitalstudios.com/services/oregon/portland-oregon-graphic-design"
            />
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <InsidePageHeader title="Portland Oregon Graphic Design" />
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Graphic Design Including Banners, Bookmarks, and More for Portland</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col text-center">
                                    <img src="https://galacticdigitalstudios.com/img/graphic-design-l.webp" width="100%" alt="Laptop with trendy graphic design poster behind it" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">There are many applications to great graphic design. Graphic design is really all around us, when you think about it. Billboards, banner ads, websites, social media, books, even applications on your mobile device, all have graphic design elements about them. And when it comes to finding a great graphic design company that will deal with small businesses, it can be a tremendous challenge.</p>
                        <p className="h6">Now, with small business graphic design from Galactic Digital Studios available in the Portland, Oregon area, this service is much more readily available to you. Portland, Oregon is one of the most naturally beautiful regions in the country. Only miles away from both the sandy beaches of Seaside and the breathtaking sights of Multnomah Falls, Portland, Oregon is often referred to as the &ldquo;weird&rdquo; city for its interesting and unusual landscape.</p>
                        <p className="h6">Even taking a trip to Portland, Oregon really drives home the importance of great graphic design. Everywhere you go in town, there are reminders of the need for this. When you go to the Saturday Market, you see people with signs and banners looking to advertise for their business. When you go to the zoo or the International Rose Test Garden, there are reminders of what exhibit you&rsquo;re in or where you need to go.</p>
                        <p className="h6">But perhaps one of the greatest reminders of the need for great graphic design can be found in Old Town in Portland, Oregon: Voodoo Doughnuts, a Portland, Oregon staple. Even as you&rsquo;re struggling to find validated parking in the area, you can tell right away what you&rsquo;re looking for and where to find it. The pink box that the donuts come in, the signage outside the small building, and the menu once you enter the building (and even the one on the side of the building that helps patrons decide what they want) are all great examples of graphic design being used to help advertise a business.</p>
                        <p className="h6">When considering working with a small business graphic design company, take into great consideration that you want a business that understands the everyday struggles that a small business goes through. You want a graphic design business that is flexible, seeks out understanding of the local industry and what the latest trends are, will fully support local business first, and is willing to work with you on building your printed and digital graphic design needs.</p>
                        <p className="h6">Our graphic design team is fully capable and equipped to handle any and all of your digital and printed graphic design needs. If you are looking for printed cups or packages for your coffee or confectionery shop, we have design professionals that can handle this. If you are looking for a banner or sign to let people know where you are, this is also something that we can handle. If you are merely looking for business cards, Galactic Digital Studios is even capable of helping design those, as well.</p>
                        <p className="h6">Galactic Digital Studios handles business card design very well. It is said that Portland, Oregon, is only the second-best place in the United States for coffee. With so many national chains and local shops, the opportunity to have your business card on a coffee shop wall is great. But it&rsquo;s not as great if you don&rsquo;t have the right design, a design that fits the overall theme and color scheme of your brand. That&rsquo;s why Galactic Digital Studios will go over details about your brand identity with you before designing your business card.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <p className="h6">Something else that you may not realize is graphic design-centric is stickers. Let&rsquo;s face it; you see laptops with stickers on them all over Portland, Oregon. Why shouldn&rsquo;t your business also get in on that fun? Galactic Digital Studios will help design a sticker that will let people know who you are and what you do. And it&rsquo;s not just laptops; these stickers can be used for water bottles, music venue walls, even small furniture. No matter the vessel, the stickers will help get the word out about your business.</p>
                        <p className="h6">And every graphic design service that Galactic Digital Studios provides comes with an option to shop around at various print shops in the Portland, Oregon area before shopping at one of the big box online stores. We believe in shopping local first for a number of reasons, not the least of which being timeliness and getting a quality product.</p>
                        <h6>Use the contact form below or the contact info found on this site to learn more about our graphic design services in the Portland, Oregon area and surrounding communities.</h6>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src="https://galacticdigitalstudios.com/img/portland-oregon-graphic-design.webp" width="100%" alt="Portland Oregon graphic design" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <RequestForm selectedService="graphic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;