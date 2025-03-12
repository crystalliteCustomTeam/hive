"use client";
import { useEffect, useState } from "react";
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
    question:
      "Do your website titles and descriptions make people want to click?",
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
    question:
      "Does Google trust your website? (Backlinks from reputable sites)",
    answers: [
      "Yes, I have links from well-known websites (10 points)",
      "I have a few, but not enough (5 points)",
      "I have no idea what backlinks are (0 points)",
    ],
  },
  {
    question:
      "Are you using the right words to show up on Google? (Keyword strategy)",
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
  return match ? parseInt(match[1], 10) : 0;
};

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [name, setName] = useState("");
  const [recipient, setRecipient] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers([]);
        setTotalPoints(0);
        setShowSubmit(false);
        setMessage("");
      }, 5000);
    }
  }, [message]);

  const handleAnswerChange = (event) => {
    const answer = event.target.value;
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
    if (selectedAnswer) {
      setTotalPoints((prevPoints) => prevPoints + extractPoints(selectedAnswer));
    }
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowSubmit(true);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!recipient) formErrors.recipient = "Email is required";
    if (!phone) formErrors.phone = "Phone number is required";
    if (!website) formErrors.website = "Website is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://dev18.pulse-force.com/api/send-email/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            recipient,
            name,
            score: totalPoints,
            website,
            phone,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setMessage("Email sent successfully!");
      setName("");
      setRecipient("");
      setPhone("");
      setWebsite("");
      setTotalPoints(0);
    } catch (error) {
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
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
                        checked={
                          selectedAnswers[currentQuestionIndex] === answer
                        }
                        onChange={handleAnswerChange}
                      />
                      <label htmlFor={`answer-${index}`}>{answer}</label>
                    </div>
                  ))}
                  <Button
                    className={styles.nextButton}
                    disabled={!selectedAnswers[currentQuestionIndex]}
                    onClick={handleNext}
                  >
                    Next Question
                  </Button>
                </div>
              </div>
            </Col>
          ) : (
            <Col md={6} lg={6} className="my-auto">
              <div className={styles.submitSection}>
                {message ? (
                  <p className={styles.messageSuccessfully}>{message}</p>
                ) : (
                  <>
                    <h3>Your answers are complete!</h3>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="name">
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          value={recipient}
                          onChange={(e) => setRecipient(e.target.value)}
                          isInvalid={!!errors.recipient}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.recipient}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="phone">
                        <Form.Control
                          type="tel"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="website">
                        <Form.Control
                          type="text"
                          placeholder="Website"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          isInvalid={!!errors.website}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.website}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </Button>
                    </Form>
                  </>
                )}
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
