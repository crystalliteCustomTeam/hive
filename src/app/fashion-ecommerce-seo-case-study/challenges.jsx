import styles from "@/styles/casestudies/challenges.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Challenges = ({ data, bottomBorder, PopupStyle }) => {
  return (
    <section
      className={`${styles.challengesSection} ${
        bottomBorder ? styles.bottomBorder : ""
      }
      ${PopupStyle ? styles.PopupChallenges : ""}`}
      style={{
        backgroundImage: data.ChallengesBg
          ? `url(${data.ChallengesBg})`
          : "none",
      }}
    >
      <Container className={styles.customContainer}>
        <Row>
          <Col
            md={data.ChallengesImg ? 6 : 12}
            className={data.ChallengesImg ? "" : "text-center"}
          >
            <div className={styles.challengesPara}>
              <h2>{data.title}</h2>
              <div className={styles.subheading}>{data.subheading}</div>
              <div className={styles.contentPara}>{data.txt}</div>
            </div>
          </Col>
          {data.ChallengesImg ? (
            <Col md={6}>
              <div className={styles.challengesImg}>
                <Image src={data.ChallengesImg} fill alt={data.title} />
              </div>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Challenges;
