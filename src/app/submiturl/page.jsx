"use client";
import { useState } from "react";
import styles from "@/styles/seo-glossary/submiturl.module.scss"
export default function SubmitURL() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const submitURL = async () => {
    if (!url) {
      setMessage("❌ Please enter a URL.");
      return;
    }

    try {
      const response = await fetch("/api/indexing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (response.ok) setMessage("✅ URL Submitted Successfully!");
      else setMessage(`❌ Error: ${data.error}`);
    } catch (error) {
      setMessage("❌ Failed to submit URL.");
    }
  };

  return (
    <div className={styles.SubmitURL}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={submitURL} style={{ marginLeft: "10px", padding: "10px" }}>
        Submit to Google
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
