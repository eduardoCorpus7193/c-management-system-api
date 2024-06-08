import React from 'react';
import { Link } from 'react-router-dom';

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
                        <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>                        
                        <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                        <li className="nav-item"><Link to="/sports" className="nav-link">Sports</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Configuration</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to="" className="dropdown-item">Theme</Link>
                                <Link to="" className="dropdown-item">Notifications</Link>
                                <Link to="" className="dropdown-item">Change password</Link>
                                <Link to="/login" className="dropdown-item" id="logout">Log out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
