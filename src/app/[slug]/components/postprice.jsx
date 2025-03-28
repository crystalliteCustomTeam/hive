import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/landing/components/content/customprice.module.scss";
import {
  CustomPrice01,
  CustomPrice02,
  CustomPrice03,
} from "@/src/app/app-constants";
import ContactFrom from "@/src/app/components/contactfrom";

const PostPrice = ({tit,txt,price}) => {
  return (
    <section className={`${styles.customPriceSection} ${styles.postPage}`}>
      <Container>
        <Row className="d-flex align-items-stretch">
          <Col md={12} lg={6}>
            <div className={styles.customPriceBox}>
              <div className={styles.customBoxbg}>
                <div className={styles.customHeader}>
                  <div className={styles.customTitle}>
                    <h5>
                     {tit}
                    </h5>
                    <p>
                     {txt}
                    </p>
                  </div>
                  <div className={styles.customPrice}>
                    <div className={styles.startAt}>Starting at</div>
                    <div className={styles.Price}>${price}</div>
                  </div>
                </div>
                <div className={styles.customMainBtn}>
                  How We Price Content Marketing
                </div>
                <div className={styles.listPrice}>
                  <div className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <div className={styles.listIconSvg}>
                        <CustomPrice01 />
                      </div>
                    </div>
                    <div className={styles.listTxt}>
                      <h6>Content Requirement</h6>
                      <p>
                        Pricing depends on your content volume, from blog posts
                        to infographics and videos.
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
                      <h6>Performance Reports</h6>
                      <p>
                        All SEO plans include reports. Advanced content
                        reporting is available for custom plans $3,600+/month.
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
                      <h6>SEO & Content</h6>
                      <p>
                        Content is part of SEO, but extra content boosts growth
                        faster.
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

export default PostPrice;
