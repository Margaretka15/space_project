import React from "react";
import './SmallButton.scss';
type Props = {
    text: string;
    actionOnClick: Function;
}
function SmallButton ({text, actionOnClick}: Props) {
    return (
        <button className="button--small" onClick={() => actionOnClick()}>{text}</button>
    )
}
export default SmallButton;