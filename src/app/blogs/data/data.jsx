//Banner
import { auth } from "google-auth-library";
import BannerPoster from "media/blogs/posterImg.webp";

export const BannerData = {
  subtitle: "Our Blogs",
  title: "Amplify Your Digital Impact, Effortlessly",
  desc: "your budget is tight? We think it’s just right! At Infiniti Digital, we turn every dollar into results with paid marketing strategies that pack a punch. No fluff, no waste—just campaigns that drive clicks, conversions, and smiles.",
  video: "#",
  BannerPoster: BannerPoster.src,
};
// Blgos
import IMG01 from "media/blogs/posts/blog01.webp";
import Blog1 from "media/blogs/posts/blog1.webp";
import IMG02 from "media/blogs/posts/blog02.webp";
import IMG03 from "media/blogs/posts/blog03.webp";
import IMG04 from "media/blogs/posts/blog04.webp";
import IMG05 from "media/blogs/posts/blog05.webp";
import IMG06 from "media/blogs/posts/blog06.webp";
import IMG07 from "media/blogs/posts/blog07.webp";
import IMG08 from "media/blogs/posts/blog08.webp";
import IMG09 from "media/blogs/posts/blog09.webp";
import IMG10 from "media/blogs/posts/blog10.webp";
import IMG11 from "media/blogs/posts/blog11.webp";
import IMG12 from "media/blogs/posts/blog12.webp";
import IMG13 from "media/blogs/posts/blog13.webp";
import IMG14 from "media/blogs/posts/blog14.webp";
import IMG15 from "media/blogs/posts/blog15.webp";
import IMG16 from "media/blogs/posts/blog16.webp";
import IMG17 from "media/blogs/posts/blog17.webp";
import IMG18 from "media/blogs/posts/blog18.webp";
import IMG19 from "media/blogs/posts/blog19.webp";
import Glossary from "media/blogs/posts/Glossary.webp";
import Checker from "media/blogs/posts/Checker.webp";

export const BlgosData = {
  subtitle: "Our Blogs",
  title: "Insights and Inspiration",
  desc: "Stay ahead of the curve with expert tips and trends. Our blogs deliver the latest on SEO, social media, web design, and more to fuel your growth.",
  BlogsData: [
    {
      title:
        "Get more calls in Dallas as a plumber with Local SEO",
      date: "10 July, 2025",
      txt: "If you’re a plumber and your phone isn’t ringing steadily, you’re not dealing with a slow season, you’re dealing with a visibility problem.",
      category: "SEO",
      img: IMG19.src,
      link: "/local-seo-for-plumbers-located-in-dallas",
      author: "brielle-delmar",
    },
    {
      title:
        "Dallas SEO Strategies in 2025",
      date: "01 July, 2025",
      txt: "As we enter the second half of 2025, SEO strategies in Dallas are evolving faster than ever. Fueled by AI, voice search, and increasingly sophisticated search engine algorithms,",
      category: "SEO",
      img: IMG18.src,
      link: "/dallas-seo-strategies",
      author: "brielle-delmar",
    },
    {
      title:
        "How A Chicago SEO Agency Tracks & Reports Your SEO Performance",
      date: "04 Jun, 2025",
      txt: "Have you invested time, money, and energy into improving your website’s SEO performance, yet skeptical executives and stakeholders demand concrete proof? ",
      category: "SEO",
      img: IMG17.src,
      link: "/how-chicago-seo-agency-track-and-report-seo-performance",
      author: "lily-chen",
    },
    {
      title:
        "How To Choose The Right Mobile App Development Company For Your Project",
      date: "28 May, 2025",
      txt: "Finding reliable mobile app development services for your mobile application project can be pretty tricky if every app development firm out there is promising positive results.",
      category: "Mobile App",
      img: IMG16.src,
      link: "/how-to-choose-the-right-mobile-app-development-company",
      author: "john-sullivan",
    },
    {
      title:
        "Infiniti Digital Vs. In-House Teams",
      date: "20 May, 2025",
      txt: "When businesses consider their organic growth, they often face a fork in the road: should they hire an seo agency, or build an in-house team?",
      category: "SEO",
      img: IMG15.src,
      link: "/infiniti-digital-vs-inhouse-seo-teams",
      author: "brielle-delmar",
    },
    {
      title:
        "How Technical SEO Experts in Chicago Optimize Websites That Google Loves",
      date: "15 May, 2025",
      txt: "Does it frustrate you when you type your own website address into Google and it doesn’t pop up in results? Or when your pages load so slowly that visitors leave your website before they even see your homepage? You’re not alone.",
      category: "SEO",
      img: IMG14.src,
      link: "/how-technical-seo-experts-in-chicago-optimize-websites",
      author: "lily-chen",
    },
    {
      title:
        "How To Rank #1 With Chicago’s Local SEO Services",
      date: "12 May, 2025",
      txt: "Have you ever searched for ‘local SEO services Chicago’ on your phone, only to find SEO agencies located miles away or closed down years ago? If your business doesn’t appear when local customers search, you’re leaving money on the table.",
      category: "SEO",
      img: IMG13.src,
      link: "/how-to-rank-high-with-chicago-local-seo-services",
      author: "lily-chen",
    },
    {
      title:
        "The Definitive Guide To SEO Services in Chicago",
      date: "10 May, 2025",
      txt: "Have you ever come across excessive SEO jargon and promises of comprehensive solutions from different SEO services in Chicago? Perhaps you’ve signed up for an SEO audit only to receive a 50‑page PDF you can’t understand,",
      category: "SEO",
      img: IMG12.src,
      link: "/definitive-guide-to-seo-services-in-chicago",
      author: "lily-chen",
    },
    {
      title:
        "How to Hire the Best SEO Services In Chicago for Your Business",
      date: "05 May, 2025",
      txt: "Are you overwhelmed by the number of SEO services in Chicago vying for your attention? You’re far from alone. Every minute, Google processes almost 6 million searches worldwide, and 22.4% of clicks go to the first page.",
      category: "SEO",
      img: IMG11.src,
      link: "/how-to-hire-the-best-seo-services-in-chicago",
      author: "brielle-delmar",
    },
    {
      title:
        "How to Choose a Social Media Marketing Company That Delivers Results",
      date: "01 May, 2025",
      txt: "Do you know that social media and search advertising comprised 59% of global ad budgets in 2024, with forecasts projecting it to reach 61% by 2026?",
      category: "SMM",
      img: IMG10.src,
      link: "/7-steps-to-choose-the-right-social-media-marketing-company",
      author: "grace-moore",
    },
    {
      title:
        "Assessing Social Media Advertising Campaigns' Analytics & Reporting",
      date: "29 Apr, 2025",
      txt: "Are you pouring budget into social media ads only to feel like you’re wandering in the dark when measuring social ads performance? You’re not alone.",
      category: "SMM",
      img: IMG09.src,
      link: "/assess-social-media-ad-campaign-analytics-reporting",
      author: "chloe-harris",
    },
    {
      title: "Advanced Targeting Techniques Via Paid Social Media Marketing",
      date: "28 Apr, 2025",
      txt: "Have you ever felt like you’re spending more on Facebook and Instagram marketing, but getting less in return? You’re not alone.",
      category: "SMM",
      img: IMG08.src,
      link: "/effective-audience-targeting-via-paid-social-media-marketing",
      author: "chloe-harris",
    },
    {
      title: "Cross-Platform Content Strategy With SMM Services",
      date: "25 Apr, 2025",
      txt: "Do you know that expert social media marketing services can be a game-changer in creating social media content that lands with your audience?",
      category: "SMM",
      img: IMG07.src,
      link: "/cohesive-cross-platform-social-media-marketing-services",
      author: "chloe-harris",
    },
    {
      title: "How to Maximize ROI with Paid Social Media Marketing Services",
      date: "24 Apr, 2025",
      txt: "As a diligent online business owner, have you ever felt frustrated watching your paid social ad costs climb yet see a stagnant ROI? You’re not alone.",
      category: "SMM",
      img: IMG06.src,
      link: "/how-to-maximize-roi-with-paid-smm-services",
      author: "grace-moore",
    },
    {
      title: "Local Business SEO Strategy",
      date: "22 Apr, 2025",
      txt: "Local SEO is essential for businesses aiming to connect with customers in their immediate geographic area.",
      category: "SEO",
      img: IMG05.src,
      link: "/local-business-seo-strategy",
      author: "lily-chen",
    },
    {
      title: "How To Rank In Local Search",
      date: "21 Apr, 2025",
      txt: "If you run a local business, showing up on Google when people search for your services is very important. Whether you have a shop, a restaurant, or offer services in your area, local search helps customers find you faster.",
      category: "SEO",
      img: IMG04.src,
      link: "/how-to-rank-in-local-search",
      author: "brielle-delmar",
    },
    {
      title: "Why Small Businesses Need Local SEO",
      date: "25 Mar, 2025",
      txt: "Read this blog and find out about how local SEO can be the missing piece for small businesses to higher online visibility and growth.",
      category: "SEO",
      img: IMG03.src,
      link: "/why-small-businesses-need-local-seo",
      author: "brielle-delmar",
    },
    {
      title: "Local SEO vs. Traditional SEO Which One Drives More Sales?",
      date: "24 Mar, 2025",
      txt: "Stuck between local or traditional SEO and unable to find which one can drive more revenue to your business? Read this blog and make an informed decision.",
      category: "SEO",
      img: IMG02.src,
      link: "/seo-vs-local-seo",
      author: "brielle-delmar",
    },
    {
      title: "What is Local SEO and Why is it Important in 2025?",
      date: "20 Mar, 2025",
      txt: "Get better rankings on Google with our Texas SEO Company. As SEO experts in Texas we improve search rankings, traffic, and drive in more revenue.",
      category: "SEO",
      img: IMG01.src,
      link: "/what-is-local-seo",
      author: "brielle-delmar",
    },
  ],
};

// Lead Magnets

export const LeadData = {
  subtitle: "Growth & Strategy Hub",
  title: "Free? Yes. Worth It? 1000%",
  desc: "This is free, but it’s worth a lot! consider it our little gift to help you succeed.",
  BlogsData: [
    {
      title: "SEO Glossary: 400+ SEO Terms Explained",
      date: "19 Mar, 2025",
      txt: "Check out this HUGE list of the most important SEO terms, jargon, abbreviations to help you better understand SEO.",
      category: "SEO",
      img: Glossary.src,
      link: "/seo-glossary",
    },
    {
      title: "Free SEO Score Checker How Strong Is Your Website’s SEO?",
      date: "18 Mar, 2025",
      txt: "Get your website’s SEO score and see how much effort you need to rank higher on SERP. Click on our free SEO score checker and fill the SEO scorecard.",
      category: "SEO",
      img: Checker.src,
      link: "/free-seo-score-checker",
    },
  ],
};
