import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = (props) => {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/" exact >{props.title}</Link>
            </ul>
        </div>
    )
}

export default Nav;