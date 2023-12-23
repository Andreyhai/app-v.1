import React from 'react';

const Title = (props) => {
    const style = {
        margin: "0 auto",
        padding: "30px 50px 30px 50px",
        color: props.color,
        textAlign: "center",
        fontSize: "64px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        borderRadius: "100px",
        background: props.background,
        boxShadow: "10px 10px 20px 0px #A1A1A1",
        width: "fit-content",
        height: "fit-content"
    }

    return (
        <div style={style}>
            {props.name}
        </div>
    );
};

export default Title;