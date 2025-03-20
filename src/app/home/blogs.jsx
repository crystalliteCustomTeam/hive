"use client"
import styles from "@/styles/home/blogs.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";


const Blogs = ({ data, blogPage }) => {
  const [timeDiffs, setTimeDiffs] = useState([]);

  useEffect(() => {
    const calculateTimeDiffs = () => {
      const now = new Date();

      const newTimeDiffs = data.BlogsData.map((blog) => {
        const blogDate = new Date(blog.date);
        const diffInMs = now - blogDate;
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

        if (diffInMinutes < 60) {
          return `${diffInMinutes} min ago`;
        } else if (diffInMinutes < 1440) {
          return `${Math.floor(diffInMinutes / 60)} hours ago`;
        } else {
          return `${Math.floor(diffInMinutes / 1440)} days ago`;
        }
      });

      setTimeDiffs(newTimeDiffs);
    };

    calculateTimeDiffs();
    const interval = setInterval(calculateTimeDiffs, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [data.BlogsData]);
  return (
    <section className={`pt-100 ${styles.blogsSection}`}>
      <Container>
        <Row>
          <Col md={7}>
            <div className="subtitle">{data.subtitle}</div>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
          </Col>
        </Row>
        <Row>
          {data.BlogsData.map((item, index) => (
            <Col md={4} sm={6} key={index}>
              <div className={styles.blogItem}>
                <div className={styles.blogImg}>
                  <Link href={item.link}>
                    <Image src={item.img} alt="Blog Image" fill />
                  </Link>
                </div>
                <div className={styles.blogTxt}>
                  <div className={styles.categoryItem}>{item.category}</div>
                  <h5>
                    <Link href={item.link}>{item.title}</Link>
                  </h5>
                  <div className={styles.datatime}>
                    {item.date} .  {timeDiffs[index] || "Just now"}
                  </div>
                  <p>{item.txt}</p>
                </div>
              </div>
            </Col>
          ))}
          {!blogPage ? (
            <Col md={7} className="text-center mt-5 mt-md-4 m-auto">
              <Link href="/blogs" className="commonBtn">
                View All Blogs
              </Link>
            </Col>
          ) : null}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
