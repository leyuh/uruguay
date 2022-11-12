import React from 'react';
import Footer from './Footer';
import chinchilla from '../images/chinchilla.jpeg';
import fingers from '../images/fingers.jpeg';
import map from '../images/smallmap.png';

function FastFacts (props) {
    return <div className="main-div">

        <div className="imgDiv">
            <img src={fingers} id="fingers"/>
            <img src={chinchilla} id="chinchilla"/>
            <img src={map} id="smallmap"/>
        </div>

        <h1 className="page-title">Geography &amp; Ecology </h1>

        <h2 className="section-title">Puntos de referencia</h2>
        <p>Los puntos de referencia más famosos son Los Dedos de Punta del Este y Plaza Indepencia.</p>

        <h2 className="section-title">Animales</h2>
        <p>Los animales más populares son la chinchilla y el carpincho (capybara).</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>A la derecha es un mapa de Uruguay.</p>

        <br/>
        <Footer/>

    </div>
}

export default FastFacts;