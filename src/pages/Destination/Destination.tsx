import React from "react";
import './Destination.scss';
import {Navbar, NavigationLink} from "../../layout/Navigation";
import {NavLink} from "react-router-dom";

function Destination() {
    return (
        <div className="destination page container--two-columns">
            <div className="left-column">
                <h5 className="destination__title destination__title--small"> <span>01</span>Pick your destination</h5>

                <img src="./assets/destination/image-moon.png" alt=""/>

            </div>
            <div className="right-column">
                <div>

                    <Navbar type="navigation--small">
                        <NavigationLink to="moon" displayName="Moon"/>
                    </Navbar>
                    <h2 className="destination__title destination__title--big">Moon</h2>
                    <p className="body-text destination__text">
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                        regain perspective and come back refreshed. While you’re there, take in some history
                        by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div className="subheading-2">Avg. distance</div>
                    <div className="subheading-2">Est. travel time</div>
                    <div className="subheading-1">384,400 km</div>
                    <div className="subheading-1"> 3 days</div>

                </div>

                {/*<img src="./assets/destination/image-moon.png" alt=""/>*/}
            </div>
        </div>

    )
}

export default Destination;