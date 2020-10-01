import React, {Fragment, useState} from "react";
import "./style.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";

export default () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const handleBurgerMenuClick = () => {
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div>
            <nav className="nav">
                <div className="nav-brand__container">
                    <Link to="/" className="nav-brand__link">
                        <FontAwesomeIcon icon={faHtml5} className="nav-brand__icon" />
                    </Link>
                </div>
                <div className="burger-menu__container" onClick={handleBurgerMenuClick}>
                    {isMenuClicked ?
                        <FontAwesomeIcon className="burger-menu_opened" icon={faTimes} /> :
                        <FontAwesomeIcon className="burger-menu_closed" icon={faBars} />
                    }
                </div>
                <ul className={isMenuClicked ? "nav-menu nav-menu_active" : "nav-menu"}>
                    <li className="nav-menu__item">
                        <Link to="/contact" className="nav-menu__link">Contact</Link>
                    </li>
                    <li className="nav-menu__item">
                        <Link to="/about" className="nav-menu__link">About</Link>
                    </li>
                    <li className="nav-menu__item">
                        <Link to="/projects" className="nav-menu__link">Projects</Link>
                    </li>
                    <li className="nav-menu__item">
                        <Link to="/sign-up" className="nav-menu__link">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}