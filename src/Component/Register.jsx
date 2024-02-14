import React, { useState } from 'react';
import './LoginForm.css';

function Register() {
    const [login, setLogin] = useState(!false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://wisulbackend.netlify.app/.netlify/functions/index/login', // Endpoint URL
                {
                    method: 'POST', // Specify the HTTP method
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: userName,
                        email: email,
                        password: password
                    })
                }
            );
            

            if (response.status === true) { // Check if response status is in the range 200-299
                const data = await response.json();
                console.log('Login successful:', data);

                // Store the token in session storage
                sessionStorage.setItem('token', data.token);

                // Redirect the user to root URL
                //window.location.href = '/';
            } else {
                console.error('Login failed:', response.status);
            }

        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    const handleLoginClick = () => {
        setLogin(prevLogin => !prevLogin);
    }

    return (
        <div className="container">
            <h2 className="title">{!login ? "Login" : "Register"}</h2>
            <form onSubmit={handleSubmit} className="form">
                {login && <div className="inputGroup">
                    <label htmlFor="username" className="label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="input"
                        required
                    />
                </div>}
                <div className="inputGroup">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password" className="label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <div className="buttonGroup">
                    <button type="submit" className="button">{!login ? "Login" : "Register"}</button>
                </div>
                <div className="alreadyRegistered">
                    <h5>{login ? "Already registered ? " : "Do you want to registered ? " }<button className="linkButton" onClick={handleLoginClick}>{login ? "Login" : "Register"}</button></h5>                </div>

            </form>
        </div>
    );
}

export default Register;
