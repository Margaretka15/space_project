import React from "react";

type Props = {
    to: string;
    number: number;
}

function NavLink({to, number}: Props) {
    return (
        <div className="navbar__link"><span>0{number}</span>{to}</div>
    )
}

export default NavLink;