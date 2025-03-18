"use client";
import { BlogData } from "@/src/app/[slug]/data/data";
import { useParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/seo-glossary/singlepost.module.scss";
import Image from "next/image";

const Page = () => {
  const { slug } = useParams();
  const blog = BlogData.find((post) => post.slug === slug);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }
  return (
    <section className={styles.singlePost}>
      <Container>
        <Row>
          <Col md={12}>
            <h1>{blog.title}</h1>
            <div className={styles.bannerImg}>
              <Image src={blog.img} alt={blog.title} fill />
            </div>
            <div className={styles.picPara}>{blog.picpara}</div>
            <div className={styles.mainSection}>{blog.maintxt}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Page;
