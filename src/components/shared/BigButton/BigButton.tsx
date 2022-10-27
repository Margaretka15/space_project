import React from "react";
import './BigButton.scss';
type Props = {
    text: string;
}
function BigButton ({text}: Props) {
    return (
        <button className="button--big">{text}</button>
    )
}

export default BigButton;