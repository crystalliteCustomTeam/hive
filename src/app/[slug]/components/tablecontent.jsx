"use client";
import React, { useState } from "react";
import styles from "@/styles/single-blog/tablecontent.module.scss";

const TableOfContents = ({ tableContent }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleScroll = (id, index) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 110;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <ul className={styles.tableofContent}>
      <h4>Table Of Content</h4>
      {tableContent.map((item, index) => (
        <li key={index}>
          <a
            className={activeIndex === index ? styles.active : ""}
            href={`#Section-${index + 1}`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(`Section-${index + 1}`,index);
            }}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContents;
