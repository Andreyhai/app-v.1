import React from 'react';

const Title = (props) => {
    const style = {
        margin: "0 auto",
        padding: "30px 50px 30px 50px",
        color: props.color,
        textAlign: "center",
        fontSize: props.fs,
        fontStyle: "normal",
        fontWeight: props.fw,
        lineHeight: "normal",
        borderRadius: "100px",
        background: props.background,
        boxShadow: props.shadow,
        width: "fit-content",
        height: "fit-content",
        cursor: props.cursor
    }

    return (
        <div style={style}>
            {props.name}
        </div>
    );
};

export default Title;