"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/components/newsletter.module.scss";
import { Form } from "react-bootstrap";
import { usePathname } from "next/navigation";

const NewsLetterForm = () => {
  const [ip, setIP] = useState(null);
  const [pagenewurl, setPagenewurl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [formStatus, setFormStatus] = useState("Get Started");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Load IP address from the API
  const getIPData = async () => {
    try {
      const response = await fetch("https://ipinfo.io/?token=229b1c3fa2e54c");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setIP(data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href);
  }, []);

  const router = usePathname();
  const currentRoute = router;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFormStatus("Processing...");
    setIsDisabled(true);

    // Extract form data
    const email = e.target.email.value.trim();

    // Validate email
    if (!email) {
      setError("Please provide your email.");
      setFormStatus("Submit");
      setIsDisabled(false);
      return;
    }

    const leadData = {
      email,
    };

    const data = {
      page_url: pagenewurl,
      user_ip: ip ? ip.ip : "", // Ensure ip is available
      lead_data: leadData,
    };

    const JSONdata = JSON.stringify(data);

    try {
      const res = await fetch("https://brandsapi.pulse-force.com/api/v1/leads", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (res.ok) {
        setSuccess(true);
        window.location.href = "/thank-you"; // Redirect after success
      } else {
        const errorData = await res.json();
        setError(`Error: ${errorData.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setFormStatus("Submit");
      setIsDisabled(false);
    }
  };

  return (
    <div className={styles.newsletterBox}>
      <Form onSubmit={handleSubmit}>
        <div className={styles.newsletterInput}>
          <input
            type="email"
            name="email"
            placeholder="What’s Your Work Email"
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={isDisabled}>
            {formStatus}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default NewsLetterForm;
