import React from 'react';
import flag from "../images/flag.png";
import map from "../images/bigmap.webp";
import cattle from "../images/cattle.jpeg";
import Footer from './Footer';

function FastFacts (props) {
    return <div className="main-div">

        <div className="imgDiv">
            <img src={map} id="map"/>
            <img src={cattle} id="cattle"/>
            <img src={flag} id="flag"/>
        </div>

        <h1 className="page-title">Fast Facts</h1>

        <h2 className="section-title">Basic Info</h2>
        <p>Uruguay is neighbored by Argentina and Brazil, and is the smallest Spanish-speaking country in South America. Its name means "river of painted birds". Uruguay is known for its beaches, soccer players, cows, and high standard of living.</p>


        <h2 className="section-title">Background</h2>
        <p>Uruguay was first discovered by the Spanish in 1516, and the first permanent settlement was founded in 1624. The Republic of Uruguay gained its independence in 1828 as a result of the Cisplatine War, and has been involved in multiple wars since, including the Revolution of 1904 and World War II.
        </p>


        <h2 className="section-title">Economy &amp; Government</h2>
        <p>The average annual salary in Uruguay is $5,952 USD. Their government is currently a presidential representative democratic republic.</p>


        <br/>

        <Footer/>
    </div>
}

export default FastFacts;