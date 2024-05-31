import React from 'react'

function header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom" id="navbar">
            <a className="navbar-brand" href="#" id="logotype">
            <div className="logotype">
                <div>
                <img src="../images/utmaLogotype.png" width="40px" height="40px" alt="" />

                </div>
                <div className="nameLogotype">
                <div className="utma">
                    TECNOLOGICA METROPOLITNA DE AGUASCALIENTES
                </div>
                <div className="slogan">
                    Alta Tecnologia
                </div>
                </div>
            </div>
            </a>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active"><a className="nav-link" href="#">Profile</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">News</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Configuration</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Theme</a>
                        <a className="dropdown-item" href="#">Notifications</a>
                        <a className="dropdown-item" href="#"> Change password</a>
                        <a className="dropdown-item" id="logout" href="#">Log out</a>
                    </div>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default header;
