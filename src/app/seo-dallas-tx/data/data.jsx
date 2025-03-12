
//Services
import { Serv01, Serv02, Serv03, Serv04, Serv05, Serv06, Serv07, Serv08, Serv09 } from "@/src/app/app-constants";

export const ServicesData = {
    subtitle: "",
    title: (<>Dallas SEO Services <br/>
        That Drive Real Business Growth
        </>),
    desc: "",
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
            title: "Organic Shopping",
            txt: "We improve your visibility in Google Shopping without relying on expensive ads. Our strategies help you get more organic traffic and sales.",
        },

    ]
}



export const processlp = {
    title: "Dallas SEO Agency's Ranking Process",
    txt: "We follow a five steps SEO process to get your business to the top of search results in Dallas.",
    processlpItem: [
        {
            title: "Onboarding & Goal Setting",
            txt: "We start by getting to know your business, your competition, and your customers. This helps us create a custom SEO plan just for you."
        },
        {
            title: "Website Audit & Keyword Research",
            txt: "We analyze your website’s performance, identify technical issues, and research high-impact keywords that drive local traffic."
        },
        {
            title: "On-Page & Technical Optimization",
            txt: "We optimize site structure, content, metadata, and speed while fixing technical issues to improve search engine visibility."
        },
        {
            title: "Content & Link Building Strategy",
            txt: "We create high-quality, engaging content and build authoritative backlinks to boost rankings and establish your brand’s credibility."
        },
        {
            title: "Tracking, Reporting & Continuous Growth",
            txt: "We monitor your rankings, analyze performance data, and refine our strategy to keep your business ahead of the competition."
        },
    ]

}



// Pricing
export const PriceData = {
    subtitle: "",
    title: "SEO Packages to Dominate Search Results in Dallas, TX",
    desc: "We ensure you get the most out of every dollar; premium strategies, expert execution, and real business growth.",
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


// Why Choose Us
export const ChooseUsData = {
    subtitle: "",
    title: "Why We're the Right Dallas SEO Company for You",
    desc: "Businesses don’t gamble with SEO in Dallas, they hire us!",
    Content1: [
        {
            title: "More Customers",
            txt: "Our SEO service in Dallas ensures your business appears in front of potential customers actively searching for your products or services, driving high quality traffic to your site."
        },
        {
            title: "Better ROI",
            txt: "We focus on cost-effective strategies that maximize your marketing budget, delivering higher conversions and more revenue without unnecessary ad spend."
        }
    ],
    Content2: [
        {
            title: "Local Focus",
            txt: "As an SEO company in Dallas, we understand the local market, competition, and search trends, helping your business stand out in the area. "
        }
    ],
    Content3: [
        {
            title: "Transparent Reporting",
            txt: "We provide easy-to-understand reports with key metrics, so you always know how your SEO is performing and where your investment is going."
        },
        {
            title: "Sustainable Growth",
            txt: "Our strategies focus on sustainable rankings and continuous optimization, ensuring your business maintains its position and stays ahead in search results."
        }
    ]

}

// FAQs


export const FAQsData = {
    subtitle: "FAQs",
    title: "Frequently Asked Question?",

    Fqaslist: [
        {
            title: "What services does Infiniti Digital offer ",
            txt: "Infiniti Digital specializes in a comprehensive suite of digital marketing and development solutions. Our offerings include search engine optimization (SEO), social media marketing, mobile app development, web design, and content marketing. Every service is customized to help your business succeed and stand out."
        },
        {
            title: "How does Infiniti Digital ensure results for its clients?",
            txt: "We take a strategic, data-driven approach to deliver measurable outcomes. Infiniti Digital begins by analyzing your business objectives and audience. With tailored strategies, ongoing refinements, and transparent progress reports, we ensure each campaign drives the desired results."
        },
        {
            title: "Can Infiniti Digital handle projects for small and large businesses? ",
            txt: "Yes, Infiniti Digital works with companies of all sizes, from startups to global enterprises. Our flexible services are designed to scale with your needs, whether you’re seeking a foundational digital marketing plan or an advanced strategy for sustained growth."
        },
        {
            title: "What industries does Infiniti Digital specialize in? ",
            txt: "Infiniti Digital serves various industries, including retail, technology, healthcare, and education. Our team draws on deep experience to create targeted strategies tailored to the needs of each sector, ensuring impactful results for businesses of any niche."
        },
        {
            title: "How can I get started with Infiniti Digital?",
            txt: "Getting started is simple. Contact us via our website or call to arrange a consultation. We’ll take the time to understand your objectives and challenges, then design a detailed plan to elevate your brand’s digital presence and drive success."
        }
    ]

}