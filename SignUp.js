import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'; 
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/Login'); 
  };
  return (
    <div className="signup-container">
      {/* Background Section */}
      <div className="background-section">
        <div className="background-image"></div>

        
        </div>
      

      {/* Sign-in Card */}
      <div className="form-container shadow-lg">
        <h3 className="mb-4">Sign up to get free access!</h3>
        
        {/* Email and Password */}
        <div className="mb-4">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="you@gmail.com" />
        </div>

        <div className="mb-4">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="••••••••" />
        </div>

        {/* Sign In Button */}
        <button className="btn btn-primary w-100 mb-4">Create new account</button>
        

        {/* Social Login */}
        <div className="text-center mb-3">SIGN IN VIA</div>
        <div className="d-flex justify-content-center gap-2 mb-4">
          <button className="btn btn-outline-secondary">
            <i className="fab fa-facebook-f"></i> Facebook
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fab fa-google"></i> Google
          </button>
        </div>

        {/* Create Account */}
        <p className="text-center mb-1">Already have an account?</p>
        <button className="btn btn-light w-100" onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default SignUp;
