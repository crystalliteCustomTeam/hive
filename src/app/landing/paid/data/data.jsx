import IMG from "@/public/landing/smm/ctaBg.webp"

export const StateCounter = {
    subtitle: "Infiniti Digital",
    title: "Gets You More Leads & Sales with Expert PPC Campaign Management",
    desc: (<>
        <p>Our PPC agency ensures your campaigns are optimized for maximum conversions. With expert Google Ads management service, we refine targeting, improve ad copy, and optimize your budget to drive high-quality leads and sales. So, stop throwing money at Google, and let’s make it work for you! Your money is too valuable for bad PPC advertising.</p>
    </>),
    img: IMG.src,
    video: "https://player.vimeo.com/progressive_redirect/playback/1039775849/rendition/720p/file.mp4?loc=external&log_user=0&signature=a3b56bd23809e03050e6e0231513dfcf16a223d4eb6d444c9d540ce7889002f4",
}
export const CtaData = {
    title: "Talk To Our Experts",
    txt: "Contact us without obligation by email or phone and secure your free consultation.",
}

//Services
export const ServicesData = {
    subtitle: "",
    title: "Our Paid Marketing Services ",
    desc: "Oh Look, Another Useless Click! Said No Client of Ours Ever.",
    ServicesItem: [
        {
            title: (<>Google Ads <br />Management</>),
            txt: (<>
                <p>We help you get more clicks and sales with our Google Ads campaigns management services. Our team will set up ads that target the right audience based on their interests and search behavior. We ensure your budget is spent wisely by continually optimizing the campaigns for better performance.</p>
            </>),
        },
        {
            title: (<>PPC <br /> Retargeting/Remarketing</>),
            txt: (<>
                <p>We help you reconnect with visitors who came to your website but didn’t make a purchase or take action. Through retargeting ads, we show these visitors ads as they browse other sites or social media. This increases the chance they’ll come back and complete the action you want, such as making a purchase or becoming a lead. </p>
            </>),

        },
        {
            title: (<>Display &  <br />Programmatic Advertising</>),
            txt: (<>
                <p>With display and programmatic advertising, we help you show your ads on a wide range of websites where your target audience spends time. By using smart algorithms, we place your ads where they’ll get the most visibility and generate the highest chances of conversion, all while staying within your budget.</p>
            </>),

        },
        {
            title: (<>PPC Audit & <br />Consulting</>),
            txt: (<>
                <p>If your PPC campaigns aren’t performing as expected, our PPC audit service provides a thorough review of your ads and strategy. We identify areas that need improvement, such as targeting, budget allocation, and ad copy, and give you clear recommendations for campaign optimization to achieve better results.</p>
            </>),

        },
        {
            title: (<>Performance <br />Max Campaigns</>),
            txt: (<>
                <p>We create compelling, high-converting ads for PMax campaigns using Google’s AI to reach the right audience at the right time. By continuously testing and optimizing creatives, we ensure your ads drive maximum engagement, lower costs, and higher ROAS.</p>
            </>),

        },
        {
            title: (<>Landing Page<br />Optimization</>),
            txt: (<>
                <p>We help improve your landing pages to make them more user-friendly by optimizing elements like design, content, and CTAs, we ensure your landing page drives higher conversions. The better your landing page, the more visitors will turn into paying customers.</p>
            </>),
        },

    ]
}
export const StateCounterPoints = {
    subtitle: "",
    title: "Google Ads Setup & Management Service",
    desc: "Get the most out of Google Ads with our expert setup and management services. We create high-converting campaigns, optimize ad spend, and drive quality leads to grow your business efficiently. Let us handle the strategy while you focus on scaling!",
    stateItem: [
        {
            numbers: "-20%",
            namee: "Decrease in Cost-Per-Lead"
        },
        {
            numbers: "+30%",
            namee: "Increase in eCommerce Sales"
        }, {
            numbers: "+40%",
            namee: "Increase in Click Through Rate"
        }, {
            numbers: "-35%",
            namee: "Reduction in Cost Per Click"
        }
    ]
}


//Awards
import { ClutchLogo, TrustpilotLogo, GoogleLogo, Forbes, Upcity } from "@/src/app/app-constants";
export const AwardsPoints = {
    subtitle: "",
    title: "Celebrating Excellence, Innovation, and Results",
    desc: "Our awards and recognitions reflect our clients’ trust in us and our unwavering commitment to delivering results. At Infiniti Digital, we don’t just aim for success—we earn it.",
    Awardslides: [
        {
            txt: "Running PPC ads for our healthcare practice used to feel like a shot in the dark, but Infiniti Digital turned it all around. Their team helped us target the right leads, and now we’re seeing a steady stream of qualified appointments every month. Their expertise in Google Ads services is unmatched.",
            icon: <ClutchLogo />,
            namee: "Dr.Emily P.",
            job: "Owner of ClearPath Wellness Center",
            color: "#DFFFBF",

        },
        {
            txt: "As a small auto repair shop, getting the right customers was a challenge. Infiniti Digital with PPC campaigns targeted the right local audience and led to more calls and bookings. We’ve definitely seen growth.",
            icon: <TrustpilotLogo />,
            namee: "David.",
            job: "Owner of Speedy Auto Repairs",
            color: "#E0F0FF",
        },
        {
            txt: "Infiniti Digital helped us grow our online coaching business by optimizing our PPC. We’ve seen an increase in quality leads and new sign-ups for our courses. They truly understand how to run google ads.",
            icon: <GoogleLogo />,
            namee: "Chris W.",
            job: "Founder of Elevate Coaching Academy",
            color: "#FFCDD7",
        },

        {
            txt: "Running PPC ads for our healthcare practice used to feel like a shot in the dark, but Infiniti Digital turned it all around. Their team helped us target the right leads, and now we’re seeing a steady stream of qualified appointments every month. Their expertise in Google Ads services is unmatched.",
            icon: <ClutchLogo />,
            namee: "Dr.Emily P.",
            job: "Owner of ClearPath Wellness Center",
            color: "#DFFFBF",

        },
        {
            txt: "As a small auto repair shop, getting the right customers was a challenge. Infiniti Digital with PPC campaigns targeted the right local audience and led to more calls and bookings. We’ve definitely seen growth.",
            icon: <TrustpilotLogo />,
            namee: "David.",
            job: "Owner of Speedy Auto Repairs",
            color: "#E0F0FF",
        },
        {
            txt: "Infiniti Digital helped us grow our online coaching business by optimizing our PPC. We’ve seen an increase in quality leads and new sign-ups for our courses. They truly understand how to run google ads.",
            icon: <GoogleLogo />,
            namee: "Chris W.",
            job: "Founder of Elevate Coaching Academy",
            color: "#FFCDD7",

        },

    ]
}

import Img01 from "@/public/landing/paid/Img01.webp"
import { CheckedIcon } from "@/src/app/app-constants"
export const SimpleContent = {
    subtitle: "",
    title: "What’s Included in Our PPC Package",
    desc: (<>
        <ul className="ContentUl">
            <li><CheckedIcon />Bid management</li>
            <li><CheckedIcon />Landing page optimization</li>
            <li><CheckedIcon />Cost and performance analysis</li>
            <li><CheckedIcon />Geo-targeting improvements</li>
            <li><CheckedIcon />Conversion tracking set up</li>
            <li><CheckedIcon />Ad groups management</li>
            <li><CheckedIcon />Monthly performance report</li>
            <li><CheckedIcon />Ad placement and targeting adjustments</li>
            <li><CheckedIcon />Negative keywords management</li>
        </ul>
    </>),
    img: Img01.src,
}
// FAQs

export const FAQsData = {
    subtitle: "FAQs",
    title: "Frequently Asked Question",
    Fqaslist: [
        {
            title: "What services does Infiniti Digital offer?",
            txt: "Infiniti Digital specializes in a comprehensive suite of digital marketing and development solutions. Our offerings include search engine optimization (SEO), social media marketing, mobile app development, web design, and content marketing. Every service is customized to help your business succeed and stand out."
        },
        {
            title: "How does Infiniti Digital ensure results for its clients?",
            txt: "We take a strategic, data-driven approach to deliver measurable outcomes. Infiniti Digital begins by analyzing your business objectives and audience. With tailored strategies, ongoing refinements, and transparent progress reports, we ensure each campaign drives the desired results."
        },
        {
            title: "Can Infiniti Digital handle projects for small and large businesses?",
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


// Contact 
import IMGBG from "media/landing/paid/contactBg.webp"

export const ContactData = {
    subtitle: "Get In Touch",
    title: "If Your PPC Strategy Involves “Hoping for the Best,” We Need to Talk.",
    desc: "Ready to launch your Google Ads campaign? Contact Infiniti Digital now, and let's drive real results for your business.",
    bgImg: IMGBG.src
}

export const processlp = {
    subtitle: "Our Process",
    title: (<>Stop Donating to Google<br /> Get a PPC Strategy That Works</>),
    txt: (<>Our Google Ads services are designed to increase ROAS,<br /> because clicks are cute, but sales are better! And we deliver both.</>),
    processlpItem: [
        {
            title: "PPC Setup & Strategy",
            txt: "We begin by setting up your campaigns with a clear strategy. This includes researching your target audience, selecting high-performing keywords, and structuring your ad groups for maximum efficiency."
        },
        {
            title: "Smart Bid & Budget Management",
            txt: "We manage your bids strategically, ensuring you get the most out of your budget. Our team continuously adjusts bids to improve ad performance while keeping costs under control."
        },
        {
            title: "Landing Page Optimization & Conversion Tracking",
            txt: "A great ad is only as good as the page it leads to. We optimize your landing pages for higher conversions and set up tracking systems to monitor and measure every click, lead, and sale."
        },
        {
            title: "Precision Targeting & Negative Keyword Management",
            txt: "We adjust ad placements, geo-targeting, and audience segmentation to reach the right customers. At the same time, we eliminate wasteful spending by managing negative keywords to filter out irrelevant traffic."
        },
        {
            title: "Cost & Performance Analysis",
            txt: "Our team constantly analyzes campaign data to identify opportunities for improvement. We refine targeting, optimize ad placements, and adjust bids to maximize return on ad spend."
        },
        {
            title: "Monthly Reporting & Strategy Adjustments",
            txt: "Every month, we provide a detailed performance report with insights into your PPC results. We use this data to refine strategies, ensuring all campaigns continue to grow and drive better outcomes."
        }
    ]

}
export const talkData = {
    title: (<>Talk to Our <br />PPC Experts</>),
    txt: "If you’re running Google Ads without a plan, that’s just charity work for Google."
}


