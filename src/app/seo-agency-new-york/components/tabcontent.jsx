"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/seo-agency-new-york/tabcontent.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const tabsData = [
    {
        id: "section1",
        title: "What makes Infiniti Digital the best SEO agency in New York?",
        content: (<>
            <p>At Infiniti Digital, we’re not just another New York SEO company, we’re your growth partner.</p>
            <p>What sets us apart is our commitment to delivering strategies that are tailored, transparent, and results-driven. Unlike agencies that recycle the same tactics, we study your business model, competitors, and audience before creating a plan designed for success. As a trusted search engine optimization firm New York businesses rely on, we combine proven SEO techniques with the latest innovations in digital marketing.</p>
            <p>Whether you need an experienced SEO consultant in New York City or ongoing SEO consulting NYC, Infiniti Digital ensures your brand doesn’t just rank higher you attract the right customers, build authority, and grow revenue consistently.</p>
        </>)

    },
    {
        id: "section2",
        title: "How does Infiniti Digital ensure long-term SEO success for businesses in NYC?",
        content: (<>
            <p>Search engine optimization isn’t about quick wins — it’s about building a foundation for sustainable growth. At Infiniti Digital, we focus on white-hat practices that stand the test of time. </p>
            <p>From technical optimization to content marketing and link-building, our strategies deliver value today and continue working months and years down the road. As a trusted search engine optimization company in NYC and a leading search engine optimization company in New York, we ensure your brand stays competitive with proven SEO optimization solutions</p>
            <p>With dedicated SEO consultants in New York, you’ll receive regular updates, clear reports, and adaptive strategies that evolve with algorithm changes, industry shifts, and your business goals. Choosing Infiniti Digital means choosing a partner invested in long-term success</p>
        </>)

    },
    {
        id: "section3",
        title: "Why should I trust Infiniti Digital over other SEO companies in NYC?",
        content: (<>
            <p>The SEO industry is crowded, and it’s easy to feel lost choosing the right partner. Infiniti Digital stands out because we prioritize transparency and accountability. </p>
            <p>Our clients receive detailed reports showing exactly where traffic, rankings, and leads are coming from. You’ll never be left guessing — every number is explained, every decision backed by data. </p>
            <p>We’ve worked with businesses of all sizes across New York City, from local shops using our local SEO services in New York to global brands seeking enterprise-level campaigns. As a trusted SEO company in NY, we deliver measurable results.</p>
            <p>Recognized as a leading SEO New York City partner and respected search engine optimization NYC agency, our results speak for themselves: higher rankings, stronger visibility, and real revenue growth. That’s why clients stay with us year after year.</p>
        </>)

    },
    {
        id: "section4",
        title: "Can Infiniti Digital handle both small local businesses and large enterprises?",
        content: (<>
            <p>Absolutely. Infiniti Digital is built to serve both local NYC businesses and large-scale corporations.</p>
            <p>If you’re a small business owner, our SEO service agency provides tailored local SEO services in New York that make it easy for nearby customers to find you on Google Maps, local searches, and “near me” results. </p>
            <p>For enterprises, we bring deep technical expertise, large-scale content optimization, and powerful link-building campaigns to help you dominate highly competitive markets. Recognized as the best SEO company in New York that brands trust, we’re also a results-driven SEO New York company with the expertise and flexibility to scale solutions for startups, local shops, and global corporations alike.</p>
        </>)

    },
    {
        id: "section5",
        title: "What unique advantages does Infiniti Digital bring to SEO in New York?",
        content: (<>
            <p>When you partner with Infiniti Digital, you gain more than an SEO provider — you gain a growth partner. Unlike any other local SEO company NYC businesses rely on, we bring:</p>
            <ul>
                <li><strong>Proven Expertise:</strong> Backed by years of results across industries.</li>
                <li><strong>Tailored Strategies:</strong> No cookie-cutter plans, only custom campaigns.</li>
                <li><strong>Transparent Reporting:</strong> Clear insights on performance and ROI.</li>
                <li><strong>Full-Service Team:</strong> Technical SEO, content, and link building covered.</li>
                <li><strong>Client-Centric Approach:</strong> Your growth is our mission.</li>
            </ul>
            <p>With a trusted NYC search engine optimization expert, recognized among the top New York City SEO companies, Infiniti Digital sets itself apart. As the New York SEO company best-rank businesses look for, we go beyond typical SEO consultants New York or a generic service SEO company — we deliver strategies that put your business ahead.</p>
        </>)

    },

];

const TabContent = () => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const sectionRefs = useRef({});

    // ScrollSpy effect
    useEffect(() => {
        const handleScroll = () => {
            let current = activeTab;

            tabsData.forEach((tab) => {
                const element = sectionRefs.current[tab.id];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = tab.id;
                    }
                }
            });

            setActiveTab(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeTab]);

    // Smooth scroll on click
    const handleClick = (id) => {
        const section = sectionRefs.current[id];
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className={`${styles.tabSection} p-100`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabWapper}>
                            <div className={styles.tabTitle}>
                                <ul>
                                    {tabsData.map((tab) => (
                                        <li
                                            key={tab.id}
                                            className={activeTab === tab.id ? styles.active : ""}
                                            onClick={() => handleClick(tab.id)}
                                        >
                                            {tab.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.tabContent}>
                                {tabsData.map((tab) => (
                                    <div
                                        key={tab.id}
                                        id={tab.id}
                                        ref={(el) => (sectionRefs.current[tab.id] = el)}
                                        className={styles.contentSection}
                                    >
                                        {tab.content}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TabContent;
