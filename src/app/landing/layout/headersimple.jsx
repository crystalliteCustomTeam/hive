"use client";
import { ChatIcon, MainLogo, PhoneIcon } from "@/src/app/app-constants";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/landing/components/layout/headerlp.module.scss";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const HeaderSimpleLp = () => {
  const [isLight, setIsLight] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLight(
      pathname === "/organic-seo-services" ||
        pathname === "/search-engine-optimization-services" ||
        pathname === "/social-media-marketing-agency" ||
        pathname === "/landing/gmb" ||
        pathname === "/seo-content-writing-services" ||
        pathname === "/social-media-advertising-agency"
    );
  }, [pathname]);
  // Chat Code
  const openChat = () => {
    if (window.LC_API) {
      window.LC_API.open_chat_window();
    } else {
      console.error("LiveChat API is not loaded");
    }
  };
  return (
    <section
      className={`${styles.headerSection}  ${isLight ? styles.isLight : ""}`}
    >
      <Container className="h-100">
        <Row className="h-100">
          <Col xs={6} md={6} className="my-auto">
            <div className={`${styles.mainLogo} `}>
              <Link href="">
                <MainLogo />
              </Link>
            </div>
          </Col>

          <Col xs={6} md={6} className="my-auto">
            <div className={styles.btnFlex}>
              <a
                href="tel:855-666-6682"
                className={`commonBtn`}
                aria-label="Visit our Contact"
              >
                <PhoneIcon /> 855-666-6682
              </a>
              <div className={styles.chatStyle} onClick={openChat}>
                <ChatIcon />
                Live Chat
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeaderSimpleLp;
