import React from "react";
import {Logo} from "./index";
import './Header.scss';
type Props = {
    children: React.ReactElement[] | React.ReactElement;
}
function Header({children} : Props) {
    return (
        <div className="header">
            <Logo/>


            {children}
        </div>
    )
}

export default Header;