"use client";
import { useState } from "react";
import PopUp from "@/src/app/components/popup";
import { ArrowIcon } from "@/src/app/app-constants";
import styles from "@/styles/components/commonbtn.module.scss";
import Link from "next/link";

const CommonBtn = ({
    purple,
    txt,
    ArrowBtn,
    SimpleBtn,
    blackBg,
    LiveChat,
    center,
    BgBlack,
    FlexStart,
    chatTitle,
    LinkBtn,
    SeoPages,
    chatOnly
}) => {
    // Chat Code
    const openChat = () => {
        if (window.LC_API) {
            window.LC_API.open_chat_window();
        } else {
            console.error("LiveChat API is not loaded");
        }
    };
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };

    return (
        <>
            {ArrowBtn ? (
                LinkBtn ? (
                    <Link
                        href={LinkBtn}
                        className={FlexStart ? "commonBtnSimple flexstart" : "commonBtnSimple"}
                    >
                        <ArrowIcon />
                    </Link>
                ) : (
                    <div
                        onClick={() => handleClick()}
                        className={FlexStart ? "commonBtnSimple flexstart" : "commonBtnSimple"}
                    >
                        {SimpleBtn ? null : <ArrowIcon />}
                        {txt}
                    </div>
                )
            ) : LiveChat ? (
                <div
                    className={`${styles.btnFlex} ${center ? styles.center : ""} ${BgBlack ? styles.bgBlack : ""
                        }`}
                >
                    <div onClick={() => handleClick()} className={styles.btnStyle}>
                        {txt}
                    </div>
                    <div className={styles.chatStyle} onClick={openChat}>
                        {chatTitle ? chatTitle : "Live Chat"}
                    </div>
                </div>
            ) : LinkBtn ? (
                <div
                    className={`${styles.btnFlex} ${center ? styles.center : ""} ${BgBlack ? styles.bgBlack : ""
                        }`}
                >
                    <div className={`commonBtn extraBtn`}>
                        <Link href={LinkBtn}>{txt}</Link>
                    </div>
                    <div className={styles.chatStyle} onClick={openChat}>
                        {chatTitle ? chatTitle : "Live Chat"}
                    </div>
                </div>
            ) : chatOnly ? (
                <div
                    className="commonBtn"
                >

                    <div className={styles.chatStyle} onClick={openChat}>
                        {chatTitle ? chatTitle : "Live Chat"}
                    </div>
                </div>
            ) : (
                <div
                    className={`commonBtn ${blackBg ? "blackBg" : ""} ${purple ? "purpleBg" : ""
                        }`}
                    onClick={() => handleClick()}
                >
                    <span>{txt}</span>
                </div>
            )}

            <PopUp show={modalShow} onHide={() => setModalShow(false)} SeoPages={SeoPages} />
        </>
    );
};

export default CommonBtn;
