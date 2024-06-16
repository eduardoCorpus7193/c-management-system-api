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
                        <li className="nav-item"><Link to="/" className="nav-link home">Home</Link></li>                        
                        <li className="nav-item"><Link to="/profile" className="nav-link profile">Profile</Link></li>
                        <li className="nav-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <a className={`nav-link ${isDropdownOpen ? 'animate__animated animate__rotateIn' : ''}`} href="#!" id="navbarDropdownMenuLink" role="button">
                                <img className='configimg' aria-label="Menu" />
                            </a>
                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink" style={{width: '220px'}}>
                                <h6 class="dropdown-header title-section-menu">Preferencias de Usuario</h6>
                                <div className='status-disposition'>
                                    <Link to="" className="dropdown-item">Idioma</Link>
                                    <img className='status-button' id='idioma' src='/images/es.png' alt='Idioma button' />
                                </div>
                                <div className='status-disposition'>
                                    <Link to="" className="dropdown-item">Tema</Link>
                                    <img className='status-button' id='them' src='/images/modoClaro.png' alt='Tema button' />
                                </div>
                                <div className='status-disposition'>
                                    <Link to="/notifications" className="dropdown-item">Notificaciones</Link>
                                    <img className='status-button' id='notification' src='/images/botonVerde.png' alt='Notifications button' />
                                </div>
                                <div className="dropdown-divider custom-divider"></div>
                                <h6 class="dropdown-header title-section-menu">Seguridad y Privacidad</h6>
                                <Link to="" className="dropdown-item">Contraseña</Link>
                                <Link to="" className="dropdown-item">Privacidad</Link>
                                <div className="dropdown-divider custom-divider"></div>
                                <h6 class="dropdown-header title-section-menu">Soporte y Ayuda</h6>
                                <Link to="" className="dropdown-item">Centro de ayuda</Link>
                                <Link to="" className="dropdown-item">Enviar comentarios</Link>
                                <div className="dropdown-divider custom-divider"></div>
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
