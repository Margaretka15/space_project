import React from "react";

type Props = {
    stepNumber: number;
    label: string;
}

function Step({stepNumber, label}: Props) {
    return (
        <div>
            <h5 className="technology__title technology__title--small">
                <span>0{stepNumber}</span>
                {label}
            </h5>
        </div>
    )
}

export default Step;