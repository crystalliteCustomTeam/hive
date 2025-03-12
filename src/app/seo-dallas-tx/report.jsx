import styles from "@/styles/location/reports.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMG from "media/location/seoImg.webp";
import Image from "next/image";

const data = [
  {
    title: "Keyword Ranking Report",
    txt: "We monitor your target keywords across search engine results, tracking improvements and spotting new ranking opportunities. Our reports help you see where you stand and what’s working.",
  },
  {
    title: "Traffic and Engagement Report",
    txt: "Using advanced analytics, we measure organic traffic, bounce rates, and user behavior to understand how visitors interact with your site. This helps refine content and improve conversions.",
  },
  {
    title: "Technical SEO Report",
    txt: "We run regular audits to identify and fix issues like slow loading speed, mobile-friendliness, indexing errors, and broken links. Keeping your site optimized ensures better rankings and user experience.",
  },
  {
    title: "Backlink Report",
    txt: "We track new, lost, and high-quality backlinks, helping strengthen your site’s authority. Our reports also highlight link-building opportunities to improve your ranking power.",
  },
  {
    title: "Conversion and ROI Report ",
    txt: "We connect SEO efforts to real results by tracking sales, leads, and sign-ups. Our reports focus on ROI, ensuring your SEO strategy drives measurable business growth.",
  },
];

const ReportSec = () => {
  return (
    <section className={`${styles.reportSection} p-100`}>
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <h2>Transparent SEO Reporting for Clients</h2>
            <p>
              Our SEO reporting method depends on your service package with us,
              so you get the right level of insights for your business. Basic
              plans include Monthly Progress Reports with key stats like
              rankings, traffic, and engagement. Higher-tier plans come with
              Monthly Reports plus Expert Recommendations to help you improve
              results. Premium packages include a Business Intelligence
              Dashboard, giving you access to real-time SEO data. No matter your
              plan, our SEO Dallas company keeps you updated with clear,
              easy-to-understand reports to track your growth.
            </p>
            <div className={styles.contactImg}>
              <Image src={IMG.src} width={1409} height={867} alt="Seo Dallar" />
            </div>
          </Col>
          <Col
            md={6}
            lg={5}
            xl={5}
            xxl={5}
            className="offset-lg-1 offset-xxl-1"
          >
            <ul className={styles.reportPoints}>
              {data.map((item, index) => (
                <li key={index}>
                  <div className={styles.mainBox}>
                    <div className={styles.number}>0{index + 1}</div>
                    <h4>{item.title}</h4>
                    <p>{item.txt}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReportSec;
