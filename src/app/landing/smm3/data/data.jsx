//Clients
import Client01 from "media/landing/smm3/logos/1.webp";
import Client02 from "media/landing/smm3/logos/2.webp";
import Client03 from "media/landing/smm3/logos/3.webp";
import Client04 from "media/landing/smm3/logos/4.webp";
import Client05 from "media/landing/smm3/logos/5.webp";
import Client06 from "media/landing/smm3/logos/6.webp";
import Client07 from "media/landing/smm3/logos/7.webp";
import Client08 from "media/landing/smm3/logos/8.webp";
import Client09 from "media/landing/smm3/logos/9.webp";
import Client10 from "media/landing/smm3/logos/10.webp";
import Client11 from "media/landing/smm3/logos/11.webp";


export const ClientImages = [
    {
        Img: Client01.src,
    },
    {
        Img: Client02.src,
    },
    {
        Img: Client03.src,
    },
    {
        Img: Client04.src,
    },
    {
        Img: Client05.src,
    },
    {
        Img: Client06.src,
    },
    {
        Img: Client07.src,
    },
    {
        Img: Client08.src,
    },
    {
        Img: Client09.src,
    },
    {
        Img: Client10.src,
    },
    {
        Img: Client11.src,
    },

]


//Testimonials
import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity, CheckedIcon } from "@/src/app/app-constants";
export const TestimonialData = {
    subtitle: "",
    title: "Engagement? Sales? ROI? Yeah, We Do That.",
    desc: "See how we help brands break the cycle of bad marketing.",
    Testslider: [
        {
            txt: "Infiniti Digital has completely transformed our social media presence! Their organic posting strategy keeps our audience engaged with high-quality content that truly reflects our brand. We’ve seen a significant boost in followers and interactions—all without spending a dime on ads. If you need a team that knows how to keep your brand relevant and engaging, Infiniti Digital is the way to go!",
            icon: <ClutchLogo />,
            namee: "Sarah M.",
            job: "Marketing Director",
        },
        {
            txt: "We wasted so much money on poorly targeted ads before working with Infiniti Digital. Their ad setup and management services changed everything! They optimized our audience targeting, crafted compelling ad creatives, and kept our campaigns running efficiently. Now, our cost per lead has dropped, and our ROI has never looked better!",
            icon: <TrustpilotLogo />,
            namee: "James T.",
            job: "E-commerce Business Owner",
        },
        {
            txt: "Infiniti Digital turned our social media ads into a revenue-generating machine! Their conversion campaigns brought us more sales, and a lower ad spend. We went from struggling to get results to hitting our best month ever. If you want ads that actually convert, look no further!",
            icon: <GoogleLogo />,
            namee: "Melissa R.",
            job: "CEO, Fashion Brand",
        },
    ]
}


import { Serv01, Serv02, Serv03, Serv04, Serv05, Serv06, Serv07, Serv08, Serv09 } from "@/src/app/app-constants";

//Services
export const ServicesData = {
    subtitle: "",
    title: "Our Social Media Marketing Services ",
    desc: "Hiring us is the Difference Between Going Viral and Going Broke.",
    ServicesItem: [
        {
            icon: <Serv01 />,
            title: "Meta Advertising Management",
            txt: "We create and optimize high-ROI ad campaigns on Facebook and Instagram, targeting the right audience to maximize reach, conversions, and brand visibility.",
        },
        {
            icon: <Serv02 />,
            title: "Content Creation",
            txt: "We produce scroll-stopping visuals, videos, and copy that capture attention, strengthen brand identity, and keep your audience engaged.",
        },
        {
            icon: <Serv03 />,
            title: "Social Media Management",
            txt: "We handle everything from content creation to posting, engagement, and analytics, ensuring your brand stays active, relevant, and consistently growing on social media.",
        },
        {
            icon: <Serv04 />,
            title: "TikTok Growth Marketing",
            txt: "We help brands grow fast on TikTok with trending content, viral strategies, and targeted ads that boost visibility and engagement. ",
        }
    ]
}

// CTA  01
import ImgBg1 from "media/landing/smm3/ctaBg1.webp"
export const CtaData01 = {
    title: (<>Meta’s Getting Rich Off You, Time to Flip the Script!</>),
    txt: "Connect with our social media advertising consultant, And scale like a pro.",
    img: ImgBg1.src,
}
export const LPServices = {
    title: "Our SEO Services",
    txt: "Everything You Need to Rank & Convert",
    LPServicesItem: [
        {
            title: "Keyword Research & Strategy",
            txt: "We find the best keywords that will bring real customers to your site, not just random clicks. Our strategy helps you rank for the most important terms and drive the right traffic.",
        },
        {
            title: "Link Building",
            txt: "Getting good backlinks is key to improving your website’s authority and ranking. We get trusted links from respected websites, boosting your online visibility and credibility with Google.",
        },
        {
            title: "Technical SEO",
            txt: "Website speed, mobile friendliness, and proper indexing are essential for top performance. We fix any technical issues that slow down your site and ensure it runs smoothly.",
        },
        {
            title: "Local SEO",
            txt: "Be seen by customers in your area through local search results and Google Maps. Our local SEO helps you stand out so nearby customers can easily find and contact you.",

        },
        {
            title: "On-Page SEO",
            txt: "We optimize your website’s content, headings, and meta tags to make it easier for search engines to understand and rank your site. This improves both rankings and user experience.",

        },
        {
            title: "Entity SEO",
            txt: "We strengthen your site’s authority by making sure it's seen as an expert in your field, using structured data and topic relevance to help you rank for a wider range of searches.",

        }, {
            title: "Search Generative Experience",
            txt: "Google’s AI search updates can affect your rankings. We keep up with the changes and adjust your site so it stays visible and competitive in search results.",

        },
        {
            title: "E-commerce SEO",
            txt: "We optimize your product pages and categories to help boost online sales and drive conversions through organic search results.",

        },
        {
            title: "Organic Shopping",
            txt: "We improve your visibility in Google Shopping without relying on expensive ads. Our strategies help you get more organic traffic and sales.",

        }
    ]
}
export const processlp = {
    subtitle: "Our Process",
    title: "Our 6 Step SEO Process Ensures",
    txt: (<>Your Customers Are Finding <strong><i>You</i></strong> First, Not Your Competitors</>),
    processlpItem: [
        {
            title: "Understanding your goals",
            txt: "We start by learning about your business, audience, and objectives. Whether you want more leads, sales, or brand visibility, we tailor our SEO strategy to meet your goals."
        },
        {
            title: "SEO Audit",
            txt: "Next, we analyze your website’s strengths and weaknesses. From technical issues to content gaps, we identify everything that’s holding you back from ranking higher."
        },
        {
            title: "Competitive Analysis",
            txt: "Your competitors are ranking for a reason; we find out why. By studying their strategies, we uncover opportunities to outrank them and drive more traffic to your site."
        },
        {
            title: "On-Page SEO",
            txt: "We optimize everything on your site, from keywords and content to meta tags and internal links. This ensures search engines and users find your pages relevant and valuable."
        },
        {
            title: "Off-Page SEO",
            txt: "Authority matters. We build high-quality backlinks, optimize your online presence, and strengthen your brand’s credibility across the web to boost rankings."
        },
        {
            title: "Reporting & Analysis",
            txt: "SEO is a long game, and we track every move. With detailed reports and insights, we measure progress, refine strategies, and ensure you see continuous growth."
        }
    ]

}

// Pricing
export const PriceData = {
    subtitle: "",
    title: "Social Media Marketing Packages",
    desc: "Posting is easy. Getting results? That’s where we come in, heroically.",
    PriceItem: [
        {
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


export const WhyData = {
    title: "",
    txt: "",
    nexttitle: (<>Stop Running Ads Like It’s 2015<br />
        We Play to <span>Win in 2025.</span></>),
    nexttxt: (<>
        <p>If you’re running ads without seeing real growth, your strategy is broken. The truth? Meta doesn’t care about your ROAS, but we do.</p>
        <p>At Infiniti Digital, we care about one thing: making you more money.</p>
        <h5>What Makes Us Different?</h5>
        <ul className="ContentUl">
            <li><CheckedIcon />Smart Targeting That Converts</li>
            <li><CheckedIcon />Creatives That Stop the Scroll</li>
            <li><CheckedIcon />Data-Driven Optimization</li>
            <li><CheckedIcon />Retargeting That Closes Deals</li>
        </ul>
        <h5>Start Scaling with Infiniti Digital. </h5>
        <p>Your competitors are running better ads, making more sales, and growing while you’re stuck watching. It’s time to change that.</p>
        <p>Higher ROAS. More Customers. Infinite Growth. Let’s Connect!</p>
    </>),
    btntxt: "Schedule a Free Consultation",
}