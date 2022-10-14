import React from "react";

type Props = {
    children: React.ReactElement[];
}

function Navbar({children} :Props) {
    return (
        <nav className="navbar">
            {children}
        </nav>);
}

export default Navbar;