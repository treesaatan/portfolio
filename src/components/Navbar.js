// rfce command to get starter react code
import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click); // set click state to the opposite
    const closeMobileMenu = () => setClick(false);

    // If screen is <=960, hamburger 
    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    //   }, []);

    // window.addEventListener('resize', showButton);

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <i class='fas fa-heart fa-xs' /><i class="far fa-hand-peace fa-xs"></i>
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
                    {/* If button is true, return Button  */}
                    {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}  */}
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
