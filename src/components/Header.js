import React from 'react';
import '../styles/Header.css';
import sunImg from '../images/sun.png';

function Header (props) {
    const SECTIONS = ["HOME", "FAST FACTS", "NAVIDAD", "GEOGRAPHY & ECOLOGY", "DEMOGRAPHICS & SOCIOLOGY"];


    return <div id="header-div">
        <ul id="header-list">
            {SECTIONS.map((val, i) => {
                return <li className="header-item" key={i}>
                    <a className="header-link">{val}</a>
                </li>
            })}
        </ul>

        <img src={sunImg} id="sun-img"/>
    </div>
}

export default Header;
