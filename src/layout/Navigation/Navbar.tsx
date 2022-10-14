import React from "react";

type Props = {
    children: React.ReactElement[] | React.ReactElement;
    type: string;
}

function Navbar({children, type} :Props) {
    return (
        <nav className={type}>
            {children}
        </nav>);
}

export default Navbar;