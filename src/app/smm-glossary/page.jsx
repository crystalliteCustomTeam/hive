"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/seo-glossary/seo-glossary.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CTAFrom from "./ctaform";
import Link from "next/link";
import Banner1 from "media/seo-glossary/letterImg/glossary-1.webp";
import Banner2 from "media/seo-glossary/letterImg/glossary-2.webp";
import Banner3 from "media/seo-glossary/letterImg/glossary-3.webp";
import Banner4 from "media/seo-glossary/letterImg/glossary-4.webp";
import Banner5 from "media/seo-glossary/letterImg/glossary-5.webp";
import Banner6 from "media/seo-glossary/letterImg/glossary-6.webp";
import Banner7 from "media/seo-glossary/letterImg/glossary-7.webp";
import Banner8 from "media/seo-glossary/letterImg/glossary-8.webp";
import Banner9 from "media/seo-glossary/letterImg/glossary-9.webp";
import Banner10 from "media/seo-glossary/letterImg/glossary-10.webp";
import Banner11 from "media/seo-glossary/letterImg/glossary-11.webp";
import Banner12 from "media/seo-glossary/letterImg/glossary-12.webp";
import Banner13 from "media/seo-glossary/letterImg/glossary-13.webp";
import Banner14 from "media/seo-glossary/letterImg/glossary-14.webp";
import Banner15 from "media/seo-glossary/letterImg/glossary-15.webp";
import Banner16 from "media/seo-glossary/letterImg/glossary-16.webp";
import Banner17 from "media/seo-glossary/letterImg/glossary-17.webp";
import Banner18 from "media/seo-glossary/letterImg/glossary-18.webp";
import Banner19 from "media/seo-glossary/letterImg/glossary-19.webp";
import Banner20 from "media/seo-glossary/letterImg/glossary-20.webp";
import Banner21 from "media/seo-glossary/letterImg/glossary-21.webp";
import Banner22 from "media/seo-glossary/letterImg/glossary-22.webp";
import Banner23 from "media/seo-glossary/letterImg/glossary-23.webp";
import Banner24 from "media/seo-glossary/letterImg/glossary-24.webp";
import Banner25 from "media/seo-glossary/letterImg/glossary-25.webp";
import Banner26 from "media/seo-glossary/letterImg/glossary-26.webp";
import Image from "next/image";
const data = [
  {
    letter: "A",
    letterbanner: Banner1.src,
    letterItem: [
      {
        title: "Algorithm",
        txt: "Rules social platforms use to decide what content appears to users.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Analytics",
        txt: "Tracking performance metrics like reach, engagement, and conversions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "A/B Testing",
        txt: "Comparing two versions of content or ads to see which performs better.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Audience Targeting",
        txt: "Selecting users based on demographics, behavior, interests.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Avatar",
        txt: "Representation of your ideal customer/persona.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Affiliate Marketing",
        txt: "Influencer or partner promoting a product in exchange for commission.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Ad Set",
        txt: "Group of ads in a campaign targeting a specific audience (Facebook/Instagram Ads).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "AI-Generated Influencers",
        txt: "Virtual personas created using AI for marketing campaigns.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Authenticity Score",
        txt: "Metric evaluating how genuine content appears to an audience.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Augmented Reality (AR) Filters",
        txt: "Interactive visual effects applied to videos/images to increase engagement.",
        btntxt: "",
        btnlink: "",
      },

    ],
  },
  {
    letter: "B",
    letterbanner: Banner2.src,
    letterItem: [
      {
        title: "Branded Content",
        txt: "Content created in partnership with influencers or brands.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Boosted Post",
        txt: "Paid promotion of an existing post to reach more users.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Brand Voice",
        txt: "Personality and tone of brand communication.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Brand Awareness Campaign",
        txt: "Marketing effort to increase visibility rather than direct sales.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Bio Link",
        txt: "Link in social media bio directing to landing pages, shops, or content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Brand Safety",
        txt: "Measures ensuring content doesn’t appear alongside inappropriate material.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Blockchain for Social Media",
        txt: "Using blockchain to verify content ownership and authenticity.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Biometric Engagement",
        txt: "Measuring user interaction using facial or biometric data.",
        btntxt: "",
        btnlink: "",
      },

    ],
  },
  {
    letter: "C",
    letterbanner: Banner3.src,
    letterItem: [
      {
        title: "Call to Action (CTA)",
        txt: "Prompt encouraging user action (e.g., Buy Now, Swipe Up).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Click-Through Rate (CTR)",
        txt: "Percentage of users clicking a link relative to impressions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Content Calendar",
        txt: "Schedule for planning posts, campaigns, and promotions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Content Pillars",
        txt: "Core themes or topics around which social content is structured.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Conversion Rate",
        txt: "Percentage of users completing a desired action.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Cost Per Click (CPC)",
        txt: "Paid amount per click in an ad campaign.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Cost Per Mille (CPM)",
        txt: "Cost per 1,000 ad impressions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Community Management",
        txt: "Managing interactions, engagement, and customer support online.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Creative Brief",
        txt: "Document guiding content creation, campaign goals, and style.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Carousel Post",
        txt: "Post with multiple images or videos in a single format.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Contextual Targeting",
        txt: "Delivering ads based on surrounding content rather than user behavior.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Creator Economy",
        txt: "Ecosystem where independent content creators monetize influence.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Community-Led Growth",
        txt: "Strategy focusing on nurturing brand communities for organic growth.",
        btntxt: "",
        btnlink: "",
      },

    ],
  },
  {
    letter: "D",
    letterbanner: Banner4.src,
    letterItem: [
      {
        title: "Dark Post",
        txt: "Paid ad that doesn’t appear on the brand’s feed, only targeted users see it.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Demographics",
        txt: "Audience characteristics (age, gender, location).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Direct Message (DM)",
        txt: "Private messaging on social media.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Drops",
        txt: "Coordinated product launches promoted via social platforms.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Deepfake Content",
        txt: "AI-manipulated realistic media for campaigns.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Dynamic Creative Optimization (DCO)",
        txt: "Real-time testing and personalization of ads.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Digital Twin of Brand",
        txt: "Virtual replica of a brand’s online presence for strategy simulation.",
        btntxt: "",
        btnlink: "",
      },

    ],
  },
  {
    letter: "E",
    letterbanner: Banner5.src,
    letterItem: [
      {
        title: "Engagement Rate",
        txt: "Ratio of interactions (likes, comments, shares) to total audience.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Earned Media",
        txt: "Organic exposure through shares, mentions, reviews.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Ephemeral Content",
        txt: "Short-lived content (Stories, TikTok videos) that disappears.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Endorsement",
        txt: "Influencer or celebrity support for a brand/product.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Employee Content Marketing (ECM)",
        txt: "Leveraging employees to create and share branded content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Experience Marketing",
        txt: "Immersive campaigns using VR/AR to engage audiences.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "F",
    letterbanner: Banner6.src,
    letterItem: [
      {
        title: "Follower Growth Rate",
        txt: "Speed at which an account gains followers.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Frequency",
        txt: "Number of times an ad is shown to the same user.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Filter",
        txt: "Visual effect applied to photos/videos.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Frame",
        txt: "Single still from a video or visual composition.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "FYP (For You Page)",
        txt: "TikTok’s personalized content feed.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Frictionless Commerce",
        txt: "Seamless in-platform shopping experiences.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Fan-Generated Content (FGC)",
        txt: "Content created by fans, shared by brands.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "G",
    letterbanner: Banner7.src,
    letterItem: [
      {
        title: "Geotargeting",
        txt: "Targeting users by location.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "GIF",
        txt: "Short, looping animated image.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Growth Hacking",
        txt: "Creative, low-cost strategies to rapidly grow followers or engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Giveaway Campaign",
        txt: "Contest where followers can win prizes to boost engagement.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "H",
    letterbanner: Banner8.src,
    letterItem: [
      {
        title: "Hashtag",
        txt: "Keyword or phrase preceded by # to categorize content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Handle",
        txt: "Username on social media.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hero Content",
        txt: "Major campaign content designed for high impact.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hyperlapse / Time-Lapse",
        txt: "Fast-motion video format.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hyper-Personalization",
        txt: "Tailoring content and ads to individual users for maximum relevance.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Humanized AI Interactions",
        txt: "AI-driven messaging that mimics human conversation.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "I",
    letterbanner: Banner9.src,
    letterItem: [
      {
        title: "Influencer Marketing",
        txt: "Collaborating with individuals with large followings to promote products.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Influencer Tiers",
        txt: "Categories by follower count: Nano, Micro, Macro, Mega.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Instagram Reels",
        txt: "Short-form videos on Instagram for engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Impressions",
        txt: "Number of times content is displayed.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Insight",
        txt: "Analytics showing audience behavior and engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Interactive Content",
        txt: "Polls, quizzes, or swipe actions that encourage participation.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Immersive Content",
        txt: "VR/AR-based content creating deep audience engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Influencer Allowlisting",
        txt: "Allowing influencers to run paid ads using their content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Interactive Video Ads",
        txt: "Ads that allow user participation within the video.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "J",
    letterbanner: Banner10.src,
    letterItem: [
      {
        title: "Journey Mapping",
        txt: "Tracking the customer experience across social touchpoints.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Joint Ventures with Creators",
        txt: "Brand and influencer collaboration to co-create campaigns or products.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Just-in-Time Content Creation",
        txt: "Producing content quickly in response to trends or events.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "K",
    letterbanner: Banner11.src,
    letterItem: [
      {
        title: "KPI (Key Performance Indicator)",
        txt: "Metric measuring campaign success.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Targeting",
        txt: "Using relevant keywords for SEO or ads.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Kit / Creator Kit",
        txt: "Resources for content creation, like templates or graphics.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Knowledge Graphs in Marketing",
        txt: "Structured data to improve content discoverability.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Kinetic Typography",
        txt: "Animated text in video to emphasize messages.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "L",
    letterbanner: Banner12.src,
    letterItem: [
      {
        title: "Lead Generation",
        txt: "Collecting user info for future marketing.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Lookalike Audience",
        txt: "Users similar to a brand’s current audience.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Live Streaming",
        txt: "Broadcasting video in real time.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link in Bio",
        txt: "Single profile link directing to landing pages or multiple links.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Long-Form Video Content",
        txt: "Extended videos for tutorials or storytelling.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Location-Based Targeting",
        txt: "Delivering content based on user location.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "M",
    letterbanner: Banner13.src,
    letterItem: [
      {
        title: "Media Buying",
        txt: "Purchasing ad placements.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Micro-Influencer",
        txt: "Influencer with 1k–50k highly engaged followers.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Mention",
        txt: "Tagging a user or brand.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Monetization",
        txt: "Earning revenue directly from social content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Mood Board",
        txt: "Visual guide for content style and branding.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Metaverse Marketing",
        txt: "Promoting brands in immersive virtual worlds.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Meme Marketing",
        txt: "Leveraging memes for relatable, shareable content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Micro-Moments",
        txt: "Quick user interactions presenting opportunity for timely content.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "N",
    letterbanner: Banner14.src,
    letterItem: [
      {
        title: "Native Advertising",
        txt: "Ads that match platform content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Niche Marketing",
        txt: "Targeting a specialized audience segment.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Noise",
        txt: "Excessive content competing for attention.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Nano-Influencers",
        txt: "Influencers with 1k–10k highly engaged followers.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Neuro-Marketing",
        txt: "Applying neuroscience to influence user behavior.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Nostalgia Marketing",
        txt: "Using past elements to evoke emotional connections.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "O",
    letterbanner: Banner15.src,
    letterItem: [
      {
        title: "Organic Reach",
        txt: "Users seeing content without paid promotion.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Optimization",
        txt: "Adjusting content or ads to improve performance.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Omnichannel Marketing",
        txt: "Unified campaigns across multiple platforms.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Owned Media",
        txt: "Brand-controlled platforms and content.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "P",
    letterbanner: Banner16.src,
    letterItem: [
      {
        title: "Paid Media",
        txt: "Ads that require payment.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Persona",
        txt: "Ideal customer profile.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Pixel",
        txt: "Tracking code for conversion analytics.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Post Engagement",
        txt: "Likes, comments, shares, saves.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Promoted Post",
        txt: "Paid post to increase reach.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Pin / Pinning",
        txt: "Fixing content to top of feed or profile.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Portfolio Post",
        txt: "Showcasing work or products.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Platform-Specific Content",
        txt: "Content tailored to each platform.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Programmatic Advertising",
        txt: "Automated ad buying using algorithms.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Predictive Analytics",
        txt: "Using data to forecast user behavior.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Personal Branding",
        txt: "Marketing yourself as a brand.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "Q",
    letterbanner: Banner17.src,
    letterItem: [
      {
        title: "Qualitative Metrics",
        txt: "Non-numerical performance indicators like sentiment.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "QR Code Marketing",
        txt: "Driving offline users to online content via scanable codes.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Quantum Computing in Marketing",
        txt: "Using advanced computing for complex data insights.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "R",
    letterbanner: Banner18.src,
    letterItem: [
      {
        title: "Reach",
        txt: "Unique users who see content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Real-Time Analytics",
        txt: "Immediate performance tracking.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Retargeting / Remarketing",
        txt: "Ads targeting users who previously engaged.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "ROI (Return on Investment)",
        txt: "Campaign performance versus cost.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Reels Remix / Duet (TikTok)",
        txt: "Interactive video features.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Reputation Management",
        txt: "Monitoring and managing brand perception.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Real-Time Marketing",
        txt: "Content created in response to events or trends.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "S",
    letterbanner: Banner19.src,
    letterItem: [
      {
        title: "Scheduling Tools",
        txt: "Automating posts and reporting.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Sentiment Analysis",
        txt: "Measuring audience emotion toward content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Social Listening",
        txt: "Monitoring mentions, hashtags, discussions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Swipe-Up Link",
        txt: "Clickable link in Stories.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Story Ads",
        txt: "Vertical, full-screen ad format in Stories.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Shoutout",
        txt: "Paid promotion by influencers.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Sponsored Content",
        txt: "Paid content appearing as organic posts.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Storytelling",
        txt: "Narrative technique to engage audiences.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Shoppable Posts",
        txt: "Direct in-platform shopping posts.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "T",
    letterbanner: Banner20.src,
    letterItem: [
      {
        title: "Target Audience",
        txt: "Group campaign is aimed at.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "TikTok Algorithm",
        txt: "Determines which videos appear on FYP.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "TikTok Challenges",
        txt: "Viral campaigns encouraging user participation.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Trending Content",
        txt: "Content popular in real-time.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Traffic",
        txt: "Users directed to a website via social media.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Tagging",
        txt: "Mentioning other users or brands.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Tokenization in Marketing",
        txt: "Using blockchain tokens to incentivize engagement.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "U",
    letterbanner: Banner21.src,
    letterItem: [
      {
        title: "UGC (User-Generated Content)",
        txt: "Content created by customers or followers.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Uplift",
        txt: "Improvement in key metrics due to campaigns.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Unboxing Video",
        txt: "Showing product unpacking for engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Unified Marketing Platforms",
        txt: "Tools integrating analytics, content, and advertising.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Universal Analytics",
        txt: "Tracking user behavior across platforms and devices.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "V",
    letterbanner: Banner22.src,
    letterItem: [
      {
        title: "Viral Content",
        txt: "Highly shareable content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Video Marketing",
        txt: "Promotional content in video format.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "View-Through Rate (VTR)",
        txt: "Percentage of full video views.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Vlog",
        txt: "Video blog documenting experiences or products.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Virtual Reality Experiences",
        txt: "Immersive digital environments for engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Voice Search Optimization",
        txt: "Adapting content for voice search.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "W",
    letterbanner: Banner23.src,
    letterItem: [
      {
        title: "Workflow Automation",
        txt: "Streamlining posting, reporting, engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Webinar Marketing",
        txt: "Hosting online sessions promoted via social media.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Whitepaper Promotion",
        txt: "Sharing guides or reports to attract leads.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Weekly Recap / Highlights",
        txt: "Summaries of brand activities.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Web 3.0 Integration",
        txt: "Incorporating decentralized tech in marketing.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Wearable Tech Marketing",
        txt: "Using devices like smartwatches to reach audiences.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Whisper Marketing",
        txt: "Subtle marketing influencing behavior without overt ads.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "X",
    letterbanner: Banner24.src,
    letterItem: [
      {
        title: "Cross-Platform Promotion",
        txt: "Coordinated campaigns across networks.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "X-Factor Content",
        txt: "Unique, highly creative content to stand out.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "Y",
    letterbanner: Banner25.src,
    letterItem: [
      {
        title: "YouTube Shorts",
        txt: "Short-form video content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Yield",
        txt: "Effectiveness of campaigns in achieving objectives.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
  {
    letter: "Z",
    letterbanner: Banner26.src,
    letterItem: [
      {
        title: "Zero Moment of Truth (ZMOT)",
        txt: "Stage when customers research before purchase.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Zoomer Marketing",
        txt: "Strategies targeting Gen Z audiences.",
        btntxt: "",
        btnlink: "",
      },
    ],
  },
];

const Page = () => {
  const [activeLetter, setActiveLetter] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentLetter = "";

      data.forEach((item) => {
        const section = document.getElementById(item.letter);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentLetter = item.letter;
          }
        }
      });

      setActiveLetter(currentLetter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={styles.seoGlossarySection}>
        <Container>
          <Row>
            <Col
              md={12}
              lg={12}
              className={`${styles.glossaryBox} text-center`}
            >
              <div className={styles.glossaryTxt}>
                <h1>Social Media Marketing Glossary: 200+ SEO Terms Explained</h1>
              </div>
            </Col>

            <Col lg={12}>
              <CTAFrom tit="SEO is the Cheat Code, Sign Up to Unlock It!" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.glossarySec}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.glossaryContainer}>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.glossaryItem} ${activeLetter === item.letter ? styles.active : ""
                      }`}
                  >
                    <Link href={`#${item.letter}`}>{item.letter}</Link>
                  </div>
                ))}
              </div>

              <div className={styles.glossaryConTxt}>
                {data.map((item, index) => (
                  <div key={index} id={item.letter}>
                    <div className={styles.bannerImg}>
                      <Image src={item.letterbanner} alt={item.letter} width={1420} height={664} />
                    </div>
                    {item.letterItem &&
                      item.letterItem.map((list, idx) => (
                        <div className={styles.glossaryList} key={idx}>
                          <h3>{list.title}</h3>
                          <p>{list.txt}</p>
                          {list.btnlink !== "" ? (
                            <div className={styles.glossaryLink}>
                              Read More :
                              <Link href={list.btnlink}>{list.btntxt}</Link>
                            </div>
                          ) : null}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Page;
