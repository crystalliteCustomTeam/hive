"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/blogs.module.scss";
import { usePathname } from "next/navigation";

const AuthorPost = ({ data, blogPage,title,desc }) => {
  const [timeDiffs, setTimeDiffs] = useState([]);
  const pathname = usePathname();
  const authorSlug = pathname.split("/").pop();
  const filteredBlogs = data.BlogsData.filter(
    (blog) => blog.author === authorSlug
  );

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
    const interval = setInterval(calculateTimeDiffs, 60000);

    return () => clearInterval(interval);
  }, [data.BlogsData]);

  return (
    <section className={`${styles.authorPost} ${styles.blogsSection}`}>
      <Container className="h-100">
        <Row>
          <Col md={7}>
            <div className="subtitle">{data.subtitle}</div>
            <h2>{title ? title : data.title}</h2>
            <p>{desc? desc : data.desc}</p>
          </Col>
        </Row>
        <Row className="h-100">
          {filteredBlogs.map((item, index) => (
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
                    {item.date} . {timeDiffs[index] || "Just now"}
                  </div>
                  <p>{item.txt}</p>
                </div>
              </div>
            </Col>
          ))}
          {!blogPage ? (
            <Col md={12} className="text-center mt-5 mt-md-4 m-auto">
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

export default AuthorPost;
