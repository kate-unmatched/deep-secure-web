import React, { useState, useEffect } from 'react';
import '../css/auth.css';

const generateDiodeSchema = (count = 30) => {
    const diodes = [];
    for (let i = 0; i < count; i++) {
        diodes.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 20 + 10
        });
    }
    return diodes;
};

const Login = () => {
    const [diodes, setDiodes] = useState([]);

    useEffect(() => {
        const initialDiodes = generateDiodeSchema();
        setDiodes(initialDiodes);

        const smoothMovement = () => {
            setDiodes((prevDiodes) =>
                prevDiodes.map((diode) => ({
                    ...diode,
                    x: Math.min(Math.max(diode.x + (Math.random() - 0.5) * 0.2, 0), 100),
                    y: Math.min(Math.max(diode.y + (Math.random() - 0.5) * 0.2, 0), 100),
                }))
            );
        };

        const interval = setInterval(smoothMovement, 50);
        return () => clearInterval(interval);
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example validation (replace with actual authentication logic)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Redirect to dashboard or another page
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
            <div className="diode-schema">
                {diodes.map((diode, index) => (
                    <div
                        key={index}
                        className="diode"
                        style={{
                            left: `${diode.x}%`,
                            top: `${diode.y}%`,
                            width: `${diode.size}px`,
                            height: `${diode.size}px`,
                            boxShadow: '0 0 20px 10px rgba(255, 0, 0, 0.8), 0 0 50px rgba(255, 0, 0, 0.6)',
                        }}
                    ></div>
                ))}
            </div>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Login</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Sign In</button>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;
