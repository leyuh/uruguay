import React from 'react';
import '../styles/Footer.css';

function Footer (props) {
    const SOURCES = ["https://ichef.bbci.co.uk/news/624/mcs/media/images/79288000/jpg/_79288304_herding.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sol_de_Mayo-Bandera_de_Uruguay.svg/1200px-Sol_de_Mayo-Bandera_de_Uruguay.svg.png", "https://www.guruguay.com/wp-content/uploads/2013/12/NewYrMarceloFernandez.jpg", "https://laurenslatest.com/wp-content/uploads/2012/07/Uruguayan-Barbeque-9.jpg", "https://cdn.britannica.com/86/183786-050-EDCCA1A2/World-Data-Locator-Map-Uruguay.jpg", "https://wwwnc.cdc.gov/travel/images/map-uruguay.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Foto_Oficial_Presidente_Luis_Lacalle_Pou.jpg", "https://amuraworld.com/images/2015/NOVIEMBRE/1311/1311g-the-hand.jpg", "https://www.marylandzoo.org/wp-content/uploads/2017/10/chinchilla_web-1024x683.jpg", "https://nomadicboys.com/interesting-facts-about-uruguay/", "https://heyexplorer.com/what-is-uruguay-known-for/", "https://www.guruguay.com/average-income-in-uruguay/", "https://www.from-uruguay.com/2005/12/christmas-in-uruguay.html", "https://theculturetrip.com/south-america/uruguay/articles/how-to-spend-christmas-and-new-years-in-uruguay/", "https://en.wikipedia.org/wiki/Luis_Lacalle_Pou", "https://www.codigodelsur.com/blog/christmas-in-uruguay#", "https://www.thingstodopost.org/the-10-best-sights-landmarks-in-uruguay-uruguay-666485", "http://countrylicious.com/uruguay/famous-people", "https://en.wikipedia.org/wiki/History_of_Uruguay", "https://en.wikipedia.org/wiki/List_of_wars_involving_Uruguay", "https://laurenslatest.com/uruguayan-barbeque-asado"];

    return <div id="footer-div">
        <h1 id="footer-title">WORKS CITED</h1>
        <div id="sources-grid">
            {SOURCES.map((val, i) => {
                return <a className="source-link" key={i}>{val}</a>
            })}
        </div>
        <br/>
    </div>
}

export default Footer;