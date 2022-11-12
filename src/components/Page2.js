import React from 'react';
import asado from '../images/asado.jpeg';
import christmas from '../images/christmas.jpeg';
import Footer from './Footer';

function FastFacts (props) {
    return <div className="main-div">

        <div className="imgDiv">
            <img src={christmas} id="christmas"/>
            <img src={asado} id="asado"/>
        </div>

        <h1 className="page-title">Navidad</h1>

        <h2 className="section-title">Traditions</h2>
        <p>Christmas here is typically celebrated by drinking, visiting the beach in Montevideo, and watching fireworks. Some common Christmas foods include asado, potato salad, and icecream.</p>

        <h2 className="section-title">Uruguayan Asado</h2>
        <p>Asado is a barbequed variety of meat, cheeses, and vegetables cooked over a wood fire and served with sides.</p>
        <p>Ingredients:</p>
        <ul>
            <li>Skirt steak</li>
            <li>Canola oil</li>
            <li>Salt and peper</li>
            <li>Oregano</li>
            <li>Garlic</li>
            <li>Hickory wood chips</li>
        </ul>

        <p>Instructions:</p>
        <ol>
            <li>Throw wood chips onto charcoal and allow to burn for a few minutes before grilling.</li>
            <li>Brush both sides of steak with canola oil.</li>
            <li>Sprinkle on some pepper and oregano and/or garlic.</li>
            <li>Place meat on grill and cook for 3-5 minutes per side. Sprinkle as much salt as you'd like.</li>
            <li>Once cooked, flip over and salt again.</li>
            <li>Remove from grill and cover with foil. Let rest for 10-15, then slice as thinly as you can.</li>
        </ol>

        <br/>
        <Footer/>
    </div>
}

export default FastFacts;