export const BannerData = {
  subtitle: "Smart SEO Analytics",
  title: <>SEO Reporting Dashboard That Ties Organic Traffic to Revenue</>,
  desc: (
    <>
      Are you still looking at rankings and traffic charts, hoping they’ll tell
      you what’s working? Generic analytics don’t give you what you really need:
      clear, automated insights on how SEO is impacting revenue.
      <br />
      <br />
      We build custom, automated SEO dashboards for high-performing marketing
      teams who need more than rankings; they need answers, insights, and ROI
      clarity.
    </>
  ),
  btntxt: "Connect with us",
};

//Services
export const ServicesData = {
  subtitle: "Our Services",
  title: (
    <>
      Get Clarity On SEO Performance Built for CMOs, Marketing Directors &
      Data-Driven Teams
    </>
  ),
  desc: "Make smarter, faster decisions with intelligent SEO reporting designed for leaders. Our dashboards provide SEO metrics for decision-makers, turning complex data into visually engaging, actionable insights. With advanced data visualization, we offer business intelligence for SEO that directly influences your marketing strategies and revenue outcomes, giving you the clarity needed to drive performance at scale.",
  ServicesItem: [
    {
      title: (
        <>
          Justify SEO Spend
          <br /> to Leadership
        </>
      ),
      txt: "Tie every SEO effort directly to leads, pipeline, and revenue—so your C-suite sees the value, not just the traffic.",
      url: "#",
    },
    {
      title: (
        <>
          Track the Full
          <br />
          Funnel
        </>
      ),
      txt: "Gain complete visibility into how organic traffic contributes to MQLs, SQLs, and actual sales with CRM-integrated reporting.",
      url: "#",
    },
    {
      title: (
        <>
          Identify High-Impact <br /> Conversion Paths
        </>
      ),
      txt: "Identify which pages, keywords, and campaigns are actually driving business outcomes—not just clicks.",
      url: "#",
    },
    {
      title: (
        <>
          Automate Reports and
          <br /> Eliminate Manual Work
        </>
      ),
      txt: "Save hours of reporting time with live, auto-updating Power BI dashboards built for speed, accuracy, and clarity.",
      url: "#",
    },
  ],
};

//Testimonials
import {
  ClutchLogo,
  TrustpilotLogo,
  GoogleLogo,
  Forbes,
  Upcity,
  CheckedIcon,
} from "@/src/app/app-constants";
export const TestimonialData = {
  subtitle: "Happy Clients",
  title: "Hear It from Our Clients ",
  desc: "At Infiniti Digital, client success is at the heart of everything we do. From transforming visibility to driving measurable growth, we’ve helped businesses across industries achieve exceptional results.",
  Testslider: [
    {
      txt: "We’ve seen a 25% increase in our SEO-driven traffic, thanks to the detailed insights and clear reporting. It’s been a game-changer for our team.",
      icon: <ClutchLogo />,
      namee: "EcoBrands",
      job: "Head of Digital Strategy",
    },
    {
      txt: "We’re able to make data-driven decisions that have lowered our CPC by 40%. It's the best investment we’ve made for our SEO efforts.",
      icon: <TrustpilotLogo />,
      namee: "Tech Innovators Inc.",
      job: "Marketing Director",
    },
    {
      txt: "Our team now has full visibility into SEO performance, and the comprehensive reports allow us to optimize with confidence. It’s helped us reduce unqualified traffic by 12% in 4 months.",
      icon: <GoogleLogo />,
      namee: "GrowthX Digital",
      job: "Head of SEO",
    },
    {
      txt: "The white-label option of this automated reporting dashboard has been a breakthrough for us. We can now offer clients customized, professional reports without spending hours on manual work. The team is amazing to work with!",
      icon: <Forbes />,
      namee: "ProSEO Partners",
      job: "Account Manager",
    },
  ],
};

import Img01 from "@/public/landing/paid/Img01.webp"
export const StateCounter = {
  subtitle: "",
  title: (
    <>
      Built for CMOs, Marketing Directors, And Data-Driven Teams
    </>
  ),
  desc: (
    <>
      <p>
        We speak your language; ROI, revenue attribution, growth. Our dashboards
        give your team the clarity and confidence to:
      </p>
      <ul className="ContentUl">
        <li>
          <CheckedIcon />
          Justify SEO investment to your C-suite
        </li>
        <li>
          <CheckedIcon />
          Uncover high-performing content and pages
        </li>
        <li>
          <CheckedIcon />
          Know exactly what’s driving MQLs, SQLs, and closed deals
        </li>
        <li>
          <CheckedIcon />
          Build a revenue-first SEO strategy that scales
        </li>
      </ul>
    </>
  ),
  img: Img01.src,
  btntxt: "Our Affordable SEO Packages",
  stateItem: [
    {
      numbers: "+25%",
      namee: "in conversion rates",
    },
    {
      numbers: "-44.6%",
      namee: "in cost per leads",
    },
    {
      numbers: "+21%",
      namee: "in decision-making speed",
    },
    {
      numbers: "-36%",
      namee: "in unqualified traffic",
    },
  ],
};

export const talkData = {
  title: <>Free SEO Score Check</>,
  txt: (
    <>
      Take a quick quiz and discover where your website stands in terms of SEO
      performance!
    </>
  ),
  normal: true,
  formtitle: "Your rankings are fine….. for now.",
};
