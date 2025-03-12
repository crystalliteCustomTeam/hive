import styles from "@/styles/single-blog/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Question from "@/src/app/single-blog/question"


const Banner = ({ data }) => {
  return (
    <>
      <section className={styles.singleBlogs}>
        <Container>
     
          <Row>
            <Col md={12} lg={12} className="m-auto">
              <div className={styles.singleBlogTxt}>
                <h1>{data.title}</h1>
                <div>{data.desc}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Question />
      <section className={`${styles.singleBlogs} ${styles.singleBlogs1}`}>
        <Container>
          <Row>
            <Col md={12} lg={12} className="m-auto">
              <div className={styles.singleBlogTxt}>
                         <div>{data.desc1}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
