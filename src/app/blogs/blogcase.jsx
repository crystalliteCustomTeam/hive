import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/landing/components/seo/casestudy.module.scss";
import Image01 from "media/landing/seo/case/1.webp";
import Image02 from "media/landing/seo/case/2.webp";
import Image03 from "media/landing/seo/case/3.webp";
import Image04 from "media/landing/seo/case/4.webp";
import Image05 from "media/landing/seo/case/5.webp";
import Image06 from "media/landing/seo/case/6.webp";
import Image07 from "media/landing/seo/case/7.webp";
import Image08 from "media/landing/seo/case/8.webp";
const data = [
  {
    title: "Lawfirm",
    txt: "Increased Calls & Inquiries by 18.7% in 6 Months",
    img: Image01.src,
    url: "law-firm-seo-case-study",
  },
  {
    title: "Home Decor",
    txt: "1,200% Increase in Physical Store Location Requests",
    img: Image02.src,
    url: "interior-design-seo-case-study",
  },
  {
    title: "Travel",
    txt: "Increased Bookings by 304.6% in Just 8 Months",
    img: Image03.src,
    url: "travel-seo-case-study",
  },
  {
    title: "Dentist",
    txt: "60.7% More Patients, 221% More Calls in 3 months",
    img: Image04.src,
    url: "dentist-seo-case-study",
  },
  {
    title: "Insurance",
    txt: "83.5% More Users and 70.3% More Conversions",
    img: Image05.src,
    url: "insurance-seo-case-study",
  },
  {
    title: "HVAC",
    txt: "12K New Users & 44.8% More Bookings",
    img: Image06.src,
    url: "hvac-seo-case-study",
  },
  {
    title: "Apparel",
    txt: "$490K in Organic Sales in 6 Months",
    img: Image07.src,
    url: "fashion-ecommerce-seo-case-study",
  },
  {
    title: "Food & Beverages",
    txt: "41% More Users & 28.3% Revenue Growth",
    img: Image08.src,
    url: "food-and-drinks-seo-case-study",
  },
];

const BlogCase = () => {
  return (
    <>
      <section
        className={`${styles.casestudyLpSection}`}
        id="CaseStudies"
      >
        <Container>
          <Row>
            <Col md={12} className="m-auto">
              <h2>Our Case Studies</h2>
            </Col>
            <Col md={12}>
              <div className={styles.casestudyLpBox}>
                {data.map((item, index) => (
                  <div
                    className={styles.casestudyItem}
                    key={index}
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <h4>{item.title}</h4>
                    <div className={styles.casestudyTxt}>
                      <p>{item.txt}</p>
                      <Link className={styles.btnCase} href={item.url}>
                        View Detail
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogCase;
