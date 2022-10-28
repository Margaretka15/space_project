import React from "react";
import './SmallButton.scss';

type Props = {
    text: string;
    actionOnClick: Function;
    cssClass: string;
}

/// tu du: przemyslec, czy skoro daję klasę i onClick, to wgl trzeba robić taki komponent?
// albo czy potrzeba też bigButton? może po prostu button?
function SmallButton({text, actionOnClick, cssClass}: Props) {
    return (
        <button className={cssClass} onClick={() => actionOnClick()}>{text}</button>
    )
}

export default SmallButton;