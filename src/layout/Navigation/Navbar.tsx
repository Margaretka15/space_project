import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons'

import React, {useState} from "react";

type Props = {
    children: React.ReactElement[] | React.ReactElement;
    type: string;
}

function Navbar({children, type}: Props) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(isExpanded => !isExpanded)
    }

    return (
        <>
            <button className="navbar__hamburger"
                    onClick={() => {
                        toggleMenu();
                    }}>
                <FontAwesomeIcon icon={isExpanded ? faClose : faBars}/>
            </button>
            <nav className={!isExpanded ? "navbar" : "navbar navbar--expanded"}>
                {children}
            </nav>
        </>
    );
}

export default Navbar;