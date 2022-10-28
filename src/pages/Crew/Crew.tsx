import React, {useEffect, useState} from "react";
import './Crew.scss';
import {IDestination} from "../Destination/interfaces";
import getData from "../../services/getData/getData";
import {Navbar} from "../../layout/Navigation";
import DestinationDetails from "../Destination/DestinationDetails";

interface ICrewMember {
    name: "string";
    images: {
        png: "string";
        web: "string";
    },
    role: "string";
    bio: "string";
}

function Crew() {
    const [members, setMembers] = useState(Array<ICrewMember>)
    const [isLoading, setIsLoading] = useState(true);
    const [activeMemberID, setActiveMemberID] = useState(0);

    const handleData = (data: { crew: [] }) => {
        setMembers(data.crew);
        setIsLoading(false);
    }
    useEffect(() => {
        getData("crew", handleData);
    }, [])


    return (
        <div className="crew page container--two-columns">
            <div className="left-column">
                <h5 className="crew__title crew__title--small"><span>02</span>Meet your crew</h5>

                {!isLoading && <>
                  <h4>{members[activeMemberID].role}</h4>
                  <h3>{members[activeMemberID].name}</h3>
                  <p className="body-text">{members[activeMemberID].bio}</p>
                  <Navbar type="">
                      {/*to do: check if destinations.length > 0 before rendering (show loader)*/}
                      {members.map((d, index) => (
                          <button
                              className={activeMemberID === index ? "navbar__link navbar__link--active" : "navbar__link"}
                              onClick={() => {
                                  setActiveMemberID(index);
                              }}>*</button>))}

                  </Navbar>

                </>}

            </div>
            <div className="right-column">
                <div>



                    {!isLoading &&
                    <img src={members[activeMemberID].images.png} alt=""/>}



                </div>

            </div>
        </div>

    )
}

export default Crew;