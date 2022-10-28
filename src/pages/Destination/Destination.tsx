import React, {useEffect, useState} from "react";
import './Destination.scss';
import {Navbar} from "../../layout/Navigation";
import DestinationDetails from "./DestinationDetails";
import getData from "../../services/getData/getData";

import {IDestination} from "./interfaces";
import Loader from "../../components/shared/Loader/Loader";

function Destination() {

    const [destinations, setDestinations] = useState(Array<IDestination>)
    const [isLoading, setIsLoading] = useState(true);
    const [activeDestinationID, setActiveDestinationID] = useState(0);

    const handleData = (data: { destinations: [] }) => {
        setDestinations(data.destinations);
        setIsLoading(false);
    }
    useEffect(() => {
        getData("destinations", handleData);
    }, [])


    return (
        <div className="destination page container--two-columns">
            <div className="left-column">
                <h5 className="destination__title destination__title--small"> <span>01</span>Pick your destination</h5>

                {!isLoading && <img src={`./assets/destination/image-${destinations[activeDestinationID].name}.png`} alt=""/>}


            </div>
            <div className="right-column">
                <div>
                        <Navbar type="">
                            {/*to do: check if destinations.length > 0 before rendering (show loader)*/}
                            {destinations.map((d, index) => (
                                <button className={activeDestinationID === index ? "navbar__link navbar__link--active" : "navbar__link"}
                                        onClick={() => {
                                            setActiveDestinationID(index);
                                        }}>0{index} {d.name} </button>))}

                        </Navbar>
                        <DestinationDetails {...destinations[activeDestinationID]}/>


                </div>

            </div>
        </div>

    )
}

export default Destination;