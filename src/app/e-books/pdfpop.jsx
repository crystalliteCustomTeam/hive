
import styles from "@/styles/components/pdfpop.module.scss"
import { Modal } from "react-bootstrap"
import { ClosedBtn } from "@/src/app/app-constants"
import FormPDF from "@/src/app/e-books/formpdf"


const PdfPoP = ({ onHide, show, pdf }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <section className={styles.popupSection}>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                <div className={styles.fromPopup}>
                    <h3>Download Your Free Ebook!</h3>
                    <p>Fill out the form to download your free E-Book.</p>
                    <FormPDF pdf={pdf} />
                </div>
            </section>
        </Modal>
    )
}

export default PdfPoP