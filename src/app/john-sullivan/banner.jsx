import styles from "@/styles/blogauthor/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMGBG from "media/blogs/author/bannerImg.webp";
import JohnSullivan from "media/blogs/author/john-sullivan.webp";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/src/app/app-constants";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className={styles.bannerAuthor}
      style={{ backgroundImage: `url(${IMGBG.src})` }}
    >
      <Container className="h-100">
        <Row className="h-100">
          <Col md={12} className="my-auto">
            <div className={styles.authorBox}>
              <div className={styles.authorIMG}>
                <Image src={JohnSullivan.src} alt="Author" fill />
              </div>
              <div className={styles.authorContent}>
                <h4>John Sullivan</h4>
                <h1 className="d-none">Chloe Harris, SEO Specialist at Infiniti Digital</h1>

                <ul className={styles.authorList}>
                  <li>Senior Mobile App Developer</li>
                  <li>Infiniti Digital</li>
                </ul>
                <div className={styles.btnAuthor}>
                  <Link href="/blogs">Back to SEO Knowledge</Link>
                </div>
                <div className={styles.authorInfo}>
                  <h5>About</h5>
                  <p>
                    John is a Senior Mobile App Developer at Infiniti Digital, specializing in developing high-performance apps. With a passion for innovation and usability, John leads mobile app  projects from concept to deployment; Delivering intuitive, scalable, and future-ready solutions. His work bridges sleek UI design with solid backend engineering, helping businesses transform ideas into engaging mobile experiences. At Infiniti Digital, John also shares his insights on the latest development tools, app trends, and agile practices to guide clients and fellow developers toward smarter builds in today’s competitive mobile landscape.
                  </p>
                </div>
                <div className={styles.socailShare}>
                  <ul>
                    <li>Follow :</li>
                    <li>
                      <a
                        href="https://www.instagram.com/infinitidigitalus/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/infinitidigitalus/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/Infinitidigitl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
