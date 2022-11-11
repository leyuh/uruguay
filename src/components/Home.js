import React from 'react';
import backgroundImg from '../images/scenery.jpeg';
import sunImg from '../images/sun.png';

import '../styles/Home.css';

function Home (props) {
    return <div className="main-div" id="home-div">
        <img id="home-background-img" src={backgroundImg}></img>
        <img id="home-sun-img" src={sunImg}></img>
        <h1 id="home-uruguay-title">URUGUAY</h1>
    </div>
}

export default Home;