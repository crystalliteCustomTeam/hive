"use client";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/seo-glossary/singlepost.module.scss";
import Image from "next/image";
import TableOfContents from "@/src/app/[slug]/components/tablecontent";
import Link from "next/link";
import BlogPopUp from "@/src/app/[slug]/components/blogpopup";

const ClientBlog = ({ blog }) => {
    const [modalShow, setModalShow] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY > 1300 && !hasTriggered) {
                setModalShow(true);
                setHasTriggered(true); // prevent re-triggering
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasTriggered]);

    const authorName = blog.author
        ? blog.author
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : "Unknown Author";

    return (
        <>
            {blog.type === "blogs" ? (
                <section className={styles.singleBlog}>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className={styles.flexCategory}>
                                    <div>{blog.category}</div>
                                    {/* <div>{blog.date}</div> */}
                                </div>
                                <h1>{blog.title}</h1>
                            </Col>
                            <Col md={7} lg={7} xl={8} className="order-2 order-md-1">
                                <div className={styles.authorBox}>
                                    <div className={styles.authorIMG}>
                                        <Image src={blog.authorPic} alt="Author" fill />
                                    </div>
                                    <div className={styles.authorContent}>
                                        <h4>{authorName}</h4>
                                        <ul className={styles.authorList}>
                                            <li>{blog.job}</li>
                                            <li>Infiniti Digital</li>
                                            <li>
                                                <Link href={blog.author}>Read Author Bio</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.mainSection}>{blog.maintxt}</div>
                                <BlogPopUp show={modalShow} onHide={() => setModalShow(false)} />
                            </Col>
                            <Col md={5} lg={5} xl={4} className="order-1 order-md-2">
                                <div className={styles.blogsideBar}>
                                    <TableOfContents tableContent={blog.tableContent} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {blog.schema ?? null}
                </section>
            ) : (
                <section className={styles.singlePost}>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h1>{blog.title}</h1>
                                <div className={styles.bannerImg}>
                                    <Image
                                        src={blog.img}
                                        alt={blog.title}
                                        width={1420}
                                        height={664}
                                    />
                                </div>
                                <div className={styles.picPara}>{blog.picpara}</div>
                                <div className={styles.mainSection}>{blog.maintxt}</div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
};

export default ClientBlog;
