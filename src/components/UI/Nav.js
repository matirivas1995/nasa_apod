import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <div className="navbar">
            <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
            <ul>
                <Link className="link" to="/" exact >{props.title}</Link>
            </ul>
        </div>
    )
}

export default Nav;