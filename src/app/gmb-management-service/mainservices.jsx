import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo3/mainservice.module.scss"
import Image from "next/image"
import CommonBtn from "@/src/app/components/common/commonbtn"

const MainServices = ({ data }) => {
    return (
        <section className={`${styles.serviceSection} pt-100`}>
            {data.map((item, index) => (
                <div className={styles.MainServicesBox} key={index}>
                    <div className={styles.ServTxtBox}>
                        <h2>{item.title}</h2>
                        <p>{item.txt}</p>
                        <div className={styles.btnFlex}>
                            <CommonBtn txt="Click To Grow" LiveChat={true} BgBlack={true} />
                        </div>
                    </div>
                    <div className={styles.ServImgBox}>
                        <Image src={item.img} alt="Serv 01" fill />
                    </div>
                </div>
            ))
            }
        </section>
    )
}

export default MainServices
