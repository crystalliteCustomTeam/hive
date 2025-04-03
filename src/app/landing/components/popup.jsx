import styles from "@/styles/components/popup.module.scss";
import { Modal } from "react-bootstrap";
import { ClosedBtn } from "@/src/app/app-constants";
import Law from "./pop/law";
import Home from "./pop/home";
import Travel from "./pop/travel";
import Dentist from "./pop/dentist";
import Insurance from "./pop/insurance";
import HVAC from "./pop/hvac";
import Apparel from "./pop/apparel";
import Food from "./pop/food";

const PopUp = ({ show, onHide, caseData }) => {
  if (!caseData) return null; 

  return (
    <Modal size="lg" show={show} onHide={onHide} centered>
      <section className={styles.popupSection}>
        <div className={styles.closedBtn} onClick={onHide}>
          <ClosedBtn />
        </div>
        {caseData.url === "law-firm-seo-case-study" && <Law />}
        {caseData.url === "interior-design-seo-case-study" && <Home />}
        {caseData.url === "travel-seo-case-study" && <Travel />}
        {caseData.url === "dentist-seo-case-study" && <Dentist />}
        {caseData.url === "insurance-seo-case-study" && <Insurance />}
        {caseData.url === "hvac-seo-case-study" && <HVAC />}
        {caseData.url === "fashion-ecommerce-seo-case-study" && <Apparel />}
        {caseData.url === "food-and-drinks-seo-case-study" && <Food />}
      </section>
    </Modal>
  );
};

export default PopUp;
