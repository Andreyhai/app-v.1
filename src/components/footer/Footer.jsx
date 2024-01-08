import React from 'react';
import s from "./Footer.module.css";
import img1 from "../../assets/icons/img1.png"
import img2 from "../../assets/icons/img2.png"
import img3 from "../../assets/icons/img3.png"
import img4 from "../../assets/icons/img4.png"
import img5 from "../../assets/icons/img5.png"
import img6 from "../../assets/icons/img6.png"
import img7 from "../../assets/icons/img7.png"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <section className={s.footer__iconsList}>
                <div className={s.footer__iconsList__content}>
                    <img src={img1} alt="img"/>
                    <img src={img2} alt="img"/>
                    <img src={img3} alt="img"/>
                    <img src={img4} alt="img"/>
                    <img src={img5} alt="img"/>
                    <img src={img6} alt="img"/>
                    <img src={img7} alt="img"/>
                </div>
            </section>
            <section className={s.footer__links}>
                <div style={{
                    width: "1440px",
                    display: "flex",
                    gap: "30px",
                }}>
                    <section className={s.footer__links__link}>
                        <div className={s.footer__links__link__title}>
                            <div></div>
                        </div>
                        <div className={s.footer__links__link__body}>
                            <div style={{width: "90%"}}></div>
                            <div style={{width: "70%"}}></div>
                            <div style={{width: "60%"}}></div>
                            <div style={{width: "90%"}}></div>
                        </div>
                    </section>

                    <section className={s.footer__links__link}>
                        <div className={s.footer__links__link__title}>
                            <div></div>
                        </div>
                        <div className={s.footer__links__link__body}>
                            <div style={{width: "90%"}}></div>
                            <div style={{width: "70%"}}></div>
                            <div style={{width: "60%"}}></div>
                            <div style={{width: "90%"}}></div>
                        </div>
                    </section>

                    <section className={s.footer__links__link}>
                        <div className={s.footer__links__link__title}>
                            <div></div>
                        </div>
                        <div className={s.footer__links__link__body}>
                            <div style={{width: "90%"}}></div>
                            <div style={{width: "70%"}}></div>
                            <div style={{width: "60%"}}></div>
                            <div style={{width: "90%"}}></div>
                        </div>
                    </section>

                    <section className={s.footer__links__link}>
                        <div className={s.footer__links__link__title}>
                            <div></div>
                        </div>
                        <div className={s.footer__links__link__body}>
                            <div style={{width: "90%"}}></div>
                            <div style={{width: "70%"}}></div>
                            <div style={{width: "60%"}}></div>
                            <div style={{width: "90%"}}></div>
                        </div>
                    </section>
                </div>

            </section>

        </footer>
    );
};

export default Footer;