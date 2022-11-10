import React from 'react';
import '../styles/Footer.css';

function Footer (props) {
    const SOURCES = ["https://nomadicboys.com/interesting-facts-about-uruguay/", "https://heyexplorer.com/what-is-uruguay-known-for/", "https://www.guruguay.com/average-income-in-uruguay/", "https://www.from-uruguay.com/2005/12/christmas-in-uruguay.html", "https://theculturetrip.com/south-america/uruguay/articles/how-to-spend-christmas-and-new-years-in-uruguay/", "https://en.wikipedia.org/wiki/Luis_Lacalle_Pou", "https://www.codigodelsur.com/blog/christmas-in-uruguay#", "https://www.thingstodopost.org/the-10-best-sights-landmarks-in-uruguay-uruguay-666485", "http://countrylicious.com/uruguay/famous-people"];

    return <div id="footer-div">
        <h1 id="footer-title">SOURCES</h1>
        <div id="sources-grid">
            {SOURCES.map((val, i) => {
                return <a className="source-link" key={i}>{val}</a>
            })}
        </div>
    </div>
}

export default Footer;