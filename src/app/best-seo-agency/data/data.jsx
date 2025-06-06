import IMG from "@/public/landing/seo/ctaBg.webp"
export const StateCounter = {
    subtitle: "",
    title: (<>SEO That Works So Well,<br /> We Should Probably Keep It a Secret</>),
    desc: (<>
        <p><i>(But we won’t, because we like making our clients rich.)</i></p>
        <p>We believe you should actually see the value of every dollar you invest. That means smarter strategies, better results, and no overpriced fluff.</p>
        <p>Why pay more for the same old tactics? when you get premium SEO without the premium price tag at Infiniti Digital. Our strategies are built around:</p>
        <ul className="ContentUl">
            <li><CheckedIcon />Your industry</li>
            <li><CheckedIcon />Your brand</li>
            <li><CheckedIcon />Your business goals</li>
        </ul>
        <p>Whether you’re targeting <Link href="/local-seo-service" className="colorGray">local SEO</Link> to dominate your area, <Link href="/nationwide-seo-service" className="colorGray">nationwide SEO</Link> to expand across the country, or global SEO to reach customers worldwide, we have the right approach for you.</p>
        <p>No wasted money, no useless techniques! just smart SEO that helps your business grow. Better value, better results, and a team that actually cares.</p>

    </>),
    img: IMG.src,
    btntxt: "Our Affordable SEO Packages",
    stateItem: [
        {
            numbers: "1500+",
            namee: "Client Working Globally"
        },
        {
            numbers: "2M+",
            namee: "Qualified Leads Delivered"
        }, {
            numbers: "94%",
            namee: "Client Retention Rate"
        }
    ]
}
import CtaImg from "media/landing/smm/cta.webp"
export const CtaData = {
    title: "Your competitors are still praying for better rankings.",
    txt: "We’re over here making it happen. Come join the winners.",
    img: CtaImg.src,
    SeoPages: true,
}

export const WhyChooseData = {
    subtitle: "",
    title: "Why Choose Us ",
    txt: (<><i><Link href="/search-engine-optimization-services" className="colorGray">Search Engine Optimization</Link> that leaves your competitors in the dust, locally or globally.</i></>),
    WhyChooseItem: [
        {
            title: "A Proven Track Record of Success",
            txt: "We’ve helped businesses at every stage of growth, from local startups to global leaders, achieve their SEO goals. Our results speak for themselves, with countless brands seeing significant improvements in traffic, conversions, and revenue because Infiniti Digital knows the game and plays it better than anyone else."
        },
        {
            title: "Custom SEO Plans That Deliver Big Results",
            txt: "We don’t do “generic.” We create custom SEO plans that are as unique as your business. We take the time to actually understand what you do, then build a strategy that makes your competitors sweat. Whether that’s more traffic, more sales, or both. With Infiniti Digital, you’re not getting a basic plan, you’re getting the real deal that actually works."

        },
        {
            title: "SEO Experts Who Know What Works",
            txt: (<>
                Our <Link href="/seo-service" className="colorBlack">SEO experts</Link> don’t wait for the algorithm to change, we see it coming and adjust faster than you can say “rankings.” It’s not about being reactive; it’s about being proactive. Want a cherry on top? You’ll never be left wondering what’s happening. We’re transparent, and keep you updated with real-time results.
            </>)
        },
        {
            title: "A Team Fully Dedicated to Your Success",
            txt: "When you hire us, you’re not just another account on our roster, you’re our priority! We don’t just stop at ‘good enough’ but push further, going the extra mile to make sure you’re crushing it every step of the way. We’re obsessed with your success, and don’t settle for anything less than the best seo results. "
        }
    ]
}

//Services
export const ServicesData = {
    subtitle: "",
    title: (<>Services at Our SEO Agency <br />That Are Actually Worth Your Time (And Money)</>),
    desc: "Still think SEO is just optional? That’s adorable, but it’s also why you’re getting left behind. We don’t just slap some keywords on your site and hope for the best. We come at you with the real deal. ",
    SeoPages: true,
    ServicesItem: [
        {
            title: (<>Keyword Research <br />& Strategy</>),
            txt: "We find the best keywords that will bring real customers to your site, not just random clicks. Our strategy helps you rank for the most important terms and drive the right traffic.",
            url: "#",
        },
        {
            title: (<>Link <br />Building</>),
            txt: "Getting good backlinks is key to improving your website’s authority and ranking. We get trusted links from respected websites, boosting your online visibility and credibility with Google.",
            url: "#",
        },
        {
            title: (<>Technical <br />SEO</>),
            txt: "Website speed, mobile friendliness, and proper indexing are essential for top performance. We fix any technical issues that slow down your site and ensure it runs smoothly.",
            url: "#",
        },
        {
            title: (<>Local<br />SEO</>),
            txt: "Be seen by customers in your area through local search results and Google Maps. Our local SEO helps you stand out so nearby customers can easily find and contact you.",
            url: "#",
        },
        {
            title: (<>On-Page<br />SEO</>),
            txt: "We optimize your website’s content, headings, and meta tags to make it easier for search engines to understand and rank your site. This improves both rankings and user experience.",
            url: "#",
        },
        {
            title: (<>Entity<br /> SEO</>),
            txt: "We strengthen your site’s authority by making sure it’s seen as an expert in your field, using structured data and topic relevance to help you rank for a wider range of searches.",
            url: "#",
        },
        {
            title: (<>Search Generative<br />Experience</>),
            txt: "Google’s AI search updates can affect your rankings. We keep up with the changes and adjust your site so it stays visible and competitive in search results.",
            url: "#",
        },
        {
            title: (<>E-commerce<br />SEO</>),
            txt: "We optimize your product pages and categories to help boost online sales and drive conversions through organic search results.",
            url: "#",
        },


    ]
}
// Pricing
export const PriceData = {
    subtitle: "",
    title: (<>Other agencies charge you for ‘results.’<br /> We deliver <i>profit.</i></>),
    desc: "",
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

//Awards
import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity, CheckedIcon } from "@/src/app/app-constants";
export const AwardsPoints = {
    subtitle: "Awards & Recognitions",
    title: "Celebrating Excellence, Innovation, and Results",
    desc: "Our awards and recognitions reflect our clients’ trust in us and our unwavering commitment to delivering results. At Infiniti Digital, we don’t just aim for success—we earn it.",
    Awardslides: [
        {
            txt: "Infiniti Digital changed our website completely. Traffic and sales went up fast, and they kept us updated the whole time. They really know SEO!",
            icon: < ClutchLogo />,
            namee: "Jessica H.",
            job: "Online Store Owner",
            color: "#DFFFBF",

        },
        {
            txt: "We’ve tried other SEO companies, but Infiniti Digital actually got results. Our rankings are up and we’re finally seeing more sales. They do what they say!",
            icon: <TrustpilotLogo />,
            namee: "David R.",
            job: "Small Business Owner",
            color: "#E0F0FF",
        },
        {
            txt: "Our search rankings have improved and so have our leads. Totally worth it!",
            icon: <GoogleLogo />,
            namee: "Emma L.",
            job: "Local Business Owner",
            color: "#FFCDD7",
        },
        {
            txt: "Thanks to Infiniti Digital, we went from invisible on Google to ranking on page one for our top keywords. Their team knows exactly how to optimize for long-term success. Best SEO investment we’ve made!!!",
            icon: <Forbes />,
            namee: "Samantha P.",
            job: "Marketing Director",
            color: "#DFFFBF",

        },
        {
            txt: "Infiniti Digital’s SEO strategies helped us outrank competitors and bring in a steady flow of qualified traffic. Their insights, execution, and transparency set them apart. Highly effective and worth every penny.",
            icon: <TrustpilotLogo />,
            namee: "Michael R.",
            job: "SaaS Founder",
            color: "#E0F0FF",
        },
        {
            txt: "Infiniti Digital took our website from struggling to ranking on page one for multiple high-value keywords. Our organic traffic has grown steadily, and we’re seeing more leads and sales than ever before. Truly an expert team!",
            icon: <Upcity />,
            namee: "Lisa M.",
            job: "Small Business Owner",
            color: "#FFCDD7",
        },

    ]
}



export const processlp = {
    subtitle: "Our Process",
    title: "Our 6 Step SEO Process ",
    txt: (<>Ensures you rank like a boss,<br /> while others are still figuring out keywords.</>),
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

export const talkData = {
    title: (<>Everyone’s got an SEO “strategy,” <br />but ours actually works</>),
    txt: (<></>),
    formtitle: "Your rankings are fine….. for now.",
    SeoPages: true,
}



// Contact 
import IMGBG from "media/landing/seo/contactBg.webp"
import Link from "next/link"
export const ContactData = {
    subtitle: "Get In Touch",
    title: (<>Still trusting that SEO Company from last year?</>),
    desc: "Hope you’re not in too deep. Let’s fix this.",
    bgImg: IMGBG.src,
    btntxt: "Submit",
    SeoPages: true,
}