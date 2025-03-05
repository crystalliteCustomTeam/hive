"use client"
import styles from "@/styles/components/contactform.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap"
import { usePathname } from 'next/navigation'

const ContactFrom = ({ bg, bgBlack, popop, contactPage, vertical, LandingPage, BlackVertical, blkColor, removebg, title, smmPage, extra, customprice }) => {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [formStatus, setFormStatus] = useState(title ? title : "Submit");
    const [error, setError] = useState('');

    // Load IP address from the API
    const getIPData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
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
        setError('');
        setFormStatus("Processing...");
        setIsDisabled(true);

        // Validate fields
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const phone = e.target.phone.value.trim();
        const website = e.target.website ? e.target.website.value.trim() : "";
        const voice = e.target.voice ? e.target.voice.value.trim() : "";
        const message = e.target.comment.value.trim();


        if (!name || !email || !phone) {
            setError('Please fill in all required fields.');
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
        await fetch('https://brandsapi.pulse-force.com/api/v1/leads', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`);
            window.location.href = '/thank-you';
            if (res.status === 200) {
                console.log(`Response Successed ${res}`);
            }
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className={`${styles.Contactbox} ${customprice ? styles.customPrice : ""} ${smmPage ? styles.smmPage : ""} ${removebg ? styles.transfBg : ""} ${bg === "no" ? styles.removeBG : ""} ${bgBlack ? styles.bgBlack : ""} ${LandingPage ? styles.landingPage : ""} ${vertical ? styles.verticalFrom : ""}  ${BlackVertical ? styles.BlackVertical : ""} ${popop === "yes" ? styles.popopFrom : ""} ${blkColor ? styles.blkColor : ""}`}>
                {contactPage ?
                    <>
                        <div className="subtitle">Get In Touch</div>
                        <h6>Please fill out the form below, and we’ll respond as soon as possible.</h6>
                    </>
                    : ""
                }
                <div className={styles.contactItem}>
                    <input type="text" placeholder="Full Name" name="name" required />
                </div>
                <div className={styles.contactItem}>
                    <input type="email" placeholder="Email" name="email" required />
                </div>
                <div className={styles.contactItem}>
                    <input type="Phone" placeholder="Phone" name="phone" required />
                </div>
                {customprice ? (
                    <>
                        <div className={styles.contactItem}>
                            <input type="text" placeholder="Type Your Website" name="website" />
                        </div>
                        <div className={styles.contactItem}>
                            <input type="text" placeholder="Tone of Voice" name="voice" />
                        </div>
                    </>
                ) :
                    null}
                {!vertical ? (
                    <>
                        <div className={styles.contactItem}>
                            <textarea placeholder="Description" name="comment"></textarea>
                        </div>
                        <div className={styles.para}>
                            We take your privacy seriously. Read our <Link href="#">Privacy Policy</Link>
                        </div>
                    </>
                ) :
                    <input type="hidden" name="comment" />
                }
                {smmPage ?
                    <div className={styles.para}>
                        We take your privacy seriously. Read our <Link href="#">Privacy Policy</Link>
                    </div>
                    : ""
                }

                <div className={styles.contactBtn}>
                    <button type="submit" className="commonBtn" disabled={isDisabled}>{formStatus}</button>
                </div>
                {extra ?
                    <div className={`${styles.para} mt-3`}>{extra}</div> :
                    ""
                }
            </div>
        </Form>
    )
}

export default ContactFrom