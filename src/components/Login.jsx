/*import React, { useState } from 'react';*/
import { Link } from 'react-router-dom';

function Login() {
    /*const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    }*/

    return (
        <>
            <div class="logincontainer">
                <div class="row">

                    <div class="col-md-6 offset-md-3">
                        <div class="card my-5">

                            <form class="card-body cardbody-color p-lg-5" action="index.html">
                                <div class="text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3 avatar-style" width="200px" alt="profile"/>
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="Username" aria-describedby="emailHelp" placeholder="User Name"/>
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" id="password" placeholder="Password"/>
                                </div>
                                <div class="text-center">
                                    <Link to="/" className=""><button type="submit" className="btn btn-primary btn-login-style">Login</button></Link>
                                </div>
                                <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                                    Not Registered? <br/>
                                    <a href="#!" class="text-dark fw-bold create-account-style"> More information</a>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>




            {/*<div className='container col-lg-12'>
                <div className='inputs-position'>
                    <div className='disposition-input-container'>
                        <input 
                            type="text" 
                            className="form-control disposition-inputs" 
                            placeholder="" 
                            aria-label="Username"
                            value={username}
                            onChange={handleInputChange}
                        />
                        <div class="floating-text">Username</div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>*/}
        </>
    );
}

export default Login;