import styles from "@/styles/landing/components/seo3/mainservice.module.scss"
import Image from "next/image"
import CommonBtn from "@/src/app/components/common/commonbtn"

const MainServices = ({ data, Container }) => {
    return (
        <section className={`${styles.serviceSection}  ${Container ? styles.ContainerBox : ""} pt-100`}>
            {data.map((item, index) => (
                <div className={styles.MainServicesBox} key={index}>
                    <div className={styles.ServTxtBox}>
                        <h2>{item.title}</h2>
                        <div>{item.txt}</div>
                        <div className={styles.btnFlex}>
                            <CommonBtn txt={item?.btntxt ? item?.btntxt : "Book a Free Consultation"} LiveChat={true} BgBlack={true} />
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
