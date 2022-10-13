import React from "react";
import './Home.scss';
import BigButton from "../../components/BigButton/BigButton";

function Home() {
    return (
        <div className="home container--two-columns">
            <div className="left-column">
                <h5 className="home__title home__title--small"> So, you want to travel to </h5>
                <h1 className="home__title home__title--big">space</h1>

                <p className="home__text">
                    So, you want to travel to Space Let’s face it; if you want to
                    go to space, you might as well genuinely go to outer space and not
                    hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="right-column">
                <BigButton text="Explore"/>
                {/*<img src="./assets/destination/image-moon.png" alt=""/>*/}
            </div>
        </div>

    )
}

export default Home;