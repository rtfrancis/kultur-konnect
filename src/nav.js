import React from "react";
import { Link } from "react-router-dom";

export default function nav() {
    return (
        <div id="navBar">
            <Link to="/">
                <span id="welcomeHeading">Kultur Konnect</span>
            </Link>
            <span id="navLinks">
                <Link to="/events">
                    <span className="nav">Events</span>
                </Link>
                <Link to="/search">
                    <span className="nav">Search</span>
                </Link>
                <Link to="/profile">
                    <span className="nav">Profile</span>
                </Link>
                <a href="/logout">
                    <span className="nav logoutButton">Logout</span>
                </a>
            </span>
        </div>
    );
}
