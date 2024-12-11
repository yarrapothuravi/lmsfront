import React, { useState } from 'react';
import './login.css';
import Sdc from '../assets/images/sdc2.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }

        try {
            const response = await axios.post('http://lmsback.up.railway.app/lms1/login', null, {
                params: { username, password },
            });

            const userType = response.data;
            if (userType === 'student') {
                navigate('/student/dashboard');
            } else if (userType === 'faculty') {
                navigate('/faculty/dashboard');
            } else if (userType === 'admin') {
                navigate('/Admin/Admindashboard');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error(error);
            alert('Error logging in');
        }
    };

    return (
        <div className="login-page">
            {/* Left Side with the Image */}
            <div className="login-page__image">
                <img src={Sdc} alt="Decorative" className="login-image" />
            </div>

            {/* Right Side for the Login Form */}
            <div className="login-page__form">
                <div className="form-container">
                    <h1>LOGIN</h1>
                    <form onSubmit={handleLogin}>
                    <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-input"
                        />
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                        />
                        <button type="submit" className="form-button">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
