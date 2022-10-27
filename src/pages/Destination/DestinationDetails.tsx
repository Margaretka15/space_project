import React from "react";

import {IDestination} from "./interfaces";

function DestinationDetails(destination: IDestination) {
    const {name, description, travel, distance} = destination;
    return (
        <div>
            <h2 className="destination__title destination__title--big">{name}</h2>
            <p className="body-text destination__text">
                {description}
            </p>
            <div className="subheading-2">Avg. distance</div>
            <div className="subheading-1">{distance}</div>
            <div className="subheading-2">Est. travel time</div>
            <div className="subheading-1">{travel}</div>

        </div>
    )
}

export default DestinationDetails;