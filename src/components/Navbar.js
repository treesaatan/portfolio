// rfce command to get starter react code
import React, { useState } from 'react';
// import { Button } from './Button';
// import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import AipingLogo from "../assets/images/aiping_logo_white.png";

function Navbar() {

    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click); // set click state to the opposite
    const closeMobileMenu = () => setClick(false);

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className="logo" src={AipingLogo} alt="logo" />
                        {/* <i class='fas fa-heart fa-xs' /><i class="far fa-hand-peace fa-xs"></i> */}
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
