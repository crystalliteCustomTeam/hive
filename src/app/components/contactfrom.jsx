"use client";
import styles from "@/styles/components/contactform.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { usePathname } from "next/navigation";

const ContactFrom = ({
  voice,
  sidebar,
  glossary,
  bg,
  bgBlack,
  popop,
  contactPage,
  vertical,
  LandingPage,
  BlackVertical,
  blkColor,
  removebg,
  title,
  smmPage,
  extra,
  customprice,
  location,
  locationPage,
  extrafrom
}) => {
  const [ip, setIP] = useState("");
  const [pagenewurl, setPagenewurl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [formStatus, setFormStatus] = useState(title ? title : "Submit");
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
    const website = e.target.website ? e.target.website.value.trim() : "";
    const voice = e.target.voice ? e.target.voice.value.trim() : "";
    const services = e.target.services ? e.target.services.value.trim() : "";
    const message = e.target.comment ? e.target.comment.value.trim() : "";

    if (!name || !email || !phone) {
      setError("Please fill in all required fields.");
      setFormStatus("Submit");
      setIsDisabled(false);
      return;
    }

    const currentdate = new Date().toLocaleString();
    const leadData = {
      name,
      email,
      phone,
      message,
    };

    if (website) {
      leadData.website = website;
    }
    if (services) {
      leadData.services = services;
    }
    if (voice) {
      leadData.voice = voice;
    }
    const data = {
      page_url: pagenewurl,
      user_ip: `${ip.ip}`,
      lead_data: leadData,
    };
    const JSONdata = JSON.stringify(data);
    // First API call to your server
    await fetch("https://brandsapi.pulse-force.com/api/v1/leads", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSONdata,
    }).then((res) => {
      console.log(`Response received ${res}`);
      window.location.href = "/thank-you";
      if (res.status === 200) {
        console.log(`Response Successed ${res}`);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div
        className={`${styles.Contactbox} ${sidebar ? styles.sidebarBlog : ""} ${glossary ? styles.glossaryPage : ""
          } ${contactPage ? styles.contactPage : ""} ${locationPage ? styles.locationPage : ""
          } ${customprice ? styles.customPrice : ""} ${location ? styles.locationSec : ""
          }${smmPage ? styles.smmPage : ""} ${removebg ? styles.transfBg : ""} ${bg === "no" ? styles.removeBG : ""
          } ${bgBlack ? styles.bgBlack : ""} ${LandingPage ? styles.landingPage : ""
          } ${vertical ? styles.verticalFrom : ""}  ${BlackVertical ? styles.BlackVertical : ""
          } ${popop === "yes" ? styles.popopFrom : ""} ${blkColor ? styles.blkColor : ""
          }
        ${voice ? styles.voiceRemove : ""}
        `}
      >
        {contactPage ? (
          <>
            <div className="subtitle">Get In Touch</div>
            <h6>
              Please fill out the form below, and we’ll respond as soon as
              possible.
            </h6>
          </>
        ) : (
          ""
        )}
        {sidebar ? (
          <div className="subtitle">Let’s level up your Brand, together</div>
        ) : (
          ""
        )}
        <div className={styles.contactItem}>
          <input type="text" placeholder="Full Name" name="name" required />
        </div>
        <div className={styles.contactItem}>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className={styles.contactItem}>
          <input type="Phone" placeholder="Phone" name="phone" required />
        </div>
        {extrafrom ? (
          <>
            <div className={styles.contactItem}>
              <input type="text" placeholder="Website" name="website" />
            </div>
            <div className={styles.contactItem}>
              <select name="services" required>
                <option value="">Select Service</option>
                <option value="SEO">SEO</option>
                <option value="SMM">SMM</option>
                <option value="Paid Marketing">Paid Marketing</option>
                <option value="Web Design & Development">Web Design & Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Content Marketing">Content Marketing</option>
              </select>
            </div>
          </>
        ) : (
          <></>
        )
        }
        {location || glossary ? (
          <div className={styles.contactItem}>
            <input type="text" placeholder="Website" name="website" />
          </div>
        ) : null}
        {customprice ? (
          <>
            <div className={styles.contactItem}>
              <input type="text" placeholder="Website" name="website" />
            </div>
            {voice ? (
              ""
            ) : (
              <div className={styles.contactItem}>
                <input type="text" placeholder="Tone of Voice" name="voice" />
              </div>
            )}
          </>
        ) : null}
        {!location &&
          (!vertical ? (
            <>
              <div className={styles.contactItem}>
                <textarea placeholder="Message" name="comment"></textarea>
              </div>
              <div className={styles.para}>
                We take your privacy seriously. Read our{" "}
                <Link href="/privacy-policy" target="_blank">
                  Privacy Policy
                </Link>
              </div>
            </>
          ) : (
            <input type="hidden" name="comment" />
          ))}
        {smmPage || location ? (
          <div className={styles.para}>
            We take your privacy seriously. Read our{" "}
            <Link href="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
          </div>
        ) : null}

        <div className={styles.contactBtn}>
          <button type="submit" className="commonBtn" disabled={isDisabled}>
            {formStatus}
          </button>
        </div>
        {extra ? <div className={`${styles.para} mt-3`}>{extra}</div> : ""}
      </div>
    </Form>
  );
};

export default ContactFrom;
