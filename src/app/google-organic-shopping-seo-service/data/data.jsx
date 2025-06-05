import VideoPoster01 from "media/organic-shopping-services/organic-shopping/videoPoster-01.webp";
import VideoPoster02 from "media/organic-shopping-services/organic-shopping/videoPoster-02.webp";
import Image1 from "media/organic-shopping-services/organic-shopping/Image1.webp";
import Image2 from "media/organic-shopping-services/organic-shopping/Image2.webp";
import Link from "next/link";
import bannerImage from "media/organic-shopping-services/organic-shopping/bannerImage.webp";

export const BannerData = {
    title: "Optimize Ecommerce Growth With Google Organic Shopping",
    desc: "Turn Google into your #1 sales channel without paying for Google shopping Ads. Get your products in front of millions with fully optimized organic shopping feeds in combination with search engine optimization.",
    img: bannerImage.src,
};


export const GeoJourneyData = {
    title: "Stop Paying for Traffic You Can Get for Free",
    desc: "Start growing your organic sales today. Let us show you exactly how much free revenue you’re missing with a 100% free audit of your current Google organic shopping potential.",
    video: "/organic-shopping-services/organic-shopping/mainVideo-01.mp4",
    BannerPoster: VideoPoster01.src,
};

export const Content1Data = {
    title: "Build A Long-Term, Profitable Acquisition Channel On Google",
    desc: (<p>This is the best time to claim your shelf space on Google shopping tab, with our organic shopping optimization service. Buyers can easily filter products by price, brand, color, size, availability, shipping speed, and more, directly inside Google’s search results. This means your products don’t just show up, they show up for exactly the right customer. The better your product data is optimized, the more filters your products qualify for. As Google continues to evolve with smarter AI, visual search, AR previews, and deeper personalization, your optimized feed positions you to capture even more, high-intent traffic.</p>),
    image: Image1.src,
    txt: "Tell us about your products"
};

export const Content2Data = {
    title: "Control Your Customer Acquisition",
    desc: "Every day, more shoppers are skipping marketplaces and heading directly to Google to find products. Google organic shopping tab is exploding, and the brands that optimize early are locking in exposure while everyone else stays dependent on the ads.",
    contentItem: [
        {
            title: "SEO + Shopping",
            txt: "As your product data improves, rankings rise, and buyer signals strengthen, and organic shopping compounds over time, increasing visibility, trust, and conversions with each search query your customers make."
        },
        {
            title: "Multi Surface Exposure",
            txt: "Show up across the entire shopping ecosystem on Google search results, from classic Search to Shopping Tab, Images, Discover, and even Google Lens. Organic listings give your products multi-surface visibility across the shopping network."
        }
    ],
    image: Image2.src,
    txt: "Win More Sales"
};
//Services
export const ServicesData = {
    subtitle: "Our Services",
    title: "Our Organic Shopping Optimization Services",
    desc: "You need expert product feed management, SEO integration, and Google Merchant Center optimization to get real visibility. Most stores fail here, that’s where we come in.",
    SeoPages: true,
    ServicesItem: [
        {
            title: (
                <>
                    Google Shopping Tab  <br />
                    Optimization
                </>
            ),
            txt: "We optimize your product data to rank on Google Shopping’s dedicated tab where serious buyers go to compare products and pricing before purchasing.",
            url: "#",
        },
        {
            title: (
                <>
                    Google Search Results
                    <br />Integration
                </>
            ),
            txt: (<>
                With our <Link href="https://www.infinitidigital.us/seo-service" >seo service</Link> your product feeds appear directly in organic search results including carousels, rich results, and “Popular Products” sections.
            </>),
            url: "#",
        },
        {
            title: (
                <>
                    Google Images <br />
                    Product Visibility
                </>
            ),
            txt: "We ensure your product images are indexed, optimized, and eligible for shopping tags in Google Images, capturing visual shoppers at the discovery stage.",
            url: "#",
        },

        {
            title: (
                <>
                    Google Lens
                    <br />
                    Product Matching
                </>
            ),
            txt: "We prepare your product data to be compatible with Google Lens, allowing your products to appear when customers search visually using their smartphones.",
            url: "#",
        },
        {
            title: (
                <>
                    Google Discover <br />Shopping Exposure
                </>
            ),
            txt: "We help your products qualify for visibility in Google Discover’s AI-driven personalized shopping recommendations, reaching customers even before they search.",
            url: "#",
        },
        {
            title: (<>
                Local Inventory<br /> Integration</>
            ),
            txt: "For eligible businesses, we set up Local Inventory Listings to help nearby customers find your products in-store through local Google search results.",
            url: "#",
        },
        {
            title: (
                <>
                    Shopping Knowledge <br />
                    Graph Optimization
                </>
            ),
            txt: "We structure your brand and product data to feed into Google shopping graph, increasing authority, cross-surface visibility, and eligibility for AI-powered shopping experiences.",
            url: "#",
        },
        {
            title: (
                <>
                    Rich Result <br /> Eligibility
                </>
            ),
            txt: "We implement advanced schema markup on your website to make your products eligible for enhanced search listings, product reviews, pricing, and availability rich snippets.",
            url: "#",
        },
    ],
};

export const processlp = {
    subtitle: "Our Process",
    title: "Our Organic Shopping Optimization Process",
    txt: (<>We don’t just submit feeds, our SEO experts engineer long-term visibility, error-free data, and scalable revenue growth across Google’s entire Shopping ecosystem.</>),
    processlpItem: [
        {
            title: "Audit & Discovery",
            txt: "We analyze your current Merchant Center account, product feed, structured data, and SEO signals to identify every opportunity and technical gap blocking your visibility."
        },
        {
            title: "Deep Feed Optimization",
            txt: "We fully optimize your product titles, descriptions, attributes, and GTIN data, ensuring your products meet Google’s highest quality standards and maximize eligibility across all search filters."
        },
        {
            title: "Structured Data Implementation",
            txt: "We deploy advanced schema markup on your website to strengthen Google’s Shopping Graph understanding of your products, categories, and brand authority."
        },
        {
            title: "Merchant Center Compliance & Error Resolution",
            txt: "We resolve feed disapprovals, pricing mismatches, policy violations, and technical errors keeping your listings live, fully compliant, and protected from suspensions."
        },
        {
            title: "Multi-Surface Eligibility Expansion",
            txt: "We prepare your products for full exposure across Google Shopping Tab, Search, Images, Discover, Lens, and Knowledge Panels, capturing customers everywhere they shop."
        },
        {
            title: "Ongoing Monitoring, Maintenance & Growth Optimization",
            txt: "Google’s algorithms evolve constantly. We continuously monitor feed health, surface eligibility, and visibility metrics, making proactive optimizations to compound your long-term growth."
        }
    ]

}

export const GeoJourneyData1 = {
    title: "Let’s Build Your Organic Growth Engine",
    desc: "Your products deserve full visibility on Google. We handle the technical work, feed optimization, Merchant Center compliance, and ongoing growth so you can finally leverage Google Organic Shopping the way other ecommerce brands are doing. ",
    video: "/organic-shopping-services/organic-shopping/mainVideo-02.mp4",
    BannerPoster: VideoPoster02.src,
    txt: "Get your custom plan now."
};

//Testimonials
import {
    ClutchLogo,
    TrustpilotLogo,
    GoogleLogo,
    Forbes,
    Upcity,
} from "@/src/app/app-constants";
export const TestimonialData = {
    subtitle: "Happy Clients",
    title: "Hear It from Our Clients ",
    desc: "At Infiniti Digital, client success is at the heart of everything we do. From transforming visibility to driving measurable growth, we’ve helped businesses across industries achieve exceptional results.",
    Testslider: [
        {
            txt: "We struggled for months with feed disapprovals and Merchant Center issues. Their team cleaned everything up, optimized our data, and within weeks we started seeing consistent organic traffic from Google Shopping. It’s been a game-changer for our acquisition costs.",
            icon: <ClutchLogo />,
            namee: "Jason L.",
            job: "Ecommerce Director",
        },
        {
            txt: "The traffic we get from Organic Shopping converts better than any other channel we’ve tried. It’s highly targeted, product-focused, and completely independent of our ad budget. They nailed the optimization.",
            icon: <TrustpilotLogo />,
            namee: "Sarah K.",
            job: "DTC Founder",
        },
        {
            txt: "Google Organic Shopping allowed us to finally scale profitably without constantly increasing ad spend. Our margins are stronger, and we’re no longer completely dependent on paid channels.",
            icon: <GoogleLogo />,
            namee: "Emily R.",
            job: "Head of Ecommerce",
        },
        {
            txt: "Our catalog is complex — over 5,000 SKUs, multiple currencies, and multiple countries. They built a scalable system that keeps us fully compliant across all regions while growing our organic visibility worldwide.",
            icon: <Forbes />,
            namee: "David W.",
            job: "International Ecommerce Director",
        },
        {
            txt: "The biggest difference is how this channel compounds. Every month, our organic exposure grows as Google’s Shopping Graph learns our products better. It’s the most sustainable growth engine we've built.",
            icon: <Upcity />,
            namee: "Amanda S.",
            job: "CEO",
        },
    ],
};

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Done Right. Done By Experts",
    desc: "We don’t offer band-aid fixes or generic solutions. We engineer fully optimized, compliant, and scalable Organic Shopping systems designed for serious ecommerce growth.",
};