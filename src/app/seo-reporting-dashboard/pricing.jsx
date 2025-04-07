import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/landing/components/content/customprice.module.scss";
import {
  CustomPrice01,
  CustomPrice02,
  CustomPrice03,
} from "@/src/app/app-constants";
import ContactFrom from "@/src/app/components/contactfrom";

const DashboardPrice = () => {
  return (
    <section className={`${styles.customPriceSection} pt-100`}>
      <Container>
        <Row>
          <Col md={10} lg={8} className="m-auto text-center">
            <h2>
              Bridge The GAP Between
              <span>SEO And Business Goals</span>
            </h2>
            <p>
              Simplify SEO reporting for stakeholders and enhance campaign
              performance tracking with Infiniti Digital.{" "}
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-stretch">
          <Col md={12} lg={6}>
            <div className={styles.customPriceBox}>
              <div className={styles.customBoxbg}>
                <div className={styles.customHeader}>
                  <div className={styles.customTitle}>
                    <h5>
                      Business Intelligence for SEO
                    </h5>
                    <p>
                      Data visualization to optimize SEO strategies, track
                      performance, and make informed decisions to drive growth.
                    </p>
                  </div>
                  <div className={styles.customPrice}>
                    <div className={styles.startAt}>Starting at</div>
                    <div className={styles.Price}>$3200</div>
                  </div>
                </div>
                <div className={styles.customMainBtn}>
                  SEO metrics for decision-makers
                </div>
                <div className={styles.listPrice}>
                  <div className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <div className={styles.listIconSvg}>
                        <CustomPrice01 />
                      </div>
                    </div>
                    <div className={styles.listTxt}>
                      <h6>Organic Traffic Volume</h6>
                      <p>
                        Displays the number of visitors from search engines over
                        a defined period.
                      </p>
                    </div>
                  </div>
                  <div className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <div className={styles.listIconSvg}>
                        <CustomPrice02 />
                      </div>
                    </div>
                    <div className={styles.listTxt}>
                      <h6>Keywords Performance</h6>
                      <p>
                        Visualizes the positions of targeted keywords in SERPs,
                        with trends and shifts.
                      </p>
                    </div>
                  </div>
                  <div className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <div className={styles.listIconSvg}>
                        <CustomPrice03 />
                      </div>
                    </div>
                    <div className={styles.listTxt}>
                      <h6>Conversion Rate from Organic Traffic</h6>
                      <p>
                        Tracks the percentage of visitors who complete desired
                        actions from organic search.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className={styles.customPriceBox}>
              <div className={styles.customBoxbg}>
                <div className={styles.customForm}>
                  <h3>Want to Grow? Let Us Know!</h3>
                  <p>
                    Your Business Deserves a Page One Ranking – Not Page None
                  </p>
                  <ContactFrom customprice={true} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DashboardPrice;
