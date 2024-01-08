import React from 'react';
import circule from "../../../assets/images/price/circule.png";
import img from "../../../assets/images/price/img.png";
import s from "./Price.module.css";
import Title from "../../title/Title";
const Price = () => {

    const PriceRectangle = (props) => {

        const PriceTitle = (props) => {
            return (
                <div className={s.price__rectangle__list}>
                    <img className={s.price__rectangle__list__circule} src={circule} alt={circule}/>
                    <div className={s.price__rectangle__list__title}>{props.name}</div>
                </div>
            )
        }

        return (
            <div
                className={s.price__rectangle}
                style={{
                    padding: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: "0 auto",
                    width: `${props.width}px`,
                    height: `${props.height ? props.height : 500 }px`,
                }}
            >
                {/*<img className={s.price__rectangle} src={glass} alt="glass" />*/}
                <div className={s.price__rectangle__title}>{props.title}</div>
                <div className={s.price__rectangle__cost}>
                    <div className={s.price__rectangle__cost__dollar}>$</div>
                    <div className={s.price__rectangle__costsallary}>299</div>
                    <div className={s.price__rectangle__costzeros}>.00</div>
                </div>
                <div style={{
                    margin: "40px 0 60px 0",
                    width: "80%",
                    height: "fit-content",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    {
                        props.list.map(item => {
                            return (
                                <PriceTitle name={item} />
                            )
                        })
                    }

                </div>
                <div style={{
                    padding: "10px 0 10px 0",
                    border: `1px solid ${props.buttonBorder}`,
                    borderRadius: "29px",
                    width: "80%",
                    height: "fit-content",
                    background: props.buttonBG,
                    color: props.buttonColor,
                    textAlign: "center",
                    fontFamily: "Kumbh Sans",
                    fontSize: "22px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "156.304%", /* 34.387px */
                }}>
                    Select
                </div>
            </div>
        )
    }


    return (
        <section className={s.price}>
            <section style={{width: "100%"}}>
                <Title name={"Наш прайс"} color={"#FADFB7"} background={"linear-gradient(101deg, #361D72 0%, #8015ED 100%)"} shadow={"10px 10px 20px 0px #A1A1A1"} fw={"400"} fs={"64px"}/>
            </section>
            <div style={{
                display:"flex",
                alignItems: "center",
                gap: "45px",
            }}>

                <PriceRectangle height={500} width={400} title={"Basic Package"} list={["Basic Package", "Basic Package", "Basic Package"]} buttonColor={"#7346D2"} buttonBG={"#FADFB7"} buttonBorder={"#7346D2"} />
                <PriceRectangle height={700} width={400} title={"Basic Package"} list={["Basic Package", "Basic Package", "Basic Package", "Basic Package", "Basic Package", "Basic Package"]} buttonColor={"#7346D2"} buttonBG={"#393636"} buttonBorder={"#393636"} />
                <PriceRectangle height={500} width={400} title={"Basic Package"} list={["Basic Package", "Basic Package", "Basic Package"]} buttonColor={"#7346D2"} buttonBG={"#FADFB7"} buttonBorder={"#7346D2"} />

            </div>
        </section>
    );
};

export default Price;