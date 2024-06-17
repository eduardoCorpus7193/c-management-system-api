/*import React, { useState } from 'react';*/
import { Link } from 'react-router-dom';

function Login() {
    /* STATE PARA EL USERNAME (COMENTADO)
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    }
    */

    return (
        <>
            {/* CONTENEDOR PRINCIPAL DEL FORMULARIO DE LOGIN */}
            <div className="logincontainer">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {/* TARJETA DE LOGIN */}
                        <div className="card my-5">
                            <form className="card-body cardbody-color p-lg-5" action="index.html">
                                <div className="text-center">
                                    {/* IMAGEN DEL PERFIL */}
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3 avatar-style" width="200px" alt="profile"/>
                                </div>
                                {/* CAMPO DE USERNAME */}
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="Username" aria-describedby="emailHelp" placeholder="User Name"/>
                                </div>
                                {/* CAMPO DE PASSWORD */}
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                                </div>
                                {/* BOTÓN DE LOGIN */}
                                <div className="text-center">
                                    <Link to="/" className=""><button type="submit" className="btn btn-primary btn-login-style">Login</button></Link>
                                </div>
                                {/* TEXTO DE REGISTRO Y MÁS INFORMACIÓN */}
                                <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                                    Not Registered? <br/>
                                    <a href="#!" className="text-dark fw-bold create-account-style"> More information</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
