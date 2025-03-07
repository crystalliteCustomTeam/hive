import styles from "@/styles/location/reports.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMG from "media/location/seoImg.webp";
import Image from "next/image";

const data = [
  {
    title: "Monthly Report",
    txt: "Each month, your project manager will produce a report and discuss it with you. The report details analytics, completed work, and upcoming plans. The project manager may also make suggestions on strategy and program adjustments as needed.",
  },
  {
    title: "Call Tracking",
    txt: "Each month, your project manager will produce a report and discuss it with you. The report details analytics, completed work, and upcoming plans. The project manager may also make suggestions on strategy and program adjustments as needed.",
  },
  {
    title: "Google Analytics",
    txt: "Each month, your project manager will produce a report and discuss it with you. The report details analytics, completed work, and upcoming plans. The project manager may also make suggestions on strategy and program adjustments as needed.",
  },
  {
    title: "Website Traffic Reports",
    txt: "Each month, your project manager will produce a report and discuss it with you. The report details analytics, completed work, and upcoming plans. The project manager may also make suggestions on strategy and program adjustments as needed.",
  },
  {
    title: "Keyword Ranking Reports",
    txt: "Each month, your project manager will produce a report and discuss it with you. The report details analytics, completed work, and upcoming plans. The project manager may also make suggestions on strategy and program adjustments as needed.",
  },
];

const ReportSec = () => {
  return (
    <section className={`${styles.reportSection} p-100`}>
      <Container>
        <Row>
          <Col md={5} lg={5}>
            <h2>Tracking, Analytics, and Reporting</h2>
            <p>
              We often hear nightmare stories from clients about SEO companies
              who just “didn’t do anything.” We actually want you to know what’s
              going on with your project so that you can help provide
              information and be confident about our work!
            </p>
            <div className={styles.contactImg}>
              <Image src={IMG.src} width={1409} height={867} alt="Seo Dallar" />
            </div>
          </Col>
          <Col md={7} lg={6} xl={6} xxl={5} className="offset-lg-1 offset-xxl-2">
            <ul className={styles.reportPoints}>
              {data.map((item, index) => (
                <li key={index}>
                  <div className={styles.mainBox}>
                    <div className={styles.number}>0{index+1}</div>
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
