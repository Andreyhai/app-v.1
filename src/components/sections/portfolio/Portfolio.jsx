import React from 'react';
import Title from "../../title/Title";
import s from "./Portfolio.module.css";
import img1 from "../../../assets/images/portfolio/first.png"
import img2 from "../../../assets/images/portfolio/second.png"
import img3 from "../../../assets/images/portfolio/third.png"
const Portfolio = () => {
    return (
        <section className={s.portfolio}>
            <section style={{width: "100%"}}>
                <Title name={"Портфолио"} color={"#FFF"} background={"linear-gradient(92deg, #361D72 -1.07%, #8015ED 100%)"}/>
            </section>

            <section className={s.portfolio__slider}>
                <section className={s.portfolio__slider__left}>
                    <img src={img1} alt="img"/>
                </section>
                <section className={s.portfolio__slider__center}>
                    <img src={img2} alt="img"/>
                </section>
                <section className={s.portfolio__slider__right}>
                    <img src={img3} alt="img"/>
                </section>
            </section>

        </section>
    );
};

export default Portfolio;