import bannerImage from "media/organic-shopping-services/geo-service/bannerImage.webp";
import VideoPoster01 from "media/organic-shopping-services/geo-service/videoPoster01.webp";
import VideoPoster02 from "media/organic-shopping-services/aeo-service/videoPoster-02.webp";
import Image1 from "media/organic-shopping-services/geo-service/Image1.webp";

export const BannerData = {
    title: "Dominate AI Overviews with Generative Engine Optimization",
    desc: "We optimize your content, credibility, and digital footprint to get your brand featured in AI-generated answers on Google Search when users ask industry-specific questions.",
    img: bannerImage.src,
    link: "https://calendly.com/infinitidigital/free-seo-consultation",
};


// States Counter
export const StateCounter = {
    subtitle: "Companies Trust Our GEO Expertise",
    title: "Brands Trust Us for Search Generative Optimization",
    desc: "From startups to enterprise-level brands, businesses trust us to enhance their presence in AI-driven search. We combine technical SEO, content depth, and authority building for real results.",
    stateItem: [
        {
            numbers: "2000+",
            namee: "Pages ranked in AI Overview"
        },
        {
            numbers: "100+",
            namee: "AI & SEO Experts"
        }, {
            numbers: "3M+",
            namee: "Users Reached Through AI"
        }, {
            numbers: "4.9/5",
            namee: "Clutch Rating"
        }
    ]
}


export const GeoJourneyData = {
    title: (<>Ready to Be the First Answer<br /> in Google’s AI Overview?</>),
    desc: "When someone searches for your service, Google’s new AI summaries show quick answers first, often before anyone even clicks a link. We make sure your business is part of those answers by optimizing your content, structure, and credibility so Google pulls you into that prime spot.",
    video: "#",
    BannerPoster: VideoPoster01.src,
    txt: "Optimize for AI Search"
};


export const Content1Data = {
    title: "Be the First Name AI Recommends",
    desc: (<>
        <p>When users search online today, they’re often met with AI-generated summaries that recommend businesses, services, or products instantly, without ever clicking a link. We help you claim a spot in those summaries by optimizing what matters: relevance, structure, and authority. If you’re not showing up there, your competitors are.</p>
        <p>These AI Overviews, powered by tools like Google SGE and Gemini, are quickly becoming the new front page of search. If your brand isn’t featured in these summaries, you’re not just buried, you’re invisible.</p>
        <p>We help you take control of that visibility. Through Generative Engine Optimization Service, we optimize the exact content, structure, and authority signals that AI engines look for when choosing which brands to feature. Whether you’re a local service provider or an eCommerce brand, our strategy makes sure your name is the one users see, trust, and engage with, right at the top of their search journey.</p>
        <p>Because if you’re not part of the answer, you’re not part of the decision. Let’s fix that.</p>
    </>),
    image: Image1.src,
    txt: "Let’s Get Started"
};




// Pricing
export const PriceData = {
    subtitle: "GEO service plans",
    title: "Generative SEO monthly plans",
    desc: "Choose from performance-focused GEO plans built to increase your visibility in AI answers across Google, Gemini, Perplexity, Bing Co-pilot, and ChatGPT.",
    SeoPages: true,
    PriceItem: [
        {
            bgColor: "#7635FF",
            packagename: "Basic Package",
            price: "4,200",
            month: "quarter",
            txt: "(Avg. $1,400/mo – save with quarterly plan)",
            bodyPoints: [
                {
                    title: "For emerging brands ready to break into AI-generated search.",
                    points: [
                        "AI Overview audit + content opportunity mapping",
                        "Optimization for up to 10 key service/product pages",
                        "Structured data implementation",
                        "Inclusion targeting for Google SGE & ChatGPT",
                        "1 AI response simulation report",
                        "Quarterly performance report & roadmap",
                    ],
                },
            ],
        },
        {
            bgColor: "#FF6987",
            packagename: "GEO Growth",
            price: "9,900",
            month: "quarter",
            txt: "(Avg. $3,300/mo – includes deeper AI inclusion work)",
            bodyPoints: [
                {
                    title: "For scaling businesses ready to win space in AI summaries.",
                    points: [
                        "Everything in Starter, plus:",
                        "Optimization for up to 25 pages or products",
                        "Entity-based content and internal linking strategy",
                        "Trust signal boost via 3rd-party mentions & citations",
                        "Inclusion targeting for 4 AI engines (Google, ChatGPT, Gemini, Perplexity)",
                        "Bi-monthly monitoring & optimization",
                    ],
                },
            ],
        },
        {
            bgColor: "#9AFF35",
            packagename: "GEO Elite",
            price: "22,500",
            month: "quarter",
            txt: "(Avg. $7,500/mo – highest authority gain)",
            bodyPoints: [
                {
                    title: "For enterprise brands aiming to dominate AI answers at scale.",
                    points: [
                        "Everything in Growth, plus:",
                        "Optimization for 50+ pages/products across core topics",
                        "Semantic content layering & advanced entity relationships",
                        "Custom schema across business units",
                        "Proactive inclusion strategy for Google SGE, Bing Copilot, Gemini, ChatGPT",
                        "Monthly performance reporting + dedicated strategist",
                        "AI trust authority building (mentions, co-citations, digital PR)",

                    ],
                }
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
            txt: "The biggest difference is how this channel compounds. Every month, our organic exposure grows as Google’s Shopping Graph learns our products better. It’s the most sustainable growth engine we’ve built.",
            icon: <Upcity />,
            namee: "Amanda S.",
            job: "CEO",
        },
    ],
};


export const GeoJourneyData1 = {
    title: "Ready to Get Your Brand Featured in AI Overviews?",
    desc: "Your ideal customers are getting answers from AI, make sure you’re one of them. We’ll optimize your brand to appear where buying decisions begin: in Google’s AI Overviews and beyond.",
    video: "/organic-shopping-services/aeo-service/mainVideo02.mp4",
    BannerPoster: VideoPoster02.src,
    txt: "Let’s Get Started"
};

export const CallActionData = {
    subtitle: "Contact Us",
    title: "Done Right. Done By Experts",
    desc: "We don’t offer band-aid fixes or generic solutions. We engineer fully optimized, compliant, and scalable Organic Shopping systems designed for serious ecommerce growth.",
};



//Services
export const InnerServicesData = {
    title: "Platforms We Optimize For",
    innerServItem: [
        {
            title: "Google Search Generative Experience",
            txt: "Google’s AI Overviews are transforming how people engage with search, offering instant answers, top product picks, and local service suggestions. We optimize your content, structure, and authority signals so Google’s AI recommends your business right inside the summary.",
            url: "#",
        },
        {
            title: "ChatGPT",
            txt: "Millions now use ChatGPT as a decision-making engine. Whether users are asking for product recommendations, top services, or how-to solutions, we position your brand to be mentioned in AI-generated responses, especially in browsing-enabled modes like ChatGPT Plus or with plugins.",
            url: "#",
        },
        {
            title: "Perplexity AI",
            txt: "Perplexity blends conversational AI with live web results, often citing exact sources. We optimize your content for inclusion in its curated summaries by aligning with query intent and ensuring your site is structured and trusted enough to be cited directly.",
            url: "#",
        },
        {
            title: "Gemini",
            txt: "As Google’s advanced AI model powering Android devices, Chrome, and Search, Gemini influences both search responses and in-app decision-making. We fine-tune your presence for Gemini’s language and logic, so your brand is part of its generative output across platforms.",
            url: "#",
        },
    ]
}