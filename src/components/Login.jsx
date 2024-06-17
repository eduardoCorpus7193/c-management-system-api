import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <>
        <div class="logincontainer">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5"><br/>Login</h2>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5" action="index.html">

            <div class="text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name"/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="Password"/>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-primary" data-toggle="modal" >Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-dark fw-bold"> Create an
                Account</a>
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