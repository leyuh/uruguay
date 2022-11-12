import React from 'react';
import Footer from './Footer';
import luis from '../images/luis.jpeg';

function FastFacts (props) {
    return <div className="main-div">

        <div className="imgDiv">
            <img src={luis} id="luis"/>
        </div>


    <h1 className="page-title">Demographics &amp; Sociology </h1>

    <h2 className="section-title">La publación</h2>
    <p>La publación de Uruguay es 3,485,000. Las ciudades más grandes son Montevideo y Mercedes.</p>
    <br/>

    <h2 className="section-title">El gobierno</h2>
    <p>Tienen una república. El presidente está Luis Lacalle Pou.</p>

    <h2 className="section-title">Los famosos</h2>
    <ul>
        <li>Luis Suarez</li>
        <li>Edison Cavani</li>
        <li>Diego Forlan</li>
        <li>Mario Benedetti</li>
        <li>Jose Mujica</li>
    </ul>

    <h2 className="section-title">Los problemas de hoy</h2>
    <p>Los problems de hoy son no buena agua (polluted water) y no muchos arboles (deforestation).</p>

    <br/>

    <Footer/>

    </div>
}

export default FastFacts;