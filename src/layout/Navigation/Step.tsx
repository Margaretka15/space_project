import React from "react";
import "./Step.scss";

type Props = {
    stepNumber: number;
    label: string;
}

function Step({stepNumber, label}: Props) {
    return (
        <div className="step">
            <h5>
                <span className="step__number">0{stepNumber}</span>
                <span className="step__title">{label}</span>
            </h5>
        </div>
    )
}

export default Step;