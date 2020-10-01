import React, {Fragment} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav-brand__container">
                    <Link to="/" className="nav-brand__link">
                        <FontAwesomeIcon icon={faHtml5} className="nav-brand__icon" />
                    </Link>
                </div>
                <div className="burger-menu__container">
                    <FontAwesomeIcon icon={faTimes} />
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className="nav-menu">
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