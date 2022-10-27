import React, {useEffect, useState} from "react";
import './Destination.scss';
import {Navbar} from "../../layout/Navigation";
import DestinationDetails from "./DestinationDetails";
import getData from "../../services/getData/getData";

import {IDestination} from "./interfaces";

function Destination() {

    const [destinations, setDestinations] = useState(Array<IDestination>)
    const [active, setActive] = useState(0);
    const handleData = (data: { destinations: [] }) => {
        setDestinations(data.destinations);
    }
    useEffect(() => {
        getData("destinations", handleData);
    }, [])


    return (
        <div className="destination page container--two-columns">
            <div className="left-column">
                <h5 className="destination__title destination__title--small"> <span>01</span>Pick your destination</h5>

                <img src={`./assets/destination/image-${destinations[active].name}.png`} alt=""/>

            </div>
            <div className="right-column">
                <div>

                    <Navbar type="navigation--small">

                        {destinations.map((d, index) => (
                            <button className={"navbar__link"} onClick={()=>{
                            setActive(index);
                        }}>0{index} {d.name} </button>)) }


                    </Navbar>
                    <DestinationDetails {...destinations[active]}/>


                </div>

            </div>
        </div>

    )
}

export default Destination;