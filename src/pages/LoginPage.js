import React, { useState } from 'react';
import Link from 'react-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <>
            <h2>Account Login</h2>
            <div>
            <form>
                    <legend><strong>Your information</strong></legend>
                    <p></p>
                    <label for="email">Email:   </label>
                    <input type="email" id="email" name="email" required placeholder="ex: you@email.com" />
                    <p></p>
                    <label for="password">Password:   </label>
                    <input type="password" id="password" name="password" required placeholder="your password" />
                    <p></p>
                    <button>Login</button> 
                    <p></p>            
            </form>
                <p>Don't have an account?</p>
                <button>Register Here</button>
            </div>
        </>
    );

};

export default LoginPage