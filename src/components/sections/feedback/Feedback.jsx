import React from 'react';
import Title from "../../title/Title";
import s from "./Feedback.module.css";
const Feedback = () => {
    return (
        <section className={s.feedback}>
            <section className={s.feedback__content}>
                <section>
                    <Title name={"Быстрая обратная связь"} color={"#FFF"} background={"linear-gradient(92deg, #361D72 -1.07%, #8015ED 100%)"} />
                </section>
                <section className={s.feedback__content__form}>

                </section>
            </section>
        </section>
    );
};

export default Feedback;