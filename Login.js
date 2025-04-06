import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
        const navigate = useNavigate();
    
        const handleSignupClick = () => {
            navigate('/SignUp'); 
        };
    return (
        <div className="signup-container">
            <div className = "background-section">
                <div className="background-image"></div>
            </div>
            
            <div className = "form-container shadow-lg">
                <h3 className = "mb-4">Login to continue</h3>

                <div className="mb-4">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="you@gmail.com" />
        </div>

        <div className="mb-4">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="••••••••" />
        </div>
        <button className="btn btn-primary w-100 mb-4">Login</button>
        <p className="text-end">
          <a href="#" className="text-muted small">Forgot password?</a>
        </p>

        <div className="text-center mb-3">LOGIN VIA</div>
        <div className="d-flex justify-content-center gap-2 mb-4">
          <button className="btn btn-outline-secondary">
            <i className="fab fa-facebook-f"></i> Facebook
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fab fa-google"></i> Google
          </button>
          </div>

          <p className="text-center mb-1">Don't have an account?</p>
        <button className="btn btn-light w-100" onClick={handleSignupClick}>Sign up</button>
        </div>
            </div>
        
    )
}

export default Login;