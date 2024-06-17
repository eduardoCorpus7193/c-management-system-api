import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

export function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            {/*BLOQUE PRINCIPAL DE NAVEGACIÓN*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom" id="navbar">
                {/*LOGOTYPE SECTION*/}
                <a className="navbar-brand" href="#!" id="logotype">
                    <div className="logotype">
                        <div>
                            {/*logotype image*/}
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
                        {/*NAVIGATION LINKS*/}
                        <li className="nav-item"><Link to="/" className="nav-link home">Inicio</Link></li>                        
                        <li className="nav-item"><Link to="/profile" className="nav-link profile">Perfil</Link></li>
                        {/*dropdown menu*/}
                        <li className="nav-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <a className={`nav-link ${isDropdownOpen ? 'animate__animated animate__rotateIn' : ''}`} href="#!" id="navbarDropdownMenuLink" role="button">
                                {/*menu icon*/}
                                <img className='configimg' aria-label="Menu" />
                            </a>
                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink" style={{width: '220px'}}>
                                {/*USER PREFERENCES SECTION*/}
                                <h6 className="dropdown-header title-section-menu">Preferencias de Usuario</h6>
                                {/*language preference*/}
                                <div className='status-disposition'>
                                    <Link to="" className="dropdown-item">Idioma</Link>
                                    <img className='status-button' id='idioma' src='/images/es.png' alt='Idioma button' />
                                </div>
                                {/*theme preference*/}
                                <div className='status-disposition'>
                                    <Link to="" className="dropdown-item">Tema</Link>
                                    <img className='status-button' id='them' src='/images/modoClaro.png' alt='Tema button' />
                                </div>
                                {/*notifications preference*/}
                                <div className='status-disposition'>
                                    <Link to="/notifications" className="dropdown-item">Notificaciones</Link>
                                    <img className='status-button' id='notification' src='/images/botonVerde.png' alt='Notifications button' />
                                </div>
                                <div className="dropdown-divider custom-divider"></div>
                                {/*SECURITY AND PRIVACY SECTION*/}
                                <h6 className="dropdown-header title-section-menu">Seguridad y Privacidad</h6>
                                <Link to="/password" className="dropdown-item">Contraseña</Link>
                                <Link to="/privacy" className="dropdown-item">Privacidad</Link>
                                <div className="dropdown-divider custom-divider"></div>
                                {/*SUPPORT AND HELP SECTION*/}
                                <h6 className="dropdown-header title-section-menu">Soporte y Ayuda</h6>
                                <Link to="/help" className="dropdown-item">Centro de ayuda</Link>
                                <Link to="/comments" className="dropdown-item">Enviar comentarios</Link>
                                <div className="dropdown-divider custom-divider"></div>
                                {/*logout link*/}
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
