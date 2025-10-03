"use client"
import { useState, useEffect } from "react"
import styles from "@/styles/components/pdfpop.module.scss"
import Image from "next/image"
import IMG from "media/pdfpopup/popupImg.webp"
import PDFGIF from "media/pdfpopup/PDFGIF.gif"
import Link from "next/link"
import { ClosedBtn } from "@/src/app/app-constants"

const PDFPopUp = () => {
    const [isActive, setIsActive] = useState(false)
    const [isClosed, setIsClosed] = useState(false)

    useEffect(() => {
        const closed = localStorage.getItem("pdfClosed")
        if (closed === "true") {
            setIsClosed(true)
        }
    }, [])

    const handleOpen = () => {
        if (!isClosed) {
            setIsActive(true)
        }
    }

    const handleClose = () => {
        setIsActive(false)
        setIsClosed(true)
        localStorage.setItem("pdfClosed", "true")
    }
    if (isClosed) return null

    return (
        <div className={`${styles.pdfSection} ${isActive ? styles.active : ""}`}>
            <div className={styles.openBtn} onClick={handleOpen}>
                <Image
                    src={PDFGIF.src}
                    alt="PDF Download Image"
                    fill
                />
            </div>
            <div className={styles.pdfContent}>
                <div className={styles.closedBtn} onClick={handleClose}>
                    <ClosedBtn />
                </div>
                <Image
                    src={IMG.src}
                    alt="PDF Download Image"
                    width={600}
                    height={400}
                />
                <h4>Your Brand Visible in ChatGPT, Gemini and Claude?</h4>
                <Link href="/e-books">Download PDF</Link>
            </div>
        </div>
    )
}

export default PDFPopUp
