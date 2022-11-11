import React from 'react';
import '../styles/Header.css';

function Header (props) {
    const {sections, setCurrentPage} = props;


    return <div id="header-div">
        <ul id="header-list">
            {sections.map((val, i) => {
                return <li className="header-item" key={i}>
                    <a className="header-link" onClick={() => {
                        setCurrentPage(sections[i]);
                    }}>{val}</a>
                </li>
            })}
        </ul>
    </div>
}

export default Header;
