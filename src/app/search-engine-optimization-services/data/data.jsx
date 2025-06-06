// CTA  01
import ImgBg1 from "media/landing/seo2/ctaBg1.webp"
import Link from "next/link";
export const CtaData01 = {
    title: (<>Get a <span>30 minutes</span> free strategy session with our digital marketing expert worth <span>$300</span></>),
    img: ImgBg1.src,
    SeoPages: true,
}
export const LPServices = {
    title: "Our SEO Services",
    txt: "Everything You Need to Rank & Convert",
    SeoPages: true,
    LPServicesItem: [
        {
            title: "Keyword Research & Strategy",
            txt: "We find the best keywords that will bring real customers to your site, not just random clicks. Our strategy helps you rank for the most important terms and drive the right traffic.",
            btntxt: "Let’s Connect",
        },
        {
            title: "Link Building",
            txt: "Getting good backlinks is key to improving your website’s authority and ranking. We get trusted links from respected websites, boosting your online visibility and credibility with Google.",
            btntxt: "Let’s Connect",
        },
        {
            title: "Technical SEO",
            txt: "Website speed, mobile friendliness, and proper indexing are essential for top performance. We fix any technical issues that slow down your site and ensure it runs smoothly.",
            btntxt: "Let’s Connect",
        },
        {
            title: "Local SEO",
            txt: (<>
                Be seen by customers in your area through local search results and Google Maps. Our <Link href="/local-seo-service" className="colorBlack">local SEO</Link> helps you stand out so nearby customers can easily find and contact you.
            </>),
            btntxt: "Let’s Connect",
        },
        {
            title: "On-Page SEO",
            txt: "We optimize your website’s content, headings, and meta tags to make it easier for search engines to understand and rank your site. This improves both rankings and user experience.",
            btntxt: "Let’s Connect",
        },
        {
            title: "Entity SEO",
            txt: "We strengthen your site’s authority by making sure it's seen as an expert in your field, using structured data and topic relevance to help you rank for a wider range of searches.",
            btntxt: "Let’s Connect",
        }, {
            title: "Search Generative Experience",
            txt: "Google’s AI search updates can affect your rankings. We keep up with the changes and adjust your site so it stays visible and competitive in search results.",
            btntxt: "Let’s Connect",
        },
        {
            title: "E-commerce SEO",
            txt: "We optimize your product pages and categories to help boost online sales and drive conversions through organic search results.",
            btntxt: "Let’s Connect",
        },
        {
            title: "Organic Shopping",
            txt: "We improve your visibility in Google Shopping without relying on expensive ads. Our strategies help you get more organic traffic and sales.",
            btntxt: "Let’s Connect",
        }
    ]
}
export const processlp = {
    subtitle: "Our Process",
    title: (<>Our 6 Step SEO Process Ensures<br /> Your Customers Are Finding<strong><i>You</i></strong> First, Not Your Competitors</>),
    txt: "",
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
    title: "Pick a Plan That Puts Your Business on the Map",
    desc: "Ready for more traffic, more leads, and more revenue? Our SEO plans are built for businesses like yours, whether local or global. Let’s make it happen!",
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
            price: "1999",
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
            price: "2850",
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
    title: "Why Choose Us",
    txt: (<>Because <i>“Near Me”</i> Should Always Mean <i>YOU!</i></>),
    nexttitle: (<>Clicks, Calls, and Customers; <span>Delivered Daily.</span></>),
    nexttxt: (<>
        <p>Did you know a poorly optimized website can silently drain your leads, credibility, and revenue? That’s the harsh reality of weak SEO. But at Infiniti Digital, we don’t let that happen.</p>
        <p>Unlike other <Link href="/local-seo-agency" className="colorGray">local SEO agencies</Link> that slap together cookie-cutter strategies, we develop custom-tailored solutions designed to put your brand ahead, every single time.</p>
        <p>If your traffic isn’t converting, your bounce rates are climbing, or your rankings are slipping, it’s not bad luck, it’s bad SEO. And that’s where we come in. Our data-driven, white-hat strategies are built for real, long-term results.</p>
        <p>With high-intent keyword research, extensive site audits, quick technical fixes, and a powerful content strategy, we don’t just help you rank, we help you dominate.</p>
        <p>If you’re tired of watching competitors outrank you, it’s time to make a move. Hire Infiniti Digital for infinite growth.</p>
    </>),
    btntxt: "Get a Free SEO Audit",
    SeoPages: true,
}