"use client";
import React, { useState } from 'react';
import Blogs from "@/src/app/home/blogs";
import BlogCase from "@/src/app/blogs/blogcase";
import { Col, Container, Row } from 'react-bootstrap';
import styles from "@/styles/single-blog/blogtabs.module.scss"
const Blogtabs = ({ BlgosData, LeadData }) => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { id: '1', label: 'Growth & Strategy Hub', content: <Blogs data={LeadData} blogPage={true} /> },
        { id: '2', label: 'Case Studies', content: <BlogCase /> },
        { id: '3', label: 'Blogs & Resources', content: <Blogs data={BlgosData} blogPage={true} /> },
    ];

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className={styles.tabHeader}>
                        {tabs.map(tab => (
                            <div className={styles.tabBtn}
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
    );
};

export default Blogtabs;
