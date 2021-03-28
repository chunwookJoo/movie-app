import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="title">
          <span>
            <FontAwesomeIcon icon={faVideo} size="1x" />
          </span>
          My Movie App
        </h1>
      </Link>
      <ul className="navbar__menu">
        <li className="homebtn">
          <Link to="/">Home</Link>
        </li>
        <li className="aboutbtn">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
export const fontawesome = () => <FontAwesomeIcon icon={faVideo} />;
