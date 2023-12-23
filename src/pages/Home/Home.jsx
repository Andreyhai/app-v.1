import React, {Fragment} from 'react';

import Header from "../../components/header/Header";
import Why from "../../components/sections/why/Why";
import s from "./Home.module.css";
import Sentence from "../../components/sentence/Sentence";
import Price from "../../components/sections/price/Price";
import Work from "../../components/sections/work/Work";
import Footer from "../../components/footer/Footer";
import Portfolio from "../../components/sections/portfolio/Portfolio";
import Feedback from "../../components/sections/feedback/Feedback";
const Home = () => {
    return (
        <div className={s.home}>
            <Header />
            <Why />
            <Sentence name={"СДЕЛАЙ БИЗНЕС ПРИБЫЛЬНЕЕ"} />
            <Price />
            <Work />
            <Portfolio />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;