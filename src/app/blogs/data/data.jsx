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
import Glossary from "media/blogs/posts/Glossary.webp";
import Checker from "media/blogs/posts/Checker.webp";

export const BlgosData = {
  subtitle: "Our Blogs",
  title: "Insights and Inspiration",
  desc: "Stay ahead of the curve with expert tips and trends. Our blogs deliver the latest on SEO, social media, web design, and more to fuel your growth.",
  BlogsData: [
        {
      title: "Data Driven Social Campaigns Analytics & Reporting With Social Media Advertising",
      date: "29 Apr, 2025",
      txt: "Are you pouring budget into social media ads only to feel like you’re wandering in the dark when measuring social ads performance? You’re not alone.",
      category: "SMM",
      img: IMG09.src,
      link: "/data-driven-social-campaigns-analytics-and-reporting",
      author: "chloe-harris",
    },
    {
      title: "Advanced Targeting Techniques Via Instagram and Facebook Marketing Services",
      date: "28 Apr, 2025",
      txt: "Have you ever felt like you’re spending more on Facebook and Instagram marketing, but getting less in return? You’re not alone.",
      category: "SMM",
      img: IMG08.src,
      link: "/effective-audience-targeting-via-facebook-and-instagram",
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

    {
      title: "Why Does Your App Look Like It’s Stuck in 2010?",
      date: "04 Jan, 2025",
      txt: "Users are ditching outdated apps faster than you can say “uninstall.” We’re here to help you design apps that look sharp, work like magic, and keep people hooked.",
      category: "Mobile App Design",
      img: Blog1.src,
      link: "#",
      author: "brielle-delmar",
    },
    {
      title: "Your Website Isn’t Invisible—It’s Just Lost",
      date: "05 Jan, 2025",
      txt: "You spent time building a beautiful website, but where’s the traffic? Learn how to fix what’s holding you back (hello, bad keywords, and slow speeds) and get found by those who matter.",
      category: "SEO",
      img: Blog1.src,
      link: "#",
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
