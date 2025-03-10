import styles from "@/styles/single-blog/question.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const data =[
    {
        question:"Is your website easy to use on a phone?",
        answer:(<>
            <div className={styles.questions}>Yes, it looks perfect and works smoothly (10 points)</div>
            <div className={styles.questions}>Yes, it looks perfect and works smoothly (10 points)</div>
            <div className={styles.questions}>Yes, it looks perfect and works smoothly (10 points)</div>
        </>)
    },  
     {
        question:"Is your website easy to use on a phone?",
        answer:(<>
            <div className={styles.questions}>Yes, it looks perfect and works smoothly (10 points)</div>
            <div className={styles.questions}>Yes, it looks perfect and works smoothly (10 points)</div>
            <div className={styles.questions}>Yes, it looks perfect and works smoothly (10 points)</div>
        </>)
    }
]
const Question = () => {
  return (
    <section className={styles.questionSection}>
      <Container className={styles.questionContainer}>
        <Row>
          <Col md={6}>
            <div className={styles.questionPoints}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={styles.question}>
                            <h3>{item.question}</h3>
                            {item.answer}
                        </div>
                    )
                })}
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.questionImage}></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Question;
