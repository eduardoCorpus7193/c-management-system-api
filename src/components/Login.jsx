import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <>
            <div className='container col-lg-12'>
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
            </div>
        </>
    );
}

export default Login;