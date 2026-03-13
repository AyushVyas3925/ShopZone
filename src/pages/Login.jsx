import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/cart');
    };

    return (
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '50px 40px',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxWidth: '400px',
                width: '100%'
            }}>
                <h2 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>Welcome Back</h2>
                <p style={{ margin: '0 0 30px 0', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>
                    Please login as a guest to continue to secure areas like checkout.
                </p>
                <button
                    className="btn-primary"
                    onClick={handleLogin}
                    style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}
                >
                    Login as Guest
                </button>
            </div>
        </div>
    );
}

export default Login;
