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
import IMG01 from "media/blogs/posts/blog1.webp";
import IMG02 from "media/blogs/posts/blog2.webp";
import IMG03 from "media/blogs/posts/blog3.webp";
import IMG04 from "media/blogs/posts/blog4.webp";
import IMG05 from "media/blogs/posts/blog5.webp";
import IMG06 from "media/blogs/posts/blog6.webp";
export const BlgosData = {
  subtitle: "Our Blogs",
  title: "Insights and Inspiration ",
  desc: "Stay ahead of the curve with expert tips and trends. Our blog delivers the latest on SEO, social media, web design, and more to fuel your growth.",
  BlogsData: [
    {
      title: "Why Small Businesses Need Local SEO",
      date: "25 Mar, 2025",
      txt: "Read this blog and find out about how local SEO can be the missing piece for small businesses to higher online visibility and growth.",
      category: "SEO",
      img: IMG01.src,
      link: "/why-small-businesses-need-local-seo",
      author: "John Doe",
    },
    {
      title: "Local SEO vs. Traditional SEO Which One Drives More Sales?",
      date: "24 Mar, 2025",
      txt: "Stuck between local or traditional SEO and unable to find which one can drive more revenue to your business? Read this blog and make an informed decision.",
      category: "SEO",
      img: IMG01.src,
      link: "/seo-vs-local-seo",
      author: "John Doe",
    },
    {
      title: "What is Local SEO and Why is it Important in 2025?",
      date: "20 Mar, 2025",
      txt: "Get better rankings on Google with our Texas SEO Company. As SEO experts in Texas we improve search rankings, traffic, and drive in more revenue.",
      category: "SEO",
      img: IMG01.src,
      link: "/what-is-local-seo",
      author: "John Doe",
    },
    {
      title: "Stop Wasting Money on Ads That Don’t Work",
      date: "03 Jan, 2025",
      txt: "Struggling to see results from your ad spend? Let’s talk about the strategies that actually get clicks and conversions.",
      category: "Paid Marketing",
      img: IMG03.src,
      link: "#",
      author: "John Doe",
    },
    {
      title: "Why Does Your App Look Like It’s Stuck in 2010?",
      date: "04 Jan, 2025",
      txt: "Users are ditching outdated apps faster than you can say “uninstall.” We’re here to help you design apps that look sharp, work like magic, and keep people hooked.",
      category: "Mobile App Design",
      img: IMG04.src,
      link: "#",
      author: "John Doe",
    },
    {
      title: "Your Website Isn’t Invisible—It’s Just Lost",
      date: "05 Jan, 2025",
      txt: "You spent time building a beautiful website, but where’s the traffic? Learn how to fix what’s holding you back (hello, bad keywords, and slow speeds) and get found by those who matter.",
      category: "SEO",
      img: IMG05.src,
      link: "#",
      author: "Sarah Smith",
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
      img: IMG05.src,
      link: "/seo-glossary",
    },
    {
      title: "Free SEO Score Checker How Strong Is Your Website’s SEO?",
      date: "18 Mar, 2025",
      txt: "Get your website’s SEO score and see how much effort you need to rank higher on SERP. Click on our free SEO score checker and fill the SEO scorecard.",
      category: "SEO",
      img: IMG04.src,
      link: "/free-seo-score-checker",
    },
  ],
};
