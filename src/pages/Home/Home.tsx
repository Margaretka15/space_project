import React from "react";
import './Home.scss';
import BigButton from "../../components/BigButton/BigButton";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home page container--two-columns">
            <div className="left-column">
                <h5 className="home__title home__title--small"> So, you want to travel to </h5>
                <h1 className="home__title home__title--big">space</h1>

                <p className="body-text home__text">
                    Let’s face it; if you want to
                    go to space, you might as well genuinely go to outer space and not
                    hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="right-column">
                <Link to="/destination"><BigButton text="Explore"/></Link>
                {/*<img src="./assets/destination/image-moon.png" alt=""/>*/}
            </div>
        </div>

    )
}

export default Home;