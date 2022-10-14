import React from 'react';
import './App.scss';
import './style/style.scss';
import Home from "./pages/Home/Home";
import {NavigationLink, Navbar, Logo, Header} from "./layout/Navigation/";
import Destination from "./pages/Destination/Destination";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Header>
                    <Navbar type="navbar navbar--big">
                        <NavigationLink to="home" displayName="Home" number={0}/>
                        <NavigationLink to="destination" displayName="Destination" number={1}/>
                        <NavigationLink to="crew" displayName="Crew" number={2}/>
                        <NavigationLink to="technology" displayName="Technology" number={3}/>
                    </Navbar>
                </Header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/destination" element={<Destination/>}/>
                    {/*<Route path="/crew" element={<Crew/>}/>*/}
                    {/*<Route path="/crew" element={<Crew/>}/>*/}
                </Routes>
            </BrowserRouter>

            {/*<img src="./assets/destination/image-moon.png" alt=""/>*/}
        </div>
    );
}

export default App;
