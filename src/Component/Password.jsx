import React, { useState } from 'react';
import './LoginForm.css';
import { Navigate } from 'react-router-dom'; // Import Navigate component

function Password() {
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage authentication status

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === 'osnil') {
            console.log('Password is correct. Proceed with submission.');
            // Set session storage item
            sessionStorage.setItem('token', 'i am authenticated person');
            // Update authentication status
            setIsLoggedIn(true);
        } else {
            console.error('Incorrect password. Submission failed.');
        }
    };

    // If user is authenticated, redirect to CardPage
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="container">
            <h2 className="title">Welcome to Osnil Web Solution pvt. ltd.</h2>
            <form onSubmit={handleSubmit} className="form">
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
                    <button type="submit" className="button">Submit</button>
                </div>
            </form>
        </div>
    );
}  
 
export default Password;
