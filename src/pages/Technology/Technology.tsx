import React, {useEffect, useState} from "react";
import './Technology.scss';

import getData from "../../services/getData/getData";

import Loader from "../../components/shared/Loader/Loader";
import Step from "../../layout/Navigation/Step";
import SmallButton from "../../components/shared/SmallButton/SmallButton";

interface ITechnology {
    name: "string";
    images: {
        portrait: "string";
        landscape: "string";
    };
    description: "string";
}

function Technology() {

    const [technologies, setTechnologies] = useState(Array<ITechnology>)
    const [isLoading, setIsLoading] = useState(true);
    const [activeTechnologyID, setActiveTechnologyID] = useState(0);

    const handleData = (data: { technology: [] }) => {
        setTechnologies(data.technology);
        setIsLoading(false);
    }
    useEffect(() => {
        getData("technology", handleData);
    }, [])


    return (
        <div className="technology page">
            <Step stepNumber={3} label="Space launch 101 "/>

            <div className="container--two-columns">
                <div className="left-column">
                    <div className="technology__circles-container">
                        {technologies.map((t, index) =>
                            <SmallButton text={(index + 1).toString()}
                                         actionOnClick={() => setActiveTechnologyID(index)}/>
                        )}

                    </div>
                    {!isLoading && <>
                      <h5>The technology...</h5>
                      <h3>{technologies[activeTechnologyID].name}</h3>

                      <p className="body-text">{technologies[activeTechnologyID].description}</p>


                    </>}

                </div>
                <div className="right-column">
                    <div>

                        {!isLoading && <img src={technologies[activeTechnologyID].images.portrait} alt=""/>}

                    </div>

                </div>
            </div>

        </div>


    )
}

export default Technology;