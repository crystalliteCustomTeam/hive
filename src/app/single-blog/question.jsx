"use client"
import { useState } from "react";
import styles from "@/styles/single-blog/question.module.scss";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import Image from "next/image";
import questionImage from "media/blogs/question.webp";

const data = [
  {
    question: "Is your website easy to use on a phone?",
    answers: [
      "Yes, it looks perfect and works smoothly (10 points)",
      "Some parts don’t look right or are hard to use (5 points)",
      "No, it’s hard to navigate on a phone (0 points)",
    ],
  },
  {
    question: "Does your website load quickly?",
    answers: [
      "Yes, it loads in under 3 seconds (10 points)",
      "It takes 4-6 seconds to load (5 points)",
      "It takes forever to load (more than 6 seconds) (0 points)",
    ],
  },
  {
    question: "Do your website titles and descriptions make people want to click?",
    answers: [
      "Yes, all pages have compelling titles and descriptions (10 points)",
      "Some pages are optimized, but not all (5 points)",
      "No, I haven’t set them up properly (0 points)",
    ],
  },
  {
    question: "Are your images slowing down your website?",
    answers: [
      "No, all images are properly sized and labeled for search engines (10 points)",
      "Some images are optimized, but not all (5 points)",
      "Yes, they are large and missing important details (0 points)",
    ],
  },
  {
    question: "Does Google trust your website? (Backlinks from reputable sites)",
    answers: [
      "Yes, I have links from well-known websites (10 points)",
      "I have a few, but not enough (5 points)",
      "I have no idea what backlinks are (0 points)",
    ],
  },
  {
    question: "Are you using the right words to show up on Google? (Keyword strategy)",
    answers: [
      "Yes, I have a plan and use the best keywords (10 points)",
      "Some of my content includes good keywords (5 points)",
      "No, I haven’t thought about it (0 points)",
    ],
  }, 
  {
    question: "Does Google understand your website structure? (Schema Markup)",
    answers: [
      "Yes, my important pages are properly structured for Google (10 points)",
      "I’ve added some structure, but it’s not fully set up (5 points)",
      "No, I don’t even know what that is (0 points)",
    ],
  },
  {
    question: "Is your website easy to navigate? (Internal linking strategy)",
    answers: [
      "Yes, all key pages are well connected (10 points)",
      "Some pages are linked, but it’s a bit messy (5 points)",
      "No, my website is all over the place (0 points)",
    ],
  },
  {
    question: "How often do you add fresh, high-quality content?",
    answers: [
      "Every week or more (10 points)",
      "Once a month (5 points)",
      "I rarely update my website (0 points)",
    ],
  },
];

const extractPoints = (answer) => {
  const match = answer.match(/\((\d+) points\)/);
  return match ? parseInt(match[1]) : 0;
};

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (event) => {
    const answer = event.target.value;
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
    if (selectedAnswer) {
      setTotalPoints(totalPoints + extractPoints(selectedAnswer));
    }

    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowSubmit(true);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, totalPoints }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send email");
      }
  
      alert("Email sent successfully!");
    } catch (error) {
      alert("Failed to submit. Please try again.");
      console.error(error);
    }
  };
  

  return (
    <section className={styles.questionSection}>
      <Container className={`h-100 ${styles.questionContainer}`}>
        <Row className="h-100">
          {!showSubmit ? (
            <Col md={6} lg={6} className="my-auto">
              <div className={styles.questionPoints}>
                <div className={styles.question}>
                  <h3>{data[currentQuestionIndex].question}</h3>
                  {data[currentQuestionIndex].answers.map((answer, index) => (
                    <div key={index} className={styles.questions}>
                      <input
                        type="radio"
                        id={`answer-${index}`}
                        name={`question-${currentQuestionIndex}`}
                        value={answer}
                        checked={selectedAnswers[currentQuestionIndex] === answer}
                        onChange={handleAnswerChange}
                      />
                      <label htmlFor={`answer-${index}`}>{answer}</label>
                    </div>
                  ))}
                  <Button className={styles.nextButton} disabled={!selectedAnswers[currentQuestionIndex]} onClick={handleNext}>
                    Next Question
                  </Button>
                </div>
              </div>
            </Col>
          ) : (
            <Col>
              <div className={styles.submitSection}>
                <h3>Your answers are complete! Total Score: {totalPoints}</h3>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSubmit} disabled={!name || !email || loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                  {message && <p>{message}</p>}
                </Form>
              </div>
            </Col>
          )}
          <Col md={6} lg={6} className="my-auto text-center">
            <div className={styles.questionImage}>
              <Image src={questionImage.src} alt="Question" fill />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Question;
