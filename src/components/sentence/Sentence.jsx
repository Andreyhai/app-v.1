import React from 'react';

const Sentence = (props) => {

    const styles = [
        {
            position: "relative",
            top: "65px",
            width: "100%",
            display: "flex",
            justifyContent: "center",

        },
        {
            // marginTop: "50px",
            paddingLeft: "100px",
            width: "1440px",
            height: "102px",
            flexDirection: "column",
            flexShrink: 0,
            color: "#000",
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
        }
    ]

    return (
        <div style={styles[0]}>
            <div style={styles[1]}>
                {props.name}
            </div>
        </div>
    );
};

export default Sentence;