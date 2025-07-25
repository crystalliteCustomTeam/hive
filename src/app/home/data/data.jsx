//Banner
import BannerPoster from "media/home/bannerPoster.webp";

export const BannerData = {
  title: "Infiniti Digital Marketing Agency",
  desc: (<>
    At Infiniti Digital Marketing Agency, we help businesses grow through <Link href="/organic-seo-services">organic SEO services,</Link> targeted advertising, and content marketing. Whether you’re aiming to dominate local search, build a stronger online presence, or generate more leads, our team delivers data-driven digital solutions that turn clicks into customers.
  </>),
  //video:"https://player.vimeo.com/progressive_redirect/playback/1039775789/rendition/720p/file.mp4?loc=external&log_user=0&signature=8567ae8ef483e82e5fcc1ef124821c26200f8e18bcd1545a174dda0aced9e429",
  video: "/home/BannerVideo.mp4",
  videoFallback: "/home/BannerVideo.webm",
  BannerPoster: BannerPoster.src,
};

//Clients
import Client01 from "media/home/clientsLogo/01.webp";
import Client02 from "media/home/clientsLogo/02.webp";
import Client03 from "media/home/clientsLogo/03.webp";
import Client04 from "media/home/clientsLogo/04.webp";
import Client05 from "media/home/clientsLogo/05.webp";
import Client06 from "media/home/clientsLogo/06.webp";
import Client07 from "media/home/clientsLogo/07.webp";
import Client08 from "media/home/clientsLogo/06.webp";
import Client09 from "media/home/clientsLogo/09.webp";

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
];

//About Us

export const AboutData = {
  subtitle: "About Us",
  title: "Results That Speak Louder Than Words",
  desc: (<>
    Founded with a passion for helping businesses thrive online, Infiniti Digital is a full-service digital marketing agency dedicated to driving real, measurable growth. We specialize in SEO, paid advertising, <Link href="/social-media-management-service">social media management,</Link> content marketing, and web development, delivering tailored strategies that align with your goals and speak to your audience.</>),
  points: [
    {
      numbers: "10+",
      namee: "Years of Experience",
    },
    {
      numbers: "2M+",
      namee: "Qualified Leads Generated",
    },
    {
      numbers: "1200+",
      namee: "Successful Projects",
    },
    {
      numbers: "94%",
      namee: "Retention Rate",
    },
  ],
};

//Services
import Image01 from "media/home/services/image01.webp";
import Image02 from "media/home/services/image02.webp";
import Image03 from "media/home/services/image03.webp";
import Image04 from "media/home/services/image04.webp";
import Image05 from "media/home/services/image05.webp";
import Image06 from "media/home/services/image06.webp";
export const ServicesData = {
  subtitle: "Our Services",
  title: "Smarter Strategies, Better Results",
  desc: "Our tailored solutions drive results and ensure your success. Here’s how we help:",
  serviceData1: [
    {
      title: "Social Media Marketing",
      txt: "Turn followers into loyal fans with campaigns that connect and captivate. Engage your community with authentic interactions that foster trust and brand loyalty.",
      Img: Image01.src,
      url: "/social-media-marketing-services",
    },
    {
      title: "Mobile App Development",
      txt: "Build intuitive, engaging apps that keep users coming back. Incorporate user feedback to enhance features and deliver a personalized experience that meets their needs.",
      Img: Image03.src,
      url: "/mobile-app-development-company",
    },
    {
      title: "Paid Marketing",
      txt: "Maximize your ROI with expertly crafted paid marketing campaigns that put your brand in front of the right audience. From Google Ads to social media promotions, we ensure every click drives measurable growth and conversions.",
      Img: Image05.src,
      url: "/paid-marketing-services",
    },
  ],
  serviceData2: [
    {
      title: "SEO",
      txt: "Get noticed by the right audience at the perfect moment with expert optimization strategies. Harness the power of analytics to refine your approach for maximum visibility continually.",
      Img: Image02.src,
      url: "/seo-service",
    },
    {
      title: "Web Design & Development",
      txt: "Create sleek, functional websites that transform visitors into customers. Ensure seamless navigation and an immersive user experience that keeps visitors engaged.",
      Img: Image04.src,
      url: "/web-development-company",
    },
    {
      title: "Content Marketing",
      txt: "Deliver value with high-quality, impactful content that informs and inspires. Foster a community around your brand by encouraging conversations and sharing insights that resonate.",
      Img: Image06.src,
      url: "/content-marketing-services",
    },
  ],
};

// CTA
import ImgBg from "media/home/ctaBg.webp";
export const CtaData = {
  title: "Robust, Secure, and Scalable Development Services",
  desc: "Driven by innovation and backed by expertise, our team delivers custom built solutions that reflect your goals and scale with your growth. We work closely with you to ensure every step of the development process stays aligned with your vision.",
  img: ImgBg.src,
};
// Work
import AppImg01 from "media/home/work/mobile/mobile1.webp";
import AppImg02 from "media/home/work/mobile/mobile2.webp";
import AppImg03 from "media/home/work/mobile/mobile3.webp";
import AppImg04 from "media/home/work/mobile/mobile4.webp";
import AppImg05 from "media/home/work/mobile/mobile5.webp";
import AppImg06 from "media/home/work/mobile/mobile6.webp";
import SocialImg01 from "media/home/work/social/social1.webp";
import SocialImg02 from "media/home/work/social/social2.webp";
import SocialImg03 from "media/home/work/social/social3.webp";
import SocialImg04 from "media/home/work/social/social4.webp";
import SocialImg05 from "media/home/work/social/social5.webp";
import SocialImg06 from "media/home/work/social/social6.webp";
import WebImg01 from "media/home/work/web/web1.webp";
import WebImg02 from "media/home/work/web/web2.webp";
import WebImg03 from "media/home/work/web/web3.webp";
import WebImg04 from "media/home/work/web/web4.webp";
import WebImg05 from "media/home/work/web/web5.webp";
import WebImg06 from "media/home/work/web/web6.webp";
import SeoImg01 from "media/home/work/seo/seo1.webp";
import SeoImg02 from "media/home/work/seo/seo2.webp";
import SeoImg03 from "media/home/work/seo/seo3.webp";
import SeoImg04 from "media/home/work/seo/seo4.webp";
import SeoImg05 from "media/home/work/seo/seo5.webp";
import SeoImg06 from "media/home/work/seo/seo6.webp";
import PaidImg01 from "media/home/work/paid/paid1.webp";
import PaidImg02 from "media/home/work/paid/paid2.webp";
import PaidImg03 from "media/home/work/paid/paid3.webp";
import PaidImg04 from "media/home/work/paid/paid4.webp";
import PaidImg05 from "media/home/work/paid/paid5.webp";
import PaidImg06 from "media/home/work/paid/paid6.webp";
import ContentImg01 from "media/home/work/content/content1.webp";
import ContentImg02 from "media/home/work/content/content2.webp";
import ContentImg03 from "media/home/work/content/content3.webp";
import ContentImg04 from "media/home/work/content/content4.webp";
import ContentImg05 from "media/home/work/content/content5.webp";
import ContentImg06 from "media/home/work/content/content6.webp";

export const WorkData = {
  subtitle: "Our Portfolio",
  title: "Showcasing Success ",
  desc: "From websites that captivate to apps that deliver results, our portfolio is packed with innovative projects that help brands achieve their dreams and surpass their goals.",
  SeoPages: true,
  WorkItem: [
    //SEO
    {
      title: "Wellness Hub",
      txt: "50% Increase in Organic Traffic with Onpage Optimization",
      Img: SeoImg01.src,
      url: "/blogs#CaseStudies",
      category: "SEO",
    },
    {
      title: "Tech Force Solutions",
      txt: "Ranked in Top 3 for 15 Keywords, Resulting in 120% More Organic Leads",
      Img: SeoImg02.src,
      url: "/blogs#CaseStudies",
      category: "SEO",
    },
    {
      title: "Smart Invest Advisors",
      txt: "Increased Backlink Profile by 200% and Saw 30% Traffic Growth",
      Img: SeoImg03.src,
      url: "/blogs#CaseStudies",
      category: "SEO",
    },
    {
      title: "Premium Properties",
      txt: "Achieved 200% Growth in Local Search Traffic with GMB Optimization",
      Img: SeoImg04.src,
      url: "/blogs#CaseStudies",
      category: "SEO",
    },
    {
      title: "Shop Ease",
      txt: "Increased traffic by 30%, boosting sales revenue by $150,000 in 9 Months",
      Img: SeoImg05.src,
      url: "/blogs#CaseStudies",
      category: "SEO",
    },
    {
      title: "Green Bite Organics",
      txt: "Technical SEO improvements led to a 20% increase in traffic, generating an extra $50,000 in sales.",
      Img: SeoImg06.src,
      url: "/blogs#CaseStudies",
      category: "SEO",
    },

    //Social Media Marketing
    {
      title: "Crumbly Corner",
      txt: "Increased Engagement by 120% with Instagram Story Campaigns",
      Img: SocialImg01.src,
      url: "/blogs#CaseStudies",
      category: "Social Media Marketing",
    },
    {
      title: "Crumbly Corner",
      txt: "Boost in Facebook Page Likes by 75% in 6 Weeks.",
      Img: SocialImg02.src,
      url: "/blogs#CaseStudies",
      category: "Social Media Marketing",
    },
    {
      title: "Heck Ya Foods",
      txt: "Achieved 200% Increase in Comments with User-Generated Content",
      Img: SocialImg03.src,
      url: "/blogs#CaseStudies",
      category: "Social Media Marketing",
    },
    {
      title: "Rebate Rumble",
      txt: "Achieved 80% Higher Click-Through Rate with Targeted LinkedIn Ads",
      Img: SocialImg04.src,
      url: "/blogs#CaseStudies",
      category: "Social Media Marketing",
    },
    {
      title: "H& W Power Sports & Marine",
      txt: "Increased Mentions on X by 60% in 2 Months",
      Img: SocialImg05.src,
      url: "/blogs#CaseStudies",
      category: "Social Media Marketing",
    },
    {
      title: "Simpli Insurance",
      txt: "Grew Instagram Followers by 50% in 3 Months Through Consistent Engagement",
      Img: SocialImg06.src,
      url: "/blogs#CaseStudies",
      category: "Social Media Marketing",
    },

    //App Development

    {
      title: "Nutri Snap",
      txt: "Flutter, Firebase, Firestore",
      Img: AppImg03.src,
      url: "/blogs#CaseStudies",
      category: "App Development",
    },
    {
      title: "HomePro Connect",
      txt: "React Native, Node.js, MongoDB, AWS",
      Img: AppImg05.src,
      url: "/blogs#CaseStudies",
      category: "App Development",
    },
    {
      title: "Social Chat",
      txt: "Swift (iOS), Kotlin (Android), Python, PostgreSQL, WebSockets",
      Img: AppImg04.src,
      url: "/blogs#CaseStudies",
      category: "App Development",
    },
    {
      title: "FitTrack",
      txt: "Vue.js (Web), React Native (Mobile), Node.js, WebRTC",
      Img: AppImg06.src,
      url: "/blogs#CaseStudies",
      category: "App Development",
    },
    {
      title: "Ride App",
      txt: "Swift (iOS), Kotlin (Android), Node.js, MongoDB, AWS",
      Img: AppImg01.src,
      url: "/blogs#CaseStudies",
      category: "App Development",
    },
    {
      title: "Smarter Fitness",
      txt: "Vue.js (Web), React Native (Mobile), Node.js, WebRTC",
      Img: AppImg02.src,
      url: "/blogs#CaseStudies",
      category: "App Development",
    },

    //Website Development
    {
      title: "Event Magic",
      txt: "Elegant Events – a website that turned party dreams into reality with captivating visuals.",
      Img: WebImg01.src,
      url: "/blogs#CaseStudies",
      category: "Website Development",
    },
    {
      title: "Banking Smart",
      txt: "Banking Smarter – giving customers a seamless digital banking experience they’ll love.",
      Img: WebImg02.src,
      url: "/blogs#CaseStudies",
      category: "Website Development",
    },
    {
      title: "Tech Hub",
      txt: "Tech Innovations Hub – building a virtual space for groundbreaking ideas to thrive.",
      Img: WebImg03.src,
      url: "/blogs#CaseStudies",
      category: "Website Development",
    },
    {
      title: "Chic Commerce",
      txt: "Style Hub – creating a chic and functional e-commerce platform for fashion lovers.",
      Img: WebImg04.src,
      url: "/blogs#CaseStudies",
      category: "Website Development",
    },
    {
      title: "Retail Power",
      txt: "Retail Revolution – empowering brands with intuitive and feature-packed online stores.",
      Img: WebImg05.src,
      url: "/blogs#CaseStudies",
      category: "Website Development",
    },
    {
      title: "Creative Impact",
      txt: "Creative Studio – showcasing ideas with bold designs and innovative solutions for every business need.",
      Img: WebImg06.src,
      url: "/blogs#CaseStudies",
      category: "Website Development",
    },

    //Content Marketing

    {
      title: "Insight Pulse Media",
      txt: "SEO Content Strategy Increases Blog Traffic by 150%",
      Img: ContentImg01.src,
      url: "/blogs#CaseStudies",
      category: "Content Marketing",
    },
    {
      title: "Viral Vision Studios",
      txt: "Video Content Drives 300% More Social Shares",
      Img: ContentImg02.src,
      url: "/blogs#CaseStudies",
      category: "Content Marketing",
    },
    {
      title: "LeadGen Solutions",
      txt: "Case Studies Lead to 50% More Leads for B2B SaaS",
      Img: ContentImg03.src,
      url: "/blogs#CaseStudies",
      category: "Content Marketing",
    },
    {
      title: "EngageQuest Marketing",
      txt: "Interactive Quiz Increases Average Time on Page by 35%",
      Img: ContentImg04.src,
      url: "/blogs#CaseStudies",
      category: "Content Marketing",
    },
    {
      title: "Click Connect Campaigns",
      txt: "Personalized Emails Result in 40% Higher Open Rates",
      Img: ContentImg05.src,
      url: "/blogs#CaseStudies",
      category: "Content Marketing",
    },
    {
      title: "Elevate Agency",
      txt: "Strategic SEO Content Boosts Organic Traffic by 80%",
      Img: ContentImg06.src,
      url: "/blogs#CaseStudies",
      category: "Content Marketing",
    },

    //Paid Marketing
    {
      title: "Capital Lift",
      txt: "Reduced CPC 50% for an Investment Firm",
      Img: PaidImg01.src,
      url: "/blogs#CaseStudies",
      category: "Paid Marketing",
    },
    {
      title: "Style Aura Co",
      txt: "300% ROI from Shopping Ads for E-Commerce",
      Img: PaidImg02.src,
      url: "/blogs#CaseStudies",
      category: "Paid Marketing",
    },
    {
      title: "Learning Point Digital",
      txt: "Boost Sales by 200% leveraging Retargeting Campaigns",
      Img: PaidImg03.src,
      url: "/blogs#CaseStudies",
      category: "Paid Marketing",
    },
    {
      title: "FinFocus Digital",
      txt: "Meta Ads Boost Engagement by 150% with Creative Ads",
      Img: PaidImg04.src,
      url: "/blogs#CaseStudies",
      category: "Paid Marketing",
    },
    {
      title: "Estate Edge",
      txt: "60% Lower CPA with Geo-Targeting for Local Service",
      Img: PaidImg05.src,
      url: "/blogs#CaseStudies",
      category: "Paid Marketing",
    },
    {
      title: "Care Sphere",
      txt: "Call Campaign Boosts Lead Conversions by 70%",
      Img: PaidImg06.src,
      url: "/blogs#CaseStudies",
      category: "Paid Marketing",
    },
  ],
};

// Partner Data
import Logo1 from "media/home/partnerLogo/logo1.webp";
import Logo2 from "media/home/partnerLogo/logo2.webp";
import Logo3 from "media/home/partnerLogo/logo3.webp";
import Logo4 from "media/home/partnerLogo/logo4.webp";
import Logo5 from "media/home/partnerLogo/logo5.webp";
import Logo6 from "media/home/partnerLogo/logo6.webp";
import Logo7 from "media/home/partnerLogo/logo7.webp";
import Logo8 from "media/home/partnerLogo/logo8.webp";
import Logo9 from "media/home/partnerLogo/logo9.webp";
import Logo10 from "media/home/partnerLogo/logo10.webp";
import Logo11 from "media/home/partnerLogo/logo11.webp";
import Logo12 from "media/home/partnerLogo/logo12.webp";
import Logo13 from "media/home/partnerLogo/logo13.webp";
import Logo14 from "media/home/partnerLogo/logo14.webp";
import Logo15 from "media/home/partnerLogo/logo15.webp";
import Logo16 from "media/home/partnerLogo/logo16.webp";
import Logo17 from "media/home/partnerLogo/logo17.webp";
import Logo18 from "media/home/partnerLogo/logo18.webp";
import Logo19 from "media/home/partnerLogo/logo19.webp";
import Logo20 from "media/home/partnerLogo/logo20.webp";
export const PartnerData = {
  subtitle: "Our Clientele",
  title: "Brands That Trust Infiniti Digital",
  desc: "We believe the best work happens when great teams come together, which is why leading brands choose Infiniti Digital as their trusted digital partner. From ambitious startups to global enterprises, our clients value our commitment to collaboration, integrity, and smart, scalable digital marketing solutions that drive real growth.",
  PartnerLogos: [
    { logo: Logo1.src },
    { logo: Logo2.src },
    { logo: Logo3.src },
    { logo: Logo4.src },
    { logo: Logo5.src },
    { logo: Logo6.src },
    { logo: Logo7.src },
    { logo: Logo8.src },
    { logo: Logo9.src },
    { logo: Logo10.src },
    { logo: Logo11.src },
    { logo: Logo12.src },
    { logo: Logo13.src },
    { logo: Logo14.src },
    { logo: Logo15.src },
    { logo: Logo16.src },
    { logo: Logo17.src },
    { logo: Logo18.src },
    { logo: Logo19.src },
    { logo: Logo20.src },
  ],
};

//Industries
import Img01 from "media/home/industires/industy01.webp";
import Img02 from "media/home/industires/industy02.webp";
import Img03 from "media/home/industires/industy03.webp";
import Img04 from "media/home/industires/industy04.webp";
import Img05 from "media/home/industires/industy05.webp";
import Img06 from "media/home/industires/industy06.webp";
import Img07 from "media/home/industires/industy07.webp";
import Img08 from "media/home/industires/industy08.webp";
import Img09 from "media/home/industires/industy09.webp";
import Img10 from "media/home/industires/industy10.webp";

export const IndustriesData = {
  subtitle: "Industries We Serve",
  title: "Solutions Tailored to Your Industry ",
  desc: "Whatever your niche, we’ve got the expertise. At Infiniti Digital, we’re dedicated to delivering customized solutions that resonate with your vision.",
  SeoPages: true,
};
export const IndustryItem = [
  {
    title: "B2b Business",
    txt: "Increase leads and close deals with marketing strategies that work for complex sales cycles. Our tailored approach ensures you connect with decision-makers at every touchpoint.",
    Img: Img01.src,
    url: "#",
  },
  {
    title: "Construction",
    txt: "Build trust and connect with clients through campaigns and websites designed for credibility. Showcase your projects, highlight your expertise, and win contracts with precision-targeted messaging.",
    Img: Img02.src,
    url: "#",
  },
  {
    title: "Education",
    txt: "Engage students, parents, and educators with SEO and marketing that inspire action. We deliver strategies that drive enrollments, boost reputation, and foster long-term growth.",
    Img: Img03.src,
    url: "#",
  },
  {
    title: "Automotive",
    txt: "Drive leads and accelerate sales with campaigns that resonate with car buyers, dealerships, and enthusiasts. Our strategies fuel visibility and trust to keep your brand in the fast lane.",
    Img: Img04.src,
    url: "#",
  },

  {
    title: "Sports",
    txt: "Boost fan engagement, increase ticket sales, and spotlight your team or brand with impactful digital campaigns. Connect with sports lovers where it matters and build a loyal community.",
    Img: Img05.src,
    url: "#",
  },
  {
    title: "Events",
    txt: "Create unforgettable moments by driving attendance and boosting engagement. We ensure your event shines with maximum reach and impact, whether online or in-person.",
    Img: Img06.src,
    url: "#",
  },
  {
    title: "Content Creator",
    txt: "Monetize your creativity and grow your audience with targeted strategies that amplify your voice across platforms. From social media engagement to sponsored campaigns, we help creators stand out and succeed.",
    Img: Img07.src,
    url: "#",
  },
  {
    title: "E-commerce",
    txt: "Maximize sales with high-converting websites and compelling campaigns. From optimized product pages to targeted ads, we ensure your store thrives in a competitive marketplace.",
    Img: Img08.src,
    url: "#",
  },
  {
    title: "Healthcare",
    txt: "Reach patients, build trust, and enhance accessibility with tailored healthcare marketing. From SEO to reliable content strategies, we help you become the go-to authority in your field.",
    Img: Img09.src,
    url: "#",
  },
  {
    title: "Law",
    txt: "Build credibility, attract clients, and establish authority with strategic marketing tailored for legal professionals.We deliver campaigns that enhance your law firm’s reputation and distinguish your practice in a competitive landscape.",
    Img: Img10.src,
    url: "#",
  },
];
// Why Choose Us
export const ChooseUsData = {
  subtitle: "Why Choose Us",
  title: "Your Dedicated Partner for Unmatched Results",
  desc: "Explore how we empower brands to thrive, innovate, and lead in today’s digital-first world.",
  Content1: [
    {
      title: "Proven Results, Real Impact",
      txt: "We don’t just aim for growth; we deliver it. Our data-driven strategies are crafted to maximize ROI and help your business thrive in today’s competitive digital environment.",
    },
    {
      title: "Tailored Solutions for Every Business",
      txt: "Every business has its own story. That’s why we create personalized digital strategies that align with your goals, budget, and audience to drive measurable, long-term success.",
    },
  ],
  Content2: [
    {
      title: "Expertise Across Multiple Channels",
      txt: "From SEO and PPC to social media and email marketing, our team brings expertise across all digital channels, delivering multi-faceted solutions that maximize your reach and results.",
    },
  ],
  Content3: [
    {
      title: "A Results-Driven Approach",
      txt: "Success isn’t about guesswork. At Infiniti Digital, we focus on delivering outcomes that matter—higher engagement, increased leads, and tangible ROI that aligns with your goals.",
    },
    {
      title: "Unparalleled Client Support",
      txt: "We’re not just your digital partner but part of your team. From strategy to execution, we provide dedicated support, ensuring your business gets the attention and expertise it deserves.",
    },
  ],
};

//Platforms
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  YoutubeIcon,
} from "@/src/app/app-constants";
export const PlatformsData = {
  subtitle: "",
  title: "Platforms That Power Your Success",
  desc: "We collaborate with the platforms your audience knows and loves. Whether it’s growing your brand, building communities, or driving engagement, we make sure your message resonates where it matters most.",
  img: ImgBg.src,
  SocailItems: [
    {
      name: "Instagram",
      link: "https://www.instagram.com/InfinitiDigitalus/",
      icon: <InstagramIcon />,
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@InfinitiDigitalus",
      icon: <YoutubeIcon />,
    },
    {
      name: "Twitter",
      link: "https://x.com/Infinitidigitl",
      icon: <TwitterIcon />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/InfinitiDigitalus/",
      icon: <FacebookIcon />,
    },
    {
      name: "Pinterest",
      link: "https://www.pinterest.com/InfinitiDigitalus/#",
      icon: <PinterestIcon />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/infiniti-digitalus",
      icon: <LinkedInIcon />,
    },
  ],
};

//Awards

export const AwardsData = {
  subtitle: "Awards & Recognitions",
  title: "Celebrating Excellence, Innovation, and Results",
  desc: "Our awards and recognitions reflect our clients’ trust in us and our unwavering commitment to delivering results. At Infiniti Digital, we don’t just aim for success—we earn it.",
  slides: [
    {
      txt: "Recognized for excellence in delivering innovative digital solutions that drive measurable results for businesses worldwide.",
      icon: <ClutchLogo />,
    },
    {
      txt: "Highly rated for customer satisfaction, transparency, and proven strategies that help brands thrive.",
      icon: <TrustpilotLogo />,
    },
    {
      txt: "Celebrated for our expertise in SEO, PPC, and delivering top-notch digital growth through industry-leading practices.",
      icon: <GoogleLogo />,
    },
    {
      txt: "Honored as a trusted member for thought leadership and exceptional contributions to the digital marketing industry.",
      icon: <Forbes />,
    },
    {
      txt: "Recognized for consistently delivering outstanding marketing solutions and fostering meaningful business growth for clients across industries.",
      icon: <Upcity />,
    },
    {
      txt: "Celebrated for innovative use of technology in crafting highly effective digital marketing campaigns that set new benchmarks.",
      icon: <GoogleLogo />,
    },
  ],
};

// CTA  01
import ImgBg1 from "media/home/ctaBg1.webp";
export const CtaData01 = {
  title: "Your Journey to Success Starts Now",
  desc: "Your vision deserves a powerful digital presence. Let’s craft strategies that drive results and create stories worth sharing.",
  img: ImgBg1.src,
};

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
      txt: "Infiniti Digital transformed our online presence. From zero visibility to ranking on the first page of search results, they exceeded our expectations. Their team’s keen insights, data-driven approach, and commitment helped us tap into audiences we didn’t know we could reach. Working with them has been a breath of fresh air, and we now feel more confident about our brand’s growth.",
      icon: <ClutchLogo />,
      namee: "Amanda T.",
      job: "Founder of BrightTech Solutions",
    },
    {
      txt: "Their team’s dedication and expertise are unmatched. Since partnering with Infiniti Digital, our sales have doubled, and our customer base continues to expand. They understood our business challenges and implemented solutions that aligned perfectly with our goals. Their strategies for paid campaigns and content optimization brought impressive results, and we’re proud to call them a long-term partner in our success.",
      icon: <TrustpilotLogo />,
      namee: "James M.",
      job: "COO of NovaRetail Solutions",
    },
    {
      txt: "Infiniti Digital helped us exceed our targets with a well-rounded digital strategy tailored to our needs. From increasing website traffic to improving conversion rates, every milestone was backed by their expertise and dedication. Their team is responsive, professional, and results-oriented. We couldn’t be happier with the partnership.",
      icon: <GoogleLogo />,
      namee: "Sarah K.",
      job: "MD at GreenWave Industries",
    },
    {
      txt: "Partnering with Infiniti Digital was our best decision for our brand’s growth. Our campaigns have seen significant improvement, and their guidance has been pivotal in streamlining our marketing efforts. The results speak for themselves—better engagement, higher visibility, and real ROI.",
      icon: <TrustpilotLogo />,
      namee: "Tom L.",
      job: "CEO of BuildPro Solutions",
    },
    {
      txt: "Our online sales skyrocketed after working with Infiniti Digital’s exceptional team. Their SEO strategies, stunning web design, and tailored content solutions increased traffic and converted visitors into loyal customers. Their approach to understanding our audience and building campaigns that resonate was exactly what we needed. They’re the team to trust if you’re serious about growing your business.",
      icon: <ClutchLogo />,
      namee: "Emily R.",
      job: "Founder of StyleHive Boutique",
    },
  ],
};
// Call to Action

export const CallActionData = {
  subtitle: "Contact Us",
  title: "Let’s Turn Your Vision into Reality ",
  desc: "Ready to take the next step toward digital growth? Whether you have questions or a project idea, we’re here to help you succeed. Let’s collaborate to create something extraordinary for your business.",
  SeoPages: true,
};

// Blgos
import IMG01 from "media/blogs/posts/blog1.webp";
import IMG02 from "media/blogs/posts/blog5.webp";
import IMG03 from "media/blogs/posts/blog4.webp";
import Link from "next/link";
export const BlgosData = {
  subtitle: "Our Blogs",
  title: "Insights and Inspiration ",
  desc: "Stay ahead of the curve with expert tips and trends. Our blog delivers the latest on SEO, social media, web design, and more to fuel your growth.",
  BlogsData: [
    {
      title: "What is Local SEO and Why is it Important in 2025?",
      date: "20 Mar, 2025",
      txt: "Get better rankings on Google with our Texas SEO Company. As SEO experts in Texas we improve search rankings, traffic, and drive in more revenue.",
      category: "SEO",
      img: IMG01.src,
      link: "/what-is-local-seo",
    },
    {
      title: "SEO Glossary: 400+ SEO Terms Explained",
      date: "19 Mar, 2025",
      txt: "Check out this HUGE list of the most important SEO terms, jargon, abbreviations to help you better understand SEO.",
      category: "SEO",
      img: IMG02.src,
      link: "/seo-glossary",
    },
    {
      title: "Free SEO Score Checker How Strong Is Your Website’s SEO?",
      date: "18 Mar, 2025",
      txt: "Get your website’s SEO score and see how much effort you need to rank higher on SERP. Click on our free SEO score checker and fill the SEO scorecard.",
      category: "SEO",
      img: IMG03.src,
      link: "/free-seo-score-checker",
    },
  ],
};

// FAQs

export const FAQsData = {
  subtitle: "FAQs",
  title: "Frequently Asked Question?",

  Fqaslist: [
    {
      title: "What services does Infiniti Digital offer ",
      txt: "Infiniti Digital specializes in a comprehensive suite of digital marketing and development solutions. Our offerings include search engine optimization (SEO), social media marketing, mobile app development, web design, and content marketing. Every service is customized to help your business succeed and stand out.",
    },
    {
      title: "How does Infiniti Digital ensure results for its clients?",
      txt: "We take a strategic, data-driven approach to deliver measurable outcomes. Infiniti Digital begins by analyzing your business objectives and audience. With tailored strategies, ongoing refinements, and transparent progress reports, we ensure each campaign drives the desired results.",
    },
    {
      title:
        "Can Infiniti Digital handle projects for small and large businesses? ",
      txt: "Yes, Infiniti Digital works with companies of all sizes, from startups to global enterprises. Our flexible services are designed to scale with your needs, whether you’re seeking a foundational digital marketing plan or an advanced strategy for sustained growth.",
    },
    {
      title: "What industries does Infiniti Digital specialize in? ",
      txt: "Infiniti Digital serves various industries, including retail, technology, healthcare, and education. Our team draws on deep experience to create targeted strategies tailored to the needs of each sector, ensuring impactful results for businesses of any niche.",
    },
    {
      title: "How can I get started with Infiniti Digital?",
      txt: "Getting started is simple. Contact us via our website or call to arrange a consultation. We’ll take the time to understand your objectives and challenges, then design a detailed plan to elevate your brand’s digital presence and drive success.",
    },
  ],
};
// Follow US
export const FollowsData = {
  subtitle: "Follow US",
  title: "Stay Connected Across Platforms",
  desc: "We connect with you where it matters most. Whether you’re on Instagram, Reddit, YouTube, or Facebook, our tailored strategies ensure consistent engagement, meaningful interactions, and measurable growth for your brand.",
  FollowsItem: [
    { name: "Instagram", url: "https://www.instagram.com/InfinitiDigitalus/" },
    { name: "Twitter ", url: "https://x.com/Infinitidigitl" },
    { name: "YouTube", url: "https://www.youtube.com/@InfinitiDigitalus" },
    { name: "Facebook", url: "https://www.facebook.com/infinitidigitalus/" },
    { name: "Pinterest", url: "https://www.pinterest.com/infinitidigitalus/" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/infiniti-digitalus",
    },
  ],
};
