import React from 'react';
import { Link } from 'react-router-dom';

//import Loguin from './Loguin';
//import Home from './Home';
//import Sports from './sports';
//import Profile from './Profile';

export function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom" id="navbar">
                <a className="navbar-brand" href="#!" id="logotype">
                    <div className="logotype">
                        <div>
                            <img src="/images/utmaLogotype.png" width="40px" height="40px" alt="Logotype" />
                        </div>
                        <div className="nameLogotype">
                            <div className="utma">
                                UNIVERSIDAD TECNOLOGICA METROPOLITANA DE AGUASCALIENTES
                            </div>
                            <div className="slogan">
                                Alta Tecnologia
                            </div>
                        </div>
                    </div>
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/Home" className="nav-link" >Home</Link></li>
                        <li className="nav-item"><a className="nav-link" href="Home.jsx">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">News</a></li>
                        <li className="nav-item active"><a className="nav-link" href="#!">Profile</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Configuration</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#!">Theme</a>
                                <a className="dropdown-item" href="#!">Notifications</a>
                                <a className="dropdown-item" href="#!">Change password</a>
                                <a className="dropdown-item" id="logout" href="#!">Log out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
