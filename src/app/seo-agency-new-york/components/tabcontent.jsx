"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/seo-agency-new-york/tabcontent.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const tabsData = [
    {
        id: "section1",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: (<>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <ul>
                <li>Lorem Ipsum has been the industry's standard dummy text</li>
                <li>Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text</li>
                <li>Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </>)

    },
    {
        id: "section2",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: (<>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </>)

    },
    {
        id: "section3",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: (<>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </>)

    },
    {
        id: "section4",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: (<>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
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
