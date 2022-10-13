import React from 'react';
import './App.scss';
import './style/style.scss';
import Home from "./pages/Home/Home";
import NavLink from "./layout/NavLink";

function App() {
  return (
    <div className="App">
        <div className="navbar">
            <NavLink to="Home" number={0}/>
            <NavLink to="Destination" number={1}/>
            <NavLink to="Crew" number={2}/>
            <NavLink to="Technology" number={3}/>
        </div>
        <Home />
      {/*<img src="./assets/destination/image-moon.png" alt=""/>*/}
    </div>
  );
}

export default App;
