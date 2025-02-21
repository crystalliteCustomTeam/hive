

//  About Awards

import Awards01 from "media/about/awards/1.svg";
import Awards02 from "media/about/awards/2.svg";
import Awards03 from "media/about/awards/3.svg";
import Awards04 from "media/about/awards/4.svg";
import Awards05 from "media/about/awards/5.svg";
import Awards06 from "media/about/awards/6.svg";
import Awards07 from "media/about/awards/7.svg";
import Awards08 from "media/about/awards/8.svg";
import Awards09 from "media/about/awards/9.svg";
import Awards10 from "media/about/awards/10.svg";
import Awards11 from "media/about/awards/11.svg";

export const AbtAwardsData = {
    subtitle: "",
    title: "Recognized on Top Review Platforms",
    desc: "With our local SEO strategy your business stays on the first page and ahead of competition. Plus, we’ve been featured on top platforms and earned industry awards—check out our presence across the web!",
    images: [
        Awards01.src,
        Awards02.src,
        Awards03.src,
        Awards04.src,
        Awards05.src,
        Awards06.src,
        Awards07.src,
        Awards08.src,
        Awards09.src,
        Awards10.src,
        Awards11.src,
    ],
};

import { Serv01, Serv02, Serv03, Serv04, Serv05, Serv06, Serv07, Serv08, Serv09 } from "@/src/app/app-constants";

//Services
export const ServicesData = {
    subtitle: "",
    title: "Our SEO Services",
    desc: "Everything You Need to Rank & Convert",
    ServicesItem: [
        {
            icon: <Serv01 />,
            title: "Keyword Research & Strategy",
            txt: "We find the best keywords that will bring real customers to your site, not just random clicks. Our strategy helps you rank for the most important terms and drive the right traffic.",
        },
        {
            icon: <Serv02 />,
            title: "Link Building",
            txt: "Getting good backlinks is key to improving your website’s authority and ranking. We get trusted links from respected websites, boosting your online visibility and credibility with Google.",
        },
        {
            icon: <Serv03 />,
            title: "Technical SEO ",
            txt: "Website speed, mobile friendliness, and proper indexing are essential for top performance. We fix any technical issues that slow down your site and ensure it runs smoothly.",
        },
        {
            icon: <Serv04 />,
            title: "Local SEO",
            txt: "Be seen by customers in your area through local search results and Google Maps. Our local SEO helps you stand out so nearby customers can easily find and contact you.",
        },
        {
            icon: <Serv05 />,
            title: "On-Page SEO",
            txt: "We optimize your website’s content, headings, and meta tags to make it easier for search engines to understand and rank your site. This improves both rankings and user experience.",
        },
        {
            icon: <Serv06 />,
            title: "Entity SEO",
            txt: "We strengthen your site’s authority by making sure it's seen as an expert in your field, using structured data and topic relevance to help you rank for a wider range of searches.",
        },
        {
            icon: <Serv07 />,
            title: "Search Generative Experience",
            txt: "Google’s AI search updates can affect your rankings. We keep up with the changes and adjust your site so it stays visible and competitive in search results.",
        },
        {
            icon: <Serv07 />,
            title: "E-commerce SEO",
            txt: "We optimize your product pages and categories to help boost online sales and drive conversions through organic search results.",
        },
        {
            icon: <Serv09 />,
            title: "GMB Management",
            txt: "We optimize and manage your GMB profile to ensure your business stands out in local searches. From updating key information to managing reviews, we help you attract more customers and improve your local visibility.",
        },



    ]
}



export const processlp = {
    title: "Getting You Ranked in 5 Simple Steps",
    txt: "Our local SEO experts don’t wait for results they create them.",
    processlpItem: [
        {
            title: "Onboarding ",
            txt: "We start by getting to know your business, your competition, and your customers. This helps us create a custom SEO plan just for you."
        },
        {
            title: "Website Audit",
            txt: "We check your website to see how it’s doing. We then make sure it’s fast, easy to use, and ready for Google to love it."
        },
        {
            title: "Content Optimization",
            txt: "We update your website’s content, making sure it has the right words (keywords) that will help you rank higher on Google and attract the right visitors."
        },
        {
            title: "Building Local Authority",
            txt: "We set up and improve your Google Business Profile, add your business to important local listings, and get quality links to boost your online reputation."
        },
        {
            title: "Reporting & Ongoing Improvements",
            txt: "Every month, we send you progress reports showing how well your website is doing; like how much traffic you’re getting, where you rank, and what we can improve next."
        },
    ]

}

// Pricing
export const PriceData = {
    subtitle: "Local SEO Packages",
    title: "Pick a Plan That Puts Your Business on the Map",
    desc: "Ready for more traffic, more leads, and more revenue? Our SEO plans are built for businesses like yours, whether local or global. Let’s make it happen!",
    PriceItem: [
        {
            bgColor: "#7635FF",
            packagename: "Basic Package",
            price: "399",
            txt: "Designed for small businesses or startups looking to establish a foundation in SEO.",
            bodyPoints: [
                {
                    title: "Setup",
                    points: [
                        "Website Sitemap",
                        "Check for SEO Scope",
                        "Custom 404 Page Setup / Nofollow Link Checkup",
                    ]
                },
                {
                    title: "Pages & Keywords",
                    points: [
                        "Up to 5 pages optimized",
                        "Focused Keywords: 5",
                    ]
                },
                {
                    title: "On-page SEO",
                    points: [
                        "Web Content Optimization",
                        "URL Structure Improvements",
                        "Meta Tags (Title, Description, Header Tags)",
                        "Image Alt Tags and Optimization: 5 images",
                    ]
                },
                {
                    title: "Technical Optimization",
                    points: [
                        "Fixing Crawl Errors",
                        "Mobile-first Optimization",
                        "Page Speed Optimization",
                        "Core Web Vitals Improvements",
                        "Schema Markup Implementation",
                    ]
                },
                {
                    title: "Progress Reporting",
                    points: [
                        "Basic Monthly Progress Reports",
                    ]
                }
            ]
        },
        {
            bgColor: "#FF6987",
            packagename: "Growth Package",
            price: "999",
            txt: "Ideal for businesses aiming to grow their organic reach and improve conversions.",
            bodyPoints: [
                {
                    title: "Setup",
                    points: [
                        "Website Sitemap",
                        "Check for SEO Scope",
                        "Custom 404 Page Setup / Nofollow Link Checkup",
                    ]
                },
                {
                    title: "Pages",
                    points: [
                        "Up to 10 pages optimized",
                    ]
                },
                {
                    title: "Keyword Research",
                    points: [
                        "Focused Keywords: 10",
                        "Keyphrase Optimization: 5",
                    ]
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
                    ]
                },
                {
                    title: "Technical Optimization",
                    points: [
                        "Fixing Crawl Errors",
                        "Mobile-first Optimization",
                        "Page Speed Optimization",
                        "Core Web Vitals Improvements",
                        "Schema Markup Implementation",
                    ]
                },
                {
                    title: "Tracking & Analytics",
                    points: [
                        "Google Analytics Setup",
                        "Basic Conversion Tracking",
                        "Google Search Console Setup",
                    ]
                },
                {
                    title: "Progress Reporting",
                    points: [
                        "Google Analytics Reports",
                        "Monthly Progress Reports with Recommendations",
                    ]
                },
                {
                    title: "Account Management",
                    points: [
                        "Dedicated Account Manager",
                        "1-Hour Free Consultation (Per Month)",
                    ]
                }
            ]
        },
        {
            bgColor: "#9AFF35",
            packagename: "Premium Package",
            price: "1850",
            txt: "Best suited for businesses seeking comprehensive SEO strategies and advanced tracking.",
            bodyPoints: [
                {
                    title: "Setup",
                    points: [
                        "Website Sitemap",
                        "Check for SEO Scope",
                        "Custom 404 Page Setup / Nofollow Link Checkup",
                    ]
                },
                {
                    title: "Pages",
                    points: [
                        "Up to 15 pages optimized",
                    ]
                },
                {
                    title: "Keyword Research",
                    points: [
                        "Focused Keywords: 15",
                        "Keyphrase Optimization: 10",
                    ]
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
                    ]
                },
                {
                    title: "Technical Optimization",
                    points: [
                        "Fixing Crawl Errors",
                        "Mobile - first Optimization",
                        "Page Speed Optimization",
                        "Core Web Vitals Improvements",
                        "Schema Markup Implementation",
                    ]
                },
                {
                    title: "Tracking & Analytics",
                    points: [
                        "Google Analytics Setup",
                        "Google Search Console Setup",
                        "Basic Conversion Tracking",
                        "Full - Funnel Conversion Tracking",
                    ]
                },
                {
                    title: "Progress Reporting",
                    points: [
                        "Business Intelligence Dashboard",
                    ]
                },
                {
                    title: "Account Management",
                    points: [
                        "Dedicated Account Manager",
                        "2-Hour Free Consultation (Per Month)",
                    ]
                }
            ]
        }
    ]
};


// CTA  01
import ImgBg1 from "media/landing/seo3/ctaBg1.webp"
export const CtaData = {
    title: (<>Claim your <span>FREE SEO</span> strategy session worth <span>$300</span> SEO now and start ranking!</>),
    img: ImgBg1.src,
    btntxt: "Schedule a Meeting"
}

// Main Services

import Service01 from "media/landing/seo3/service01.webp"
import Service02 from "media/landing/seo3/service02.webp"
import Service03 from "media/landing/seo3/service03.webp"
import Service04 from "media/landing/seo3/service04.webp"
export const dataService = [
    {
        title: "Google My Business Optimization",
        txt: (<>
            <p>We start by claiming and verifying your Google My Business profile. This ensures your business shows up in local search results and on Google Maps. We complete your profile with your business name, address, phone number, and services, optimizing it for search engines. Regular posts, responding to questions, and managing reviews help keep your listing active and engaging.</p>
        </>),
        img: Service01.src,
    },
    {
        title: "Local Citations",
        txt: (<>
            <p>NAP consistency is key to local SEO. We ensure your business information is accurate and consistent across all online directories and local platforms. We check for discrepancies and fix them, submitting your details to trusted directories. This helps Google trust your business and rank it higher.</p>
        </>),
        img: Service02.src,
    },
    {
        title: "On-Page SEO",
        txt: (<>
            <p>We optimize your website by using location-based keywords in key areas like title tags, meta descriptions, and URLs. Through local content creation, such as city-specific pages, we target the right customers in your area. We also add schema markup and optimize Google Maps integration to ensure search engines understand your location and services.</p>
        </>),
        img: Service03.src,
    },
    {
        title: "Online Reviews & Reputation Management",
        txt: (<>
            <p>We focus on building a strong online reputation by encouraging customers to leave reviews, especially on Google. We monitor and respond to reviews, handling both positive and negative feedback professionally. By showcasing customer testimonials and addressing concerns, we help increase your business’s credibility and visibility in local search results.</p>
        </>),
        img: Service04.src,
    },

]

//Testimonials
import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity } from "@/src/app/app-constants";
export const TestimonialData = {
    subtitle: "Testimonials",
    title: "No Lies, Just Clients with Smiles!",
    desc: "",
    Testslider: [
        {
            txt: "We were struggling to get traffic from Google, and our website wasn’t showing up in local searches. After working with this team, we’ve noticed a steady improvement in our rankings. It’s not an overnight miracle, but we’re definitely getting more calls and inquiries from people nearby. Definitely worth the investment.",
            icon: <ClutchLogo />,
            namee: "Jessica H.",
            job: "Hair Salon",
        },
        {
            txt: "We’ve been working with this team for a few months now, and it’s clear the effort they put in is paying off. Our site is showing up in more local searches, and we’re seeing a steady stream of new customers who found us through Google. They were easy to work with and explained everything along the way.",
            icon: <TrustpilotLogo />,
            namee: "Rachel S.",
            job: "Local Bakery",
        },
        {
            txt: "SEO takes time, and these guys are straightforward about that. They helped us clean up our website and optimize it for local searches. While the results didn’t happen overnight, we’ve definitely seen a gradual increase in local traffic and inquiries. It’s not magic, just hard work that pays off over time.",
            icon: <GoogleLogo />,
            namee: "Mike R.",
            job: "Auto Repair Shop",
        },
    ]
}

// Contact 
import IMGBG from "media/landing/seo3/contactBg.webp"
export const ContactData = {
    subtitle: "Get In Touch",
    title: (<>Don’t Wait to Be Found, <br />Make It Happen With Our Local SEO Services.</>),
    desc: "Fill out the form and let’s make sure your website is the first thing customers see when they search locally.",
    bgImg: IMGBG.src
}
