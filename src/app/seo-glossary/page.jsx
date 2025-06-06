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
        title: "Above the Fold",
        txt: "The top portion of a webpage is visible without scrolling, crucial for user engagement and SEO.",
        btntxt: "Above the fold",
        btnlink: "/what-does-above-the-fold-mean",
      },
      {
        title: "Acquisition",
        txt: "In analytics, this refers to how users arrive at a website, categorized by channels like organic search, paid search, social media, and referrals.",
        btntxt: "Acquisition in SEO",
        btnlink: "/what-is-acquisition-in-seo",
      },
      {
        title: "AI Content Detection",
        txt: "Tools that analyze content to determine if it’s AI-generated or human-written.",
        btntxt: "AI content detection",
        btnlink: "/how-does-ai-content-detection-work",
      },
      {
        title: "AI SEO Tools",
        txt: "Software that uses AI to automate keyword research, content optimization, and SERP analysis.",
        btntxt: "AI SEO Tools",
        btnlink: "ai-seo-tools",
      },
      {
        title: "Ajax",
        txt: "A technology that allows web pages to update content dynamically without reloading the entire page.",
        btntxt: "Ajax",
        btnlink: "/what-is-ajax",
      },
      {
        title: "Algorithm",
        txt: "A set of rules used by search engines to rank pages in search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Alt Attribute",
        txt: "Text description for images, enhancing accessibility and improving SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Alt Text",
        txt: "Alternative Text, a description of an image used for accessibility and SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Analytics",
        txt: "Tools that track and analyze website traffic, helping optimize performance and marketing efforts.",
        btntxt: "Analytics",
        btnlink: "/what-is-analytics-and-how-does-it-work",
      },
      {
        title: "A Records",
        txt: "A type of DNS (Domain Name System) record that maps a domain name to an IP address, allowing browsers to locate and load a website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Analytics Report",
        txt: "A document or dashboard that presents website performance data, such as traffic, conversions, and user behavior, based on analytics tools like Google Analytics.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Analytics Reporting",
        txt: "The process of collecting, analyzing, and presenting website data to track SEO performance, user engagement, and marketing effectiveness.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Anchor Text",
        txt: "Clickable text in a hyperlink that helps search engines understand linked content.",
        btntxt: "What is Anchor Text",
        btnlink: "what-is-anchor-text",
      },
      {
        title: "Artificial Intelligence in SEO",
        txt: "The use of AI to optimize SEO strategies, such as content generation, keyword research, and ranking prediction.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Authority",
        txt: "A metric indicating a site’s credibility based on backlinks and content quality.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Average Session Duration",
        txt: "The average time users spend on a site per visit.",
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
        title: "B2B",
        txt: "Business-to-business transactions, where companies sell products or services to other businesses.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "B2C",
        txt: "Business-to-consumer transactions, where companies sell directly to individual consumers.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Backlink",
        txt: "A link from one website to another, affecting domain authority and rankings.",
        btntxt: "What Are Backlinks",
        btnlink: "what-are-backlinks",
      },
      {
        title: "Baidu",
        txt: "China’s leading search engine, often referred to as the ’Google of China.’",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Bard (Google AI Chatbot)",
        txt: "Google AI chatbot that provides conversational search responses.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "BERT",
        txt: "Bidirectional Encoder Representations from Transformers, Google’s NLP model that helps understand search intent and context.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Bing Webmaster Tools",
        txt: "A tool by Microsoft for monitoring Bing search performance.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Black Hat SEO",
        txt: "Unethical SEO practices like keyword stuffing and cloaking that violate search engine guidelines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Black Box",
        txt: "A system or process whose workings are hidden or not easily understood, often used in SEO algorithms.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Blog",
        txt: "A regularly updated website or web page focused on written content, often used for sharing insights, news, or opinions.",
        btntxt: "What is a Blog",
        btnlink: "what-is-a-blog",
      },
      {
        title: "Bot (Crawler/Spider)",
        txt: "Automated programs that index websites for search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Bounce Rate",
        txt: "The percentage of visitors who leave a website without interacting further.",
        btntxt: "What is Bounce Rate",
        btnlink: "what-is-bounce-rate",
      },
      {
        title: "Branded Keyword",
        txt: "Keywords that include a specific brand name or trademark, helping to target users already familiar with the brand.",
        btntxt: "What is a Branded Keyword",
        btnlink: "what-is-a-branded-keyword",
      },
      {
        title: "Breadcrumb",
        txt: "A site navigation feature that enhances user experience and SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Broken Link",
        txt: "A link that no longer works, affecting user experience and rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Broad Keyword",
        txt: "A general and non-specific keyword that covers a wide topic, often with high search volume and competition but lower user intent specificity.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Buyer Intent Keywords",
        txt: "Keywords used by searchers who are in the process of making a purchase decision, indicating high conversion potential.",
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
        title: "Cache",
        txt: "A stored version of a webpage to speed up load times and reduce server strain.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Canonical Tag",
        txt: "An HTML tag that prevents duplicate content issues by specifying the preferred URL version.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "ccTLD",
        txt: "Country-code top-level domain (e.g., .us, .uk, .ca) that signals a site’s geographic targeting.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "ChatGPT for SEO",
        txt: "AI-based chatbot that assists with content creation, keyword research, and on-page SEO.",
        btntxt: "How to use chat gpt for seo",
        btnlink: "how-to-use-chat-gpt-for-seo",
      },
      {
        title: "Child Domain",
        txt: "A subdomain that exists under a primary domain, functioning as a separate entity while still being associated with the main domain (e.g., blog.example.com is a child domain of example.com).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Citation",
        txt: "A mention of your business’s name, address, and phone number (NAP) online, important for local SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Click Bait",
        txt: "Sensationalized or misleading content such as an article, image or a video designed to attract clicks.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Click Per Search",
        txt: "A metric that measures the average number of clicks a search query generates, helping evaluate search intent and ad effectiveness.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Click-Through Rate (CTR)",
        txt: "The percentage of users who click on a search result or ad.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Cloaking",
        txt: "A black hat SEO technique where content shown to users differs from that shown to search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "CMS",
        txt: "Content Management System, a platform like WordPress that helps users create and manage website content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Comment Spam",
        txt: "Useless, self-promotional comments with links, usually dumped by bots (or desperate marketers).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Competition",
        txt: "SEO competition is when websites are fighting for the same keywords, rankings, and traffic as you.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Content",
        txt: "The material on a website, including articles, images, videos, interactive elements, or other media published on a website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Content is King",
        txt: "The classic SEO mantra emphasizing that high-quality content is the key to rankings and engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Content Optimization",
        txt: "Improving content for readability, SEO, and engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Content Syndication",
        txt: "The process of republishing content on third-party websites to reach a broader audience and drive traffic back to the original source.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Conversational AI Search",
        txt: "AI-powered search that understands natural language queries.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Conversion",
        txt: "When a user takes a desired action on your site, like filling out a form or making a purchase.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Conversion Events",
        txt: "Specific user actions tracked on a website or app that indicate progress toward a goal, such as form submissions, purchases, or sign-ups.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Conversion Rate",
        txt: "The percentage of users who complete a desired action compared to total visitors, higher is better.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Conversion Rate Optimization",
        txt: "Enhancing website elements to increase the percentage of visitors who take desired actions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Conversion Tracking",
        txt: "The process of monitoring and analyzing user actions after they interact with an ad or website, helping measure campaign effectiveness.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Core Web Vitals",
        txt: "A set of Google page experience metrics: Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Cost Per Sale",
        txt: "A pricing model where advertisers pay a commission only when a sale is made through their ad or affiliate link.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "CPC",
        txt: "Cost Per Click, a digital advertising metric that represents the amount paid for each click on an ad, commonly used in PPC campaigns.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Crawl Budget",
        txt: "The number of pages Googlebot crawls on a site within a specific timeframe.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Crawl Error",
        txt: "When a search engine bot fails to access a webpage, potentially hurting your rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Crawlability",
        txt: "How easily search engines can index a site’s content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Crawling",
        txt: "The process where search engine bots scan and index website content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "CSS",
        txt: "Cascading Style Sheets, the code that controls a website’s design and layout.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Customer Journey",
        txt: "The full experience a user goes through from discovering your brand to converting.",
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
        title: "Deep Learning in SEO",
        txt: "AI technique used to analyze search patterns and improve ranking predictions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Deep Link",
        txt: "A link that points to a specific internal page, not just the homepage.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Deep Linking",
        txt: "Linking to internal pages instead of just the homepage.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Deindex",
        txt: "When a page or site is removed from search engine results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "De-indexing",
        txt: "Removal of a web page from search engine indexes.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Directory",
        txt: "A categorized listing of websites, like a digital phone book.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Disavow",
        txt: "Telling Google to ignore shady backlinks pointing to your site.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Disavow Tool",
        txt: "A Google Search Console tool that allows webmasters to reject spammy backlinks.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "DMOZ",
        txt: "A now-defunct, human-edited web directory once used for SEO credibility.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Dofollow Link",
        txt: "A link that passes SEO value (link juice) to the target site.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Domain",
        txt: "The main web address of a site (e.g., example.com).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Domain Authority",
        txt: "A score (0-100) predicting a website’s ability to rank.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Domain Rating",
        txt: "A metric by Ahrefs estimating a domain’s backlink strength.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Doorway Page",
        txt: "A low-quality page designed to rank but redirect users elsewhere.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "DuckDuck Go",
        txt: "A privacy-focused search engine that doesn’t track users.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Duplicate Content",
        txt: "Content appearing on multiple URLs, which can lead to SEO penalties.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Dynamic Content",
        txt: "AI-powered personalized content that changes based on user behavior.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Dwell Time",
        txt: "The amount of time users spend on a page before bouncing back.",
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
        title: "E-commerce",
        txt: "Businesses selling products or services directly to customers.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "E-E-A-T",
        txt: "Experience, Expertise, Authoritativeness, Trustworthiness, Google’s ranking factor that evaluates content credibility.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Editorial Link",
        txt: "A backlink earned naturally because your content is actually useful.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Engagement Metrics",
        txt: "Metrics like time on page, CTR, and bounce rate that indicate user interaction.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Engagement Rate",
        txt: "A metric that measures the level of interaction users have with content, typically calculated based on clicks, shares, comments, or time spent on a page.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Enterprise SEO",
        txt: "SEO at a massive scale, usually for big corporations with thousands of pages.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Entity",
        txt: "A specific person, place, thing, or concept that search engines recognize.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Entity Recognition in SEO",
        txt: "Identification of key entities in search queries, could be AI driven.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Entity SEO",
        txt: "Optimizing for Google’s understanding of topics, relationships, and sentiments not just keywords.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Events",
        txt: "User interactions tracked on a website, such as clicks, form submissions, or video plays.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Event Tags",
        txt: "Snippets of code that categorize and label specific user interactions for tracking in analytics tools.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Event Tracking",
        txt: "A method in analytics that monitors user interactions with specific website elements, such as button clicks, downloads, video plays, and form submissions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Event Triggers",
        txt: "Conditions that activate event tracking when a user performs a specific action, like clicking a button.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Event Variables",
        txt: "Dynamic values associated with events, providing context such as click text, URL, or time spent before interaction.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Exact Match Keywords",
        txt: "Keywords that match a search query exactly, sometimes to the point of sounding robotic.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "External Link",
        txt: "A hyperlink pointing to a different website.",
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
        title: "Favicon",
        txt: "That tiny icon in your browser tab that makes a website look legit.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Federated Learning in SEO",
        txt: "AI model training that improves search personalization without sharing user data.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Featured Snippet",
        txt: "A highlighted search result that provides a direct answer to a query.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Fetch as Google",
        txt: "A Google Search Console tool for indexing new pages.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Findability",
        txt: "How easily users (and Google) can track down your content. If they can’t, you’re basically invisible.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "First Input Delay",
        txt: "Measures responsiveness of a web page (Core Web Vitals metric).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Focus Keyword",
        txt: "The main keyword targeted in SEO content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Footer Link",
        txt: "A link buried at the bottom of a page which is sometimes useful, sometimes just SEO padding.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Footprint",
        txt: "A pattern in SEO strategies that search engines can detect.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Freshness Algorithm",
        txt: "Google’s algorithm that favors recent content for some queries.",
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
        title: "Google",
        txt: "The world’s most popular search engine, used to find information online.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Ads",
        txt: "Google’s advertising platform where businesses bid on keywords to display paid search, display, and video ads.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Algorithm Update",
        txt: "Changes to Google’s search ranking system.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Analytics",
        txt: "Google’s latest analytics tool that tracks user behavior and SEO performance.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Bomb",
        txt: "A practice of manipulating search engine rankings by linking a specific phrase to an unrelated webpage.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Googlebot",
        txt: "Google’s web crawler responsible for indexing websites.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Dance",
        txt: "The period of fluctuation in search rankings when Google updates its index.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Helpful Content Update",
        txt: "Algorithm update that prioritizes content created for users over search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Hummingbird",
        txt: "A major search algorithm update from 2013, aimed at understanding the intent behind queries rather than just matching keywords.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Keyword Planner",
        txt: "A free tool by Google for researching and analyzing keywords for SEO and PPC campaigns.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Knowledge Graph",
        txt: "Google’s AI-powered database that connects facts about entities.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google My Business",
        txt: "Now Google Business Profile, a listing for local businesses.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Organic Shopping",
        txt: "Free product listings that appear in Google Shopping results, driven by organic search rather than paid ads.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Panda Algorithm",
        txt: "A Google update designed to lower the rankings of low-quality or thin content sites.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Penguin Algorithm",
        txt: "A Google update that targets and penalizes websites using manipulative link-building tactics.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Pigeon Update",
        txt: "A Google update aimed at improving the accuracy and relevance of local search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google RankBrain",
        txt: "AI algorithm that helps process search results and understand user intent.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Sandbox",
        txt: "A hypothesized filter that temporarily prevents new websites from ranking well in search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Search Console",
        txt: "A free tool for monitoring website performance in search results and indexing insights.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google SEO",
        txt: "The process of optimizing a website to rank higher in Google’s search results using organic strategies.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google SEO Agency",
        txt: "A company specializing in improving website rankings on Google through SEO services.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google SEO Consultant",
        txt: "An SEO professional who provides expert advice and strategies for improving a website’s visibility on Google.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google SEO Expert",
        txt: "An individual with extensive knowledge and experience in optimizing websites for Google’s search algorithm.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google SEO Service",
        txt: "A range of SEO solutions designed to improve a website’s ranking and visibility specifically on Google.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "GTM",
        txt: "Google Tag Manager, a tool that simplifies adding and managing marketing tags (like tracking codes and pixels) on a website without modifying the site’s code directly.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Trends",
        txt: "A search trends tool that analyzes the popularity of search queries over time.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Google Webmaster Guidelines",
        txt: "A set of best practices provided by Google to help websites rank better and avoid penalties.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Gray Hat SEO",
        txt: "SEO practices that are riskier than White Hat SEO but not as unethical as Black Hat SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Guest Blogging",
        txt: "Writing content for another website to earn backlinks.",
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
        title: "HARO",
        txt: "Help a Reporter Out, a platform that connects journalists with sources, allowing businesses and individuals to earn media coverage and backlinks by providing expert insights.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Head Term",
        txt: "A broad, high-volume keyword that serves as a main target search term or keyword.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Heading",
        txt: "A text element in HTML used to structure content and improve readability.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Heading Tags",
        txt: "H1, H2, H3, etc., HTML tags that structure web content and improve SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Headline",
        txt: "The main title of a webpage or article, designed to attract attention.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hidden Text",
        txt: "SEO manipulation by hiding keywords, considered a black hat tactic.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Homepage",
        txt: "The main landing page of a website, typically the starting point for navigation.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Homepage Authority",
        txt: "The ranking strength of a website’s homepage.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hreflang Tag",
        txt: "An HTML tag used for multilingual SEO to indicate language targeting.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "HTML",
        txt: "HyperText Markup Language, the standard coding language used to structure web pages.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "HTML Sitemap",
        txt: "A web page listing a site’s key pages to enhance navigation.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "htaccess File",
        txt: "A configuration file for servers running Apache that controls settings like redirects and access permissions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "HTTP",
        txt: "HyperText Transfer Protocol, a protocol for transferring data between a web server and a browser.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "HTTPS",
        txt: "HyperText Transfer Protocol Secure, a secure version of HTTP that encrypts data using SSL/TLS.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hub Page",
        txt: "A central webpage that links to multiple related resources on a website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hype Page",
        txt: "A promotional webpage designed to generate excitement around a product or event.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hyperlink",
        txt: "A clickable link leading to another webpage.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Hypertext",
        txt: "Text with embedded links that allow users to navigate between documents or websites.",
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
        title: "Image SEO",
        txt: "Optimization of images using alt text, filenames, and compression.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Inbound Link",
        txt: "Another term for a backlink.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Index",
        txt: "A database where search engines store and organize webpages for retrieval.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Indexability",
        txt: "The ability of a webpage to be crawled and added to a search engine’s index.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Indexed Page",
        txt: "A webpage that has been crawled and stored in a search engine’s index, making it eligible to appear in search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Indexing",
        txt: "The process where search engines store and organize content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Information Architecture",
        txt: "The structuring and organization of content on a website to improve usability and findability.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Information Retrieval",
        txt: "The process of searching and retrieving relevant information from a database, such as a search engine’s index.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Intent-Based SEO",
        txt: "Using AI to determine user search intent and optimize content accordingly.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Internal Link",
        txt: "Linking to other pages within the same website to enhance SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Internal Linking",
        txt: "Linking to pages within the same website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "IP Address",
        txt: "The numerical address of a website or server.",
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
        title: "JavaScript",
        txt: "A programming language used to create interactive and dynamic elements on websites, such as animations, pop-ups, and real-time updates.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "JavaScript SEO",
        txt: "Optimizing websites that use JavaScript to ensure search engines can crawl and index them.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Junk Traffic",
        txt: "Irrelevant traffic that doesn’t contribute to conversions.",
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
        title: "Keyword",
        txt: "A word or phrase that users type into search engines to find relevant content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Analysis",
        txt: "The process of researching and evaluating keywords to determine their relevance, competition, and potential for driving traffic.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Cannibalization",
        txt: "When multiple pages on the same site compete for the same keyword, reducing rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Clustering",
        txt: "Grouping of related keywords to improve content strategy.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Density",
        txt: "The percentage of times a keyword appears in content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Difficulty",
        txt: "A measure of how hard it is to rank for a particular keyword based on competition and search engine algorithms.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Lists",
        txt: "A collection of keywords grouped for SEO or PPC campaigns to target specific search queries.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Metrics",
        txt: "Data points that measure a keyword’s performance, such as search volume, competition, and CPC.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Modifiers",
        txt: "Additional words added to a base keyword to refine search intent, like ‘best,’ ‘cheap,’ or ‘near me.’",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Performance Analysis",
        txt: "The assessment of how well a keyword is performing in terms of rankings, traffic, conversions, and overall SEO impact.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Position",
        txt: "The exact rank of a webpage in search results for a particular keyword.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Position Tracking",
        txt: "The process of monitoring changes in keyword rankings over time.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Ranking",
        txt: "The position a webpage holds in search engine results for a specific keyword.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Research",
        txt: "The process of finding and analyzing relevant search terms.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Stuffing",
        txt: "Additional words added to a base keyword to refine search intent, like ‘best,’ ‘cheap,’ or ‘near me.’",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Value",
        txt: "The estimated worth of a keyword based on its ability to drive traffic and conversions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Keyword Volume",
        txt: "The estimated number of searches a keyword receives within a specific timeframe, usually measured monthly.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Knowledge Graph",
        txt: "Google’s information panel displaying structured search data.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Knowledge Panel",
        txt: "The information box that appears in Google search results for certain queries.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "KPI",
        txt: "Key performance indicator that indicates how well an SEO campaign or marketing effort is achieving its goals.",
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
        title: "Landing Page",
        txt: "A web page designed for conversions or marketing campaigns.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Latent Semantic Indexing",
        txt: "Google’s method of understanding related keywords.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Lead",
        txt: "A potential client or customer who has shown interest in a product or service, often by providing contact information.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Lead Generation",
        txt: "The process of attracting and capturing potential customers’ interest in a product or service.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Lead Scraping",
        txt: "The process of extracting contact details from websites for marketing or sales purposes, often automated.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link",
        txt: "A connection between two web pages that allows users (and search engines) to navigate from one to another.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Acquisition",
        txt: "The process of obtaining backlinks from other websites to improve search engine rankings, typically through outreach, content marketing, or digital PR.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Bait",
        txt: "Content designed to attract backlinks naturally because it is highly valuable, controversial, or entertaining.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Building",
        txt: "The process of acquiring backlinks to improve a website’s authority and improve ranking.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Building Campaign",
        txt: "A strategic effort to acquire high-quality backlinks to improve a website’s search engine rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Equity",
        txt: "Link juice, the value passed from one page to another via backlinks.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Exchange",
        txt: "The practice of trading backlinks between websites to boost SEO, often discouraged by search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Farm",
        txt: "A group of websites that excessively link to each other in an attempt to manipulate search rankings, considered a black-hat SEO tactic.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Insertion",
        txt: "Adding a backlink into existing content on another website to improve SEO and referral traffic.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Profile",
        txt: "The overall collection of backlinks pointing to a website, including their quality, quantity, and relevance.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Link Velocity",
        txt: "The rate at which a website gains or loses backlinks over time, which can indicate natural growth or spammy tactics.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Local SEO",
        txt: "Optimizing for location based searches, including Google Business Profile optimization.",
        btntxt: "Local SEO",
        btnlink: "/what-is-local-seo",
      },
      {
        title: "Local SEO Agency",
        txt: "A company specializing in improving local search rankings for businesses.",
        btntxt: "Local SEO Agency",
        btnlink: "/local-seo-service",
      },
      {
        title: "Local SEO Consultant",
        txt: "An individual who provides strategic guidance on improving local search rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Local SEO Consulting",
        txt: "The practice of advising businesses on how to enhance their local search presence.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Local SEO Expert",
        txt: "A professional with specialized knowledge in optimizing businesses for local search visibility.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Local SEO Service",
        txt: "A service that optimizes a business’s online presence to rank better in local search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Log File",
        txt: "A server-generated file that records all requests made to a website, useful for analyzing crawling behavior and technical SEO issues.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Log File Analysis",
        txt: "Examining server logs to understand how search engine bots crawl a site.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Long-Tail Keywords",
        txt: "Specific, longer search queries with lower competition.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "LSI Keywords",
        txt: "Latent Semantic Indexing Keywords, terms and phrases related to a primary keyword that help search engines understand content context.",
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
        title: "Machine Learning",
        txt: "A type of artificial intelligence that enables algorithms to improve automatically through experience, often used by search engines to refine rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Machine Learning in SEO",
        txt: "AI-driven learning that improves search rankings based on user behavior.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Manual Action",
        txt: "A penalty applied by Google when a website violates its Webmaster Guidelines, usually requiring corrective action and a reconsideration request.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Meta Description",
        txt: "A short description or a brief summary of a page appearing in search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Meta Keywords",
        txt: "A once-popular but now obsolete meta tag used to list keywords for a page, largely ignored by search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Meta Tags",
        txt: "Snippets of HTML code that provide metadata about a webpage, such as title tags and meta descriptions, to help search engines understand content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Metric",
        txt: "A quantifiable measurement used to assess SEO performance, such as organic traffic, bounce rate, or keyword rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Mobile-First Indexing",
        txt: "Google prioritizing the mobile version of a site for ranking.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "MozRank",
        txt: "A metric predicting a page’s ranking strength.",
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
        title: "NAP",
        txt: "Name, Address, Phone Number; Essential for local SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Natural Language Processing in SEO",
        txt: "AI technology that helps search engines understand human language.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Natural Link",
        txt: "A backlink that is earned organically without being paid for or manipulated, typically because the content is valuable.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Negative Keyword",
        txt: "A keyword used in PPC campaigns to prevent ads from showing for irrelevant searches, helping refine targeting.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Negative SEO",
        txt: "Malicious tactics aimed at harming a competitor’s rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Niche",
        txt: "A specific topic or market segment that a website or business focuses on, often with less competition but a highly targeted audience.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Nofollow Attribute",
        txt: 'An HTML tag, rel="nofollow" that tells search engines not to pass link equity to the linked page, often used for sponsored or user-generated content.',
        btntxt: "",
        btnlink: "",
      },
      {
        title: "NoFollow Link",
        txt: "A link that doesn’t pass SEO value to the linked page.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Noindex Tag",
        txt: "A directive telling search engines not to index a page.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Noarchive Tag",
        txt: "A directive that prevents search engines from storing a cached version of a webpage in search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Nosnippet Tag",
        txt: "A meta tag that prevents search engines from displaying a snippet (preview text) of a page in search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Not Provided",
        txt: "A term used in Google Analytics when organic keyword data is hidden due to HTTPS encryption, making it unavailable to website owners.",
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
        title: "Off-Page SEO",
        txt: "Activities like link building that impact SEO but occur outside the website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "On-Page SEO",
        txt: "Optimizing website content, structure, and HTML elements for search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "ORM",
        txt: "Online Reputation Management, the process of monitoring and improving how a brand or individual is perceived online.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Organic Keywords",
        txt: "Search terms that drive unpaid traffic to a website from search engine results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Organic Lead",
        txt: "A potential customer who finds your business through unpaid channels like search engines, or content marketing.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Organic Lead Generation",
        txt: "The process of attracting potential customers naturally through SEO, content marketing, and social media rather than paid ads.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Organic Search",
        txt: "Unpaid search engine results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Organic SEO Services",
        txt: "A professional service that improves a website’s search rankings naturally through content optimization, technical SEO, and link building, helping businesses attract traffic without paid ads.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Organic Shopping",
        txt: "Product listings that appear in search results without paid promotion, based on SEO and relevance.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Organic Traffic",
        txt: "Visitors that arrive at a website through unpaid search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Orphan Page",
        txt: "A page with no internal links pointing to it.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Outbound Link",
        txt: "A hyperlink that directs users from your website to another website.",
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
        title: "PBN",
        txt: "Private Blog Network, a network of websites used to manipulate rankings by linking to a target site.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "PDF",
        txt: "Portable Document Format, a file format that preserves document formatting across devices.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "PPC",
        txt: "Pay-Per-Click, a paid advertising model where businesses pay for each click on their ad.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "PHP",
        txt: "Hypertext Preprocessor, a server-side scripting language used for dynamic websites.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Page Authority",
        txt: "A metric predicting a page’s ranking potential.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Page Rank",
        txt: "Google’s algorithm for ranking webpages based on link authority.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Page Speed Insights",
        txt: "A tool which checks how fast a website loads.",
        btntxt: "",
        btnlink: "",
      },

      {
        title: "Page View",
        txt: "A single visit to a webpage, counted each time it loads.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "PageSpeed",
        txt: "A site’s loading speed, impacting SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Paid Search",
        txt: "Sponsored search results where businesses pay for clicks or impressions.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Parent Keyword",
        txt: "A broad, overarching keyword that serves as the main term under which related long-tail keywords fall. It provides context for SEO strategies.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Parent Page",
        txt: "A higher-level webpage in a site’s hierarchy that contains or links to subpages (child pages). It helps structure content logically.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Penalty",
        txt: "A ranking drop due to guideline violations.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "People Also Ask",
        txt: "Google’s AI-powered related questions feature in SERPs.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Permalink",
        txt: "A permanent URL assigned to a specific webpage or blog post, designed to remain unchanged for easy linking and sharing.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Permanent Link",
        txt: "Another term for Permalink, referring to a stable, unchanging URL that points to a specific webpage or post.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Persona",
        txt: "A fictional representation of an ideal customer based on research and data.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Personalization",
        txt: "Search engine customization of results based on user behavior, location, and preferences.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Piracy",
        txt: "Unauthorized use or distribution of digital content, often leading to SEO penalties.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Pogo-Sticking",
        txt: "Users quickly bouncing back to search results after clicking a page.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Position",
        txt: "The ranking of a webpage in search engine results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Primary Keyword",
        txt: "The main keyword a webpage is optimized for, representing the core topic and most important search term for ranking in search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Programmatic SEO",
        txt: "Using AI to scale SEO strategies with automation.",
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
        title: "Quality Deserves Freshness",
        txt: "A Google algorithm that prioritizes newer content for queries related to trending or time-sensitive topics.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Quality Content",
        txt: "Content that is well researched, relevant, useful, accurate, valuable and engaging for users, often leading to better rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Quality Link",
        txt: "A backlink from a high-authority, relevant, and trustworthy website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Quality Score",
        txt: "A Google Ads metric that measures the relevance of an ad, keywords, and landing page, affecting ad rankings and costs.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Query",
        txt: "A search term entered into a search engine.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Query Intent",
        txt: "The reason behind a user’s search.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Question Keywords",
        txt: 'Search queries phrased as questions, typically including words like “what,” “how,” “why,” or “where.”',
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
        title: "Rank",
        txt: "The position a webpage holds in search engine results for a given query, search term, or keyword.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Rank Tracking",
        txt: "The process of monitoring a website’s position in search results for specific keywords over time.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Ranking Factors",
        txt: "Criteria used by search engines to determine a webpage’s position in search results (e.g., content quality, backlinks, site speed).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "RankBrain",
        txt: "Google’s AI-based ranking algorithm.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Reciprocal Links",
        txt: "A link exchange between two websites, often for mutual SEO benefit.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Redirect",
        txt: "A URL forwarding users to another page (e.g., 301, 302 redirects).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Referral Traffic",
        txt: "Website visits that come from external sources, excluding search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Referrer",
        txt: "The website or source that directs visitors to another website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Referring Domain",
        txt: "A website that provides backlinks to another site.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Referring Page",
        txt: "A specific page on a website that contains a backlink to another site.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Reinclusion",
        txt: "The process of requesting Google to reconsider indexing a website after it was removed (often due to a penalty).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Relevance",
        txt: "How closely a webpage’s content matches a search query, influencing rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Reputation Management",
        txt: "The practice of monitoring and influencing how a brand or individual is perceived online.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Responsive Website",
        txt: "A website that adapts its layout and design to different screen sizes for optimal user experience.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Return on Investment",
        txt: "A measure of profitability that evaluates the effectiveness of an SEO campaign relative to its cost.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Rich Snippets",
        txt: "Enhanced search results that display extra information (e.g., ratings, reviews, images) pulled from structured data.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Robots.txt",
        txt: "A text file that tells search engines which pages or sections of a website they are allowed (or not allowed) to crawl.",
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
        title: "Schema Markup",
        txt: "Structured data that helps search engines understand content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Scrape",
        txt: "The process of extracting data from a website, often using automated tools.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Search Engine",
        txt: "A system (e.g., Google, Bing) that indexes and retrieves web pages based on queries.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Search History",
        txt: "A record of past searches performed by a user.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Search Intent",
        txt: "The purpose behind a search query.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Search Volume",
        txt: "The number of times a keyword is searched within a specific time frame.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Seed Keyword",
        txt: "A basic, broad keyword used as a starting point for keyword research.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEM",
        txt: "Search Engine Marketing, a broader marketing strategy that includes both SEO and paid search advertising.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO",
        txt: "Search Engine Optimization, the process of optimizing a website to improve its visibility on search engines.",
        btntxt: "",
        btnlink: "",
      },

      {
        title: "SEO Agency",
        txt: "A company that specializes in providing SEO services.",
        btntxt: "SEO Agency",
        btnlink: "/seo-agency",
      },
      {
        title: "SEO Business",
        txt: "A company that offers SEO-related products or services.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Campaign",
        txt: "A planned effort to improve a website’s search rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Company",
        txt: "Another term for an SEO agency or business.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Consultant",
        txt: "A professional who provides SEO strategy and guidance.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Consulting",
        txt: "The service of providing expert SEO advice.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Content Writing",
        txt: "Writing long form content that is both user-friendly and search engine optimized.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Copywriting",
        txt: "Writing persuasive content that is optimized for search rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Cost",
        txt: "The price of SEO services, which varies based on scope and provider.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Expert",
        txt: "An individual skilled in optimizing websites for search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Hosting",
        txt: "A type of hosting that helps with SEO by using multiple IP addresses and locations.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Keywords",
        txt: "Words and phrases targeted to improve a website’s ranking in search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Manager",
        txt: "A professional responsible for overseeing and implementing SEO strategies.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Marketing",
        txt: "The practice of using SEO strategies as part of a digital marketing campaign.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Report",
        txt: "A document detailing a website’s SEO performance, rankings, and recommendations.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Score",
        txt: "A numerical representation of how well a website follows SEO best practices.",
        btntxt: "Free SEO Score Checker",
        btnlink: "/free-seo-score-checker",
      },
      {
        title: "SEO Service",
        txt: "Professional services that improve a website’s ranking on search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Specialist",
        txt: "An individual focused on optimizing websites for search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Web Design",
        txt: "Web design that incorporates SEO best practices for better rankings.",
        btntxt: "Website Design",
        btnlink: "/website-design-services",
      },
      {
        title: "Semantic Web Search",
        txt: " A search method that understands context and intent rather than just matching keywords",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SEO Writing",
        txt: "Content creation with a focus on optimizing for search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Semantic SEO",
        txt: "The process of optimizing content to improve search engines’ understanding of context and meaning rather than just keywords.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Semantic SEO Service",
        txt: "A specialized SEO service focused on improving a website’s visibility by optimizing for meaning, intent, and topic clusters rather than just keywords.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SERP",
        txt: "The page displaying search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Share of Voice",
        txt: "A metric that compares a brand’s visibility in search results to competitors.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Short-Tail Keyword",
        txt: "A broad, high-competition keyword with high search volume.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Shopify",
        txt: "A popular e-commerce platform that allows businesses to create and manage online stores.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Shopify Development",
        txt: "The creation, customization, and enhancement of Shopify stores, including themes, apps, and functionality.",
        btntxt: "Shopify Development",
        btnlink: "/shopify-website-development-services",
      },
      {
        title: "Shopify Developer",
        txt: "A professional who builds, customizes, and optimizes Shopify stores for businesses.",
        btntxt: "Shopify Development",
        btnlink: "/shopify-website-development-services",
      },
      {
        title: "Shopify SEO",
        txt: "The process of optimizing a Shopify store to rank higher in search engines and drive organic traffic.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Sitemap",
        txt: "A file listing website URLs for search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Sister Website",
        txt: "A website that is owned by the same company or entity as another website, often sharing a similar brand, audience, or purpose but operating independently (e.g., different regional versions of a brand or complementary services).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Sitelinks",
        txt: "Additional links that appear under a website’s main search result.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Sitewide Links",
        txt: "Links that appear on every page of a website, such as in the footer.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Social Media",
        txt: "Online platforms where users share content and engage with others.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Social Sharing",
        txt: "The act of sharing content on social media platforms.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Social Signals",
        txt: "Engagement metrics (likes, shares, comments) that may influence SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Source Code",
        txt: "The underlying code of a webpage written in HTML, CSS, JavaScript, etc.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Spam",
        txt: "Low-quality, manipulative content or links intended to game search rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Spider",
        txt: "A search engine bot that crawls and indexes web pages.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Split Testing",
        txt: "A/B testing different elements of a website to determine effectiveness.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Squarespace",
        txt: "A website builder and hosting platform that allows users to create visually appealing websites with drag-and-drop functionality.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "SSL Certificate",
        txt: "Security encryption that improves SEO rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Status Codes",
        txt: "HTTP response codes indicating the status of a webpage (e.g., 404, 301).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Stop Word",
        txt: 'Common articles, pronouns and conjunctions (e.g., "the," "and," "is") that search engines may ignore.',
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Sub Domain",
        txt: "A section of a website that operates as a separate entity (e.g., blog.example.com).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Syndication",
        txt: "The process of republishing or distributing content across multiple websites or platforms to reach a larger audience.",
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
        title: "TAT",
        txt: "Turnaround Time, the time taken to complete a task, often used in SEO for content creation or link-building deadlines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Taxonomy",
        txt: "The classification system used to organize website content, typically seen in categories and tags.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Thin Content",
        txt: "Low-quality or insufficient content that provides little to no value to users.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Thumbnail",
        txt: "A small, compressed version of an image used as a preview or navigation aid.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Time on Page",
        txt: "The amount of time a visitor spends on a webpage before leaving.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Title Tag",
        txt: "An HTML element that defines the title of a webpage, critical for SEO and user engagement.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "TLD",
        txt: "Top-Level Domain, the last segment of a domain name, like .com, .org, or .net.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Traffic",
        txt: "The number of visitors to a website, categorized as organic, direct, referral, or paid.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Trust",
        txt: "A measure of a website’s credibility and authority in the eyes of users and search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Trust Factor",
        txt: "Various signals (such as backlinks and content quality) that contribute to a website’s trustworthiness.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "TrustRank",
        txt: "A search engine algorithm designed to filter out spammy sites by evaluating the trustworthiness of links.",
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
        title: "UGC",
        txt: "User Generated Content is created by users rather than the website owner, such as comments and reviews.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Unnatural Link",
        txt: "A link that appears manipulative or spammy, often leading to penalties from search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Universal Search",
        txt: "A Google feature that blends results from multiple sources (e.g., images, videos, news) into a single search results page.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "URL",
        txt: "Uniform Resource Locator, the web address that directs users to a specific webpage.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "URL Parameter",
        txt: "A query string in a URL used to track information (e.g., ?utm_source=google).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "URL Slug",
        txt: "The part of a URL that comes after the domain, often optimized for SEO (e.g., example.com/seo-guide).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "URL Structure",
        txt: "The format of a website’s URLs, which should be clean, organized, and SEO-friendly.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Usability",
        txt: "The ease with which users can navigate and interact with a website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "User Agent",
        txt: "A browser or bot identifier that communicates with a website’s server.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "User Experience",
        txt: "The overall experience and satisfaction a user has when interacting with a website.",
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
        title: "Vanity URL",
        txt: "A custom, easy-to-remember URL, often branded, used for marketing purposes (e.g., yourbrand.com/bestdeals).",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Vertical Search",
        txt: "A search engine that focuses on a specific industry or niche, like travel, images, or shopping.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Virtual Assistant",
        txt: "An AI-powered tool or software (e.g., Siri, Alexa) that helps users with tasks, including voice searches.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Visibility",
        txt: "How often a website appears in search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Voice Search SEO",
        txt: "Optimization for voice-based queries.",
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
        title: "Web App SEO",
        txt: "The process of optimizing web applications for search engines to improve visibility, indexing, and ranking in search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Web App SEO Service",
        txt: "A professional service that optimizes web applications for search engines, improving their visibility, indexability, and ranking through technical SEO.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Webflow",
        txt: "A no-code website builder that allows users to design, build, and launch responsive websites with visual editing tools.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Webpage",
        txt: "A single page on the internet, typically part of a larger website, accessed via a URL and can be viewed in a browser.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Website",
        txt: "A collection of web pages hosted under a domain, serving information, services, or products.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Website Navigation",
        txt: "The structure and links that help users move through a website efficiently.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Webmaster Guidelines",
        txt: "SEO best practices provided by search engines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Webspam",
        txt: "Manipulative or low-quality content designed to game search engine rankings.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Whitelabel",
        txt: "A service or product provided by one company but rebranded and resold by another.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Whitelabel SEO",
        txt: "SEO services provided by an agency but rebranded for another company to sell as its own.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Whitelabel SEO Agency",
        txt: "A company that provides SEO services that other agencies can brand as their own.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Whitelabel SEO Service",
        txt: "A fully managed SEO service offered under a reseller’s brand, often for agencies.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "White Hat SEO",
        txt: "Ethical SEO tactics aligning with guidelines.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Word Count",
        txt: "The total number of words in a piece of content, often considered in SEO for ranking quality.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Wordpress",
        txt: "A popular content management system (CMS) used for building and managing websites.",
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
        title: "X-Default Tag",
        txt: "A hreflang attribute used to signal to search engines which page should be shown when no language or region matches the user’s preference.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "X-Robots-Tag",
        txt: "A directive in the HTTP header that controls how search engines index and follow a page, similar to meta robots tags.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "XML",
        txt: "Extensible Markup Language used to structure and store data in a readable format, commonly used in SEO for XML Sitemaps to help search engines index website content efficiently.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "XML Sitemap",
        txt: "A file that helps search engines understand the structure of a website and index its pages more efficiently.",
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
        title: "Yahoo",
        txt: "A search engine that was once a major player but now relies on Bing for search results.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Yandex",
        txt: "The most popular search engine in Russia, with its own ranking algorithms.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "YMYL",
        txt: "Your Money, Your Life Pages, Google’s classification for pages that impact a person’s financial stability, health, or safety, requiring high-quality content.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "YouTube SEO",
        txt: "The process of optimizing videos to rank higher in YouTube search results and Google video search.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Yelp SEO",
        txt: "Optimization techniques used to improve visibility on Yelp, especially for local businesses.",
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
        title: "Zero-Click Search",
        txt: "A search result where users get the information they need directly on the SERP (e.g., featured snippets, knowledge panels) without clicking a website.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Zero-Search Volume Keywords",
        txt: "Keywords that have little to no reported search volume but may still drive valuable traffic.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Zombie Pages",
        txt: "Low-quality or outdated pages on a website that get little to no traffic and can hurt SEO performance.",
        btntxt: "",
        btnlink: "",
      },
      {
        title: "Z-index",
        txt: "A CSS property that affects the layering of elements on a webpage but can indirectly impact user experience and SEO.",
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
                <h1>SEO Glossary: 400+ SEO Terms Explained</h1>
              </div>
            </Col>
            <Col md={12}>
              <h2>SEO Terms You Pretend to Understand</h2>
              <p>
                SEO experts love to toss around fancy terms like they’re the
                cool kids in class, and you’re just sitting there with no clue
                what &quot;canonical tags&quot; even mean. It’s a constant game
                of &quot;who can sound more like a robot,&quot; and the last
                thing you need is to be left behind while they geek out over
                their keyword research. Don’t worry though, we’ve broken it all
                down so you can sound just as smart without the confusion. Time
                to stop nodding like you get it when you actually don’t.
              </p>
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
                    className={`${styles.glossaryItem} ${
                      activeLetter === item.letter ? styles.active : ""
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
