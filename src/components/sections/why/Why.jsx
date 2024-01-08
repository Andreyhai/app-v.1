import React from 'react';
import Title from "../../title/Title";
import s from './Why.module.css';
import ilustration from "../../../assets/images/why/ilustration.png";
import items from "../../../assets/images/why/img.png";
const Why = () => {

    return (
        <section>
            <div className={s.why}>
                <div className={s.why__title}>
                    <Title name={"Почему именно мы?"} color={"#361D72"} background={"#FADFB7"} shadow={"10px 10px 20px 0px #A1A1A1"} fw={"400"} fs={"64px"}/>
                </div>
                <div className={s.why__phone}>
                    <img src={ilustration} alt={ilustration} />
                </div>
                <div className={s.why__items}>
                    <img src={items} alt={items}/>
                </div>
            </div>
        </section>
    );
};

export default Why;