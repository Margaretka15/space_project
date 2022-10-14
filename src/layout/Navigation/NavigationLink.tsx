import React from "react";
import {NavLink} from "react-router-dom";

type Props = {
    to: string;
    number?: number;
    displayName: string;
}

function NavigationLink({to, number, displayName}: Props) {
    return (
        <NavLink to={to}
                 className={({isActive}) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")}>
           <span>0{number}</span>{displayName}
        </NavLink>
    )
}

export default NavigationLink;