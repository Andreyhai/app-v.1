import React from 'react';
import Title from "../../title/Title";
import img1 from "../../../assets/images/work/1.png";
import img2 from "../../../assets/images/work/2.png";
import img3 from "../../../assets/images/work/3.png";
const Work = () => {
    const MySection = (props) => {
      if (props.state === "right") {
          return (
              <section style={{
                  display:"flex",
                  gap:"40px",
                  maxWidth: "1440px",
              }}>
                  <section style={{
                      display: "flex",
                      gap: "30px",
                      justifyContent: "left",
                      flexWrap:"wrap",
                      height: "80%",
                      width: "50%",
                      alignItems: "center"
                  }}>
                      <section
                          style={{
                              padding: "20px 40px",
                              width:"fit-content",
                              borderRadius: "70px",
                              background: "linear-gradient(101deg, #361D72 0%, #8015ED 100%)",
                              color: "#FADFB7",
                              textAlign: "center",
                              fontFamily: "Kumbh Sans",
                              fontSize: "32px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                              height: "fit-content",
                          }}
                      >{props.title}</section>
                      <section style={{
                          padding: "20px 40px",
                          alignSelf: "center",
                          width:"100%",
                          borderRadius: "70px",
                          background: props.bg,
                          color: "#FADFB7",
                          textAlign: "center",
                          fontFamily: "Kumbh Sans",
                          fontSize: "32px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                      }}>{props.name}</section>
                  </section>
                  <section style={{
                      width: "30%"
                  }}>
                      <img style={{
                          width: "100%"
                      }} src={props.src} alt={props.src}/>
                  </section>
              </section>
          )
      } else if (props.state === "left") {
          return (
              <section style={{
                  display: "flex",
                  gap: "40px",
                  maxWidth: "1440px",
              }}>

                  <section style={{
                      width: "30%"
                  }}>
                      <img style={{
                          width: "100%"
                      }} src={props.src} alt={props.src}/>
                  </section>
                  <section style={{
                      display: "flex",
                      gap: "30px",
                      justifyContent: "right",
                      flexWrap: "wrap",
                      height: "80%",
                      width: "50%",
                      alignItems: "center"
                  }}>
                      <section
                          style={{
                              padding: "20px 40px",
                              width: "fit-content",
                              borderRadius: "70px",
                              background: "linear-gradient(101deg, #361D72 0%, #8015ED 100%)",
                              color: "#FADFB7",
                              textAlign: "center",
                              fontFamily: "Kumbh Sans",
                              fontSize: "32px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                              height: "fit-content",
                          }}
                      >{props.title}</section>
                      <section style={{
                          padding: "20px 40px",
                          alignSelf: "center",
                          width: "100%",
                          borderRadius: "70px",
                          background: props.bg,
                          color: "#FADFB7",
                          textAlign: "center",
                          fontFamily: "Kumbh Sans",
                          fontSize: "32px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                      }}>{props.name}</section>
                  </section>
              </section>
          )
      }
    }


    return (
        <section style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
        }}>

            <section style={{
                // background: "red",
                width: "1440px",
                display: "flex",
                flexWrap: "wrap",
            }}>
                <Title color={"#FADFB7"}
                       background={"linear-gradient(101deg, #361D72 0%, #8015ED 100%)"}
                       name={"Что мы делаем"}/>
                <MySection state={"right"} title={"Проектировка"}
                           name={"Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. "}
                           src={img1}
                           bg={"linear-gradient(101deg, #361D72 0%, #8015ED 100%)"}
                />
                <MySection state={"left"}
                           title={"Разработка"}
                           name={"Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. "}
                           src={img2}
                           bg={"linear-gradient(101deg, #E857FF 0%, #8015ED 100%)"}
                />
                <MySection state={"right"}
                           title={"Публикация"}
                           name={"Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. "}
                           src={img3}
                           bg={"linear-gradient(101deg, #00FF1A 0%, #1537ED 100%)"}
                />
            </section>
        </section>
    );
};

export default Work;