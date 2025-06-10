import bannerImage from "media/organic-shopping-services/aeo-service/bannerImage.webp";
import VideoPoster01 from "media/organic-shopping-services/aeo-service/videoPoster-01.webp";
import VideoPoster02 from "media/organic-shopping-services/aeo-service/videoPoster-02.webp";
import Image1 from "media/organic-shopping-services/aeo-service/Image1.webp";
import { CheckGreenIcon } from "@/src/app/app-constants";
import Link from "next/link";

export const BannerData = {
    title: "Optimize Ecommerce Growth With Google Organic Shopping",
    desc: "Turn Google into your #1 sales channel without paying for Google shopping Ads. Get your products in front of millions with fully optimized organic shopping feeds in combination with search engine optimization.",
    img: bannerImage.src,
};


// States Counter
export const StateCounter = {
    subtitle: "Crafting Impactful Designs",
    title: "Shaping Exceptional Online Experiences",
    desc: "We merge creativity and strategy to deliver innovative website designs that captivate audiences and empower businesses to thrive online.",
    stateItem: [
        {
            numbers: "200+",
            namee: "Websites Designed"
        },
        {
            numbers: "100+",
            namee: "Website Design Experts"
        }, {
            numbers: "3M",
            namee: "Active Website Users"
        }, {
            numbers: "4.9",
            namee: "Rating On Clutch"
        }
    ]
}


export const GeoJourneyData = {
    title: "Stop Paying for Traffic You Can Get for Free",
    desc: "Start growing your organic sales today. Let us show you exactly how much free revenue you’re missing with a 100% free audit of your current Google organic shopping potential.",
    video: "/organic-shopping-services/aeo-service/mainVideo-01.mp4",
    BannerPoster: VideoPoster01.src,
};

export const Content1Data = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    desc: (<>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <ul>
            <li><CheckGreenIcon />Lorem ipsum dolor sit amet, consectetur.</li>
            <li><CheckGreenIcon />Ut labore et dolore magna aliqua.</li>
            <li><CheckGreenIcon />Magna aliqua ut enim ad minim.</li>
        </ul>
    </>),
    image: Image1.src,
    txt: "Tell us about your products"
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

// Pricing
export const PriceData = {
    subtitle: "Our Pricing",
    title: "Discover Our Transparent SEO Pricing Plans",
    desc: "At Infiniti Digital, we offer affordable, customizable pricing for our SEO services, tailored to meet your business’s unique needs. Explore our competitive and customized pricing to help your business thrive in search results!",
    SeoPages: true,
    PriceItem: [
        {
            bgColor: "#7635FF",
            packagename: "Basic Package",
            price: "1399",
            txt: "Designed for small businesses or startups looking to establish a foundation in SEO.",
            bodyPoints: [
                {
                    title: "Setup",
                    points: [
                        "Website Sitemap",
                        "Check for SEO Scope",
                        "Custom 404 Page Setup / Nofollow Link Checkup",
                    ],
                },
                {
                    title: "Pages & Keywords",
                    points: ["Up to 5 pages optimized", "Focused Keywords: 5"],
                },
                {
                    title: "On-page SEO",
                    points: [
                        "Web Content Optimization",
                        "URL Structure Improvements",
                        "Meta Tags (Title, Description, Header Tags)",
                        "Image Alt Tags and Optimization: 5 images",
                    ],
                },
                {
                    title: "Technical Optimization",
                    points: [
                        "Fixing Crawl Errors",
                        "Mobile-first Optimization",
                        "Page Speed Optimization",
                        "Core Web Vitals Improvements",
                        "Schema Markup Implementation",
                    ],
                },
                {
                    title: "Progress Reporting",
                    points: ["Basic Monthly Progress Reports"],
                },
            ],
        },
        {
            bgColor: "#FF6987",
            packagename: "Growth Package",
            price: "1999",
            txt: "Ideal for businesses aiming to grow their organic reach and improve conversions.",
            bodyPoints: [
                {
                    title: "Setup",
                    points: [
                        "Website Sitemap",
                        "Check for SEO Scope",
                        "Custom 404 Page Setup / Nofollow Link Checkup",
                    ],
                },
                {
                    title: "Pages",
                    points: ["Up to 10 pages optimized"],
                },
                {
                    title: "Keyword Research",
                    points: ["Focused Keywords: 10", "Keyphrase Optimization: 5"],
                },
                {
                    title: "On-page SEO",
                    points: [
                        "Meta Tags (Title, Description, Header Tags)",
                        "Image Alt Tags and Optimization: 10 images",
                        "URL Structure Improvements",
                        "Web Content Optimization",
                        "Anchor Text Optimization",
                        "Landing Page Optimization",
                    ],
                },
                {
                    title: "Technical Optimization",
                    points: [
                        "Fixing Crawl Errors",
                        "Mobile-first Optimization",
                        "Page Speed Optimization",
                        "Core Web Vitals Improvements",
                        "Schema Markup Implementation",
                    ],
                },
                {
                    title: "Tracking & Analytics",
                    points: [
                        "Google Analytics Setup",
                        "Basic Conversion Tracking",
                        "Google Search Console Setup",
                    ],
                },
                {
                    title: "Progress Reporting",
                    points: [
                        "Google Analytics Reports",
                        "Monthly Progress Reports with Recommendations",
                    ],
                },
                {
                    title: "Account Management",
                    points: [
                        "Dedicated Account Manager",
                        "1-Hour Free Consultation (Per Month)",
                    ],
                },
            ],
        },
        {
            bgColor: "#9AFF35",
            packagename: "Premium Package",
            price: "2850",
            txt: "Best suited for businesses seeking comprehensive SEO strategies and advanced tracking.",
            bodyPoints: [
                {
                    title: "Setup",
                    points: [
                        "Website Sitemap",
                        "Check for SEO Scope",
                        "Custom 404 Page Setup / Nofollow Link Checkup",
                    ],
                },
                {
                    title: "Pages",
                    points: ["Up to 15 pages optimized"],
                },
                {
                    title: "Keyword Research",
                    points: ["Focused Keywords: 15", "Keyphrase Optimization: 10"],
                },
                {
                    title: "On-page SEO",
                    points: [
                        "Landing Page Setup",
                        "SGE Visibility Optimization ",
                        "Web Content Optimization",
                        "Anchor Text Optimization",
                        "Landing Page Optimization",
                        "URL Structure Improvements",
                        "Meta Tags(Title, Description, Header Tags)",
                        "Image Alt Tags and Optimization: 15 images",
                    ],
                },
                {
                    title: "Technical Optimization",
                    points: [
                        "Fixing Crawl Errors",
                        "Mobile - first Optimization",
                        "Page Speed Optimization",
                        "Core Web Vitals Improvements",
                        "Schema Markup Implementation",
                    ],
                },
                {
                    title: "Tracking & Analytics",
                    points: [
                        "Google Analytics Setup",
                        "Google Search Console Setup",
                        "Basic Conversion Tracking",
                        "Full - Funnel Conversion Tracking",
                    ],
                },
                {
                    title: "Progress Reporting",
                    points: ["Business Intelligence Dashboard"],
                },
                {
                    title: "Account Management",
                    points: [
                        "Dedicated Account Manager",
                        "2-Hour Free Consultation (Per Month)",
                    ],
                },
            ],
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


export const GeoJourneyData1 = {
    title: "Let’s Build Your Organic Growth Engine",
    desc: "Your products deserve full visibility on Google. We handle the technical work, feed optimization, Merchant Center compliance, and ongoing growth so you can finally leverage Google Organic Shopping the way other ecommerce brands are doing. ",
    video: "/organic-shopping-services/aeo-service/mainVideo02.mp4",
    BannerPoster: VideoPoster02.src,
    txt: "Get your custom plan now."
};

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Done Right. Done By Experts",
    desc: "We don’t offer band-aid fixes or generic solutions. We engineer fully optimized, compliant, and scalable Organic Shopping systems designed for serious ecommerce growth.",
};