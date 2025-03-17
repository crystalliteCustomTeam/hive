import styles from "@/styles/seo-glossary/seo-glossary.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CTAFrom from "./ctaform";

const page = () => {
  return (
    <>
      <div className={styles.seoGlossarySection}>
        <Container>
          <Row>
            <Col
              md={10}
              lg={12}
              className={`${styles.glossaryBox} text-center`}
            >
              <div className={styles.glossaryTxt}>
                <h1>SEO Glossary: 400 SEO Terms Explained</h1>
              </div>
            </Col>
            <Col md={12}>
              <h2>SEO Terms You Pretend to Understand</h2>
              <p>
                SEO experts love to toss around fancy terms like they’re the
                cool kids in class, and you’re just sitting there with no clue
                what "canonical tags" even mean. It’s a constant game of "who
                can sound more like a robot," and the last thing you need is to
                be left behind while they geek out over their keyword research.
                Don’t worry though, we’ve broken it all down so you can sound
                just as smart without the confusion. Time to stop nodding like
                you get it when you actually don’t.F
              </p>
            </Col>
            <Col>
              <CTAFrom />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default page;
