import React from "react";
// import "./Button.scss";

const Button = ({children}) => {

    return <>
        <button className="boton font-big">{children}</button>
    </>
}

export default Button;
