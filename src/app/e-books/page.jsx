"use client";
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "@/styles/single-blog/ebook.module.scss"
import Events from '@/src/app/e-books/events';
import Image01 from "media/pdfpopup/seo/Image_01.webp"
import CtaForm from "@/src/app/home/ctaform";
import { CallActionData } from "@/src/app/home/data/data";
import BlogCase from "@/src/app/blogs/blogcase";


const SeoData = [
  {
    img: Image01.src,
    title: "Is Your Brand Visible in ChatGPT, Gemini and Claude",
    time: "11:00 AM",
    date: "August 18-21, 2025",
    location: "Augusta, GA",
    file: "/is-your-brand-visible-in-chatgpt-gemini-and-claude.pdf",
    txt: "your budget is tight? We think it’s just right! At Infiniti Digital, we turn every dollar into results with paid marketing strategies that pack a punch. No fluff, no waste—just campaigns that drive clicks, conversions, and smiles."
  }
]


const Page = () => {
  const [activeTab, setActiveTab] = useState('1');

  const tabs = [
    { id: '1', label: 'Search Engine Optimization', content: <Events data={SeoData} /> },
    // { id: '2', label: 'Social Media Marketing', content: "SMM" },
    // { id: '3', label: 'development', content: "development" },
  ];

  return (
    <>
      <section className={styles.ebookSection}>
        <Container>
          <Row>
            <Col md={8} className="text-center m-auto">
              <div className="subtitle">Our Ebook</div>
              <h2>The Master Blueprint for Digital Excellence</h2>
              <p>Go beyond the basics. This ebook is your key to advanced digital marketing and development. It contains actionable guides, successful footprints, and master ideas that will empower you to build a powerful online presence and achieve unparalleled growth.</p>
            </Col>
            <Col md={12}>
              <div className={styles.tabHeader}>
                {tabs.map(tab => (
                  <div className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span>{tab.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.tabContent}>
                {tabs.find(tab => tab.id === activeTab)?.content}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BlogCase />
      <CtaForm data={CallActionData} />
    </>
  );
};

export default Page;
