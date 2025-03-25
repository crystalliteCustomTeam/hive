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
      "Yes, it looks perfect and works smoothly",
      "Some parts don’t look right or are hard to use",
      "No, it’s hard to navigate on a phone",
    ],
  },
  {
    question: "Does your website load quickly?",
    answers: [
      "Yes, it loads in under 3 seconds",
      "It takes 4-6 seconds to load",
      "It takes forever to load (more than 6 seconds)",
    ],
  },
  {
    question:
      "Do your website titles and descriptions make people want to click?",
    answers: [
      "Yes, all pages have compelling titles and descriptions",
      "Some pages are optimized, but not all",
      "No, I haven’t set them up properly",
    ],
  },
  {
    question: "Are your images slowing down your website?",
    answers: [
      "No, all images are properly sized and labeled for search engines",
      "Some images are optimized, but not all",
      "Yes, they are large and missing important details",
    ],
  },
  {
    question:
      "Does Google trust your website? (Backlinks from reputable sites)",
    answers: [
      "Yes, I have links from well-known websites",
      "I have a few, but not enough",
      "I have no idea what backlinks are",
    ],
  },
  {
    question:
      "Are you using the right words to show up on Google? (Keyword strategy)",
    answers: [
      "Yes, I have a plan and use the best keywords",
      "Some of my content includes good keywords",
      "No, I haven’t thought about it",
    ],
  },
  {
    question: "Does Google understand your website structure? (Schema Markup)",
    answers: [
      "Yes, my important pages are properly structured for Google",
      "I’ve added some structure, but it’s not fully set up",
      "No, I don’t even know what that is",
    ],
  },
  {
    question: "Is your website easy to navigate? (Internal linking strategy)",
    answers: [
      "Yes, all key pages are well connected",
      "Some pages are linked, but it’s a bit messy",
      "No, my website is all over the place",
    ],
  },
  {
    question: "How often do you add fresh, high-quality content?",
    answers: [
      "Every week or more",
      "Once a month",
      "I rarely update my website",
    ],
  },
];

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

  const handleAnswerChange = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    const selectedAnswerIndex = selectedAnswers[currentQuestionIndex];
    if (selectedAnswerIndex !== undefined) {
      setTotalPoints((prevPoints) => prevPoints + [10, 5, 0][selectedAnswerIndex]);
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

    const userData = {
      recipient,
      name,
      score: totalPoints,
      website,
      phone,
    };

    try {
      // Send data to email API
      await fetch("https://dev18.pulse-force.com/api/send-email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      // Send data to Google Sheets API
      await fetch("https://sheetdb.io/api/v1/7eple7korb6ik", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: userData }),
      });

      setMessage("Got it! Your SEO score is on its way to your Inbox (Or Spam).");
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
                        checked={selectedAnswers[currentQuestionIndex] === index}
                        onChange={() => handleAnswerChange(index)}
                      />
                      <label htmlFor={`answer-${index}`}>{answer}</label>
                    </div>
                  ))}
                   <Button
                    className={styles.nextButton}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
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
                    <h3>Get Results by Email!</h3>
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
