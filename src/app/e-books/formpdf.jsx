"use client";
import styles from "@/styles/components/pdfpop.module.scss"
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { usePathname } from "next/navigation";

const FormPDF = ({ pdf }) => {
  const [ip, setIP] = useState("");
  const [pagenewurl, setPagenewurl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [formStatus, setFormStatus] = useState("Submit");
  const [error, setError] = useState("");

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

    // Validate fields
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.comment ? e.target.comment.value.trim() : "";

    if (!name || !email || !phone) {
      setError("Please fill in all required fields.");
      setFormStatus("Submit");
      setIsDisabled(false);
      return;
    }

    const leadData = { name, email, phone, message };

    const data = {
      page_url: pagenewurl,
      user_ip: `${ip.ip}`,
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
        console.log("Response Successed", res);

        // Trigger PDF download after successful submission
        const pdfPath = `/pdfpopup/seo${pdf}`; // construct full path
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = pdf.split("/").pop() + ".pdf"; // optional: use file name from URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Redirect to thank-you page
        window.location.href = `/thank-you?pdf=true`;
      } else {
        console.error("Submission failed", res.statusText);
        setError("Submission failed. Please try again.");
        setFormStatus("Submit");
        setIsDisabled(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong. Please try again.");
      setFormStatus("Submit");
      setIsDisabled(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className={styles.pdfForm}>
        <div className={styles.contactItem}>
          <input type="text" placeholder="Full Name" name="name" required />
        </div>
        <div className={styles.contactItem}>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className={styles.contactItem}>
          <input type="Phone" placeholder="Phone" name="phone" required />
        </div>
        <div className={styles.contactBtn}>
          <button type="submit" className="commonBtn" disabled={isDisabled}>
            {formStatus}
          </button>
        </div>
      </div>
    </Form >
  );
};

export default FormPDF;
