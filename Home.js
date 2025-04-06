import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();
    
        const handleSignupClick = () => {
            navigate('/SignUp'); 
        };
  return (
    <div className="Home-container">
      {/* Top Header Section */}
      <header className="top-header">
        <div className="container">
          <div className="logo-section">
            <p>Espresso</p>
          </div>
          <div className="right-section">
            <nav className="navigation">
              <ul className="nav-list">
                <li className="nav-item"><a href="#" className="nav-link">Reviews</a></li>
                <li className="nav-item"><a href="#" className="nav-link">How It Works</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Apps</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Our Philosophy</a></li>
              </ul>
            </nav>
            <div className="button-section">
              <a href="#" className="start-today-button">START TODAY</a>
            </div>
          </div>
        </div>
      </header>

      {/* Background Section */}
      <div className="bghome-section">
        <section className="main-content-left">
          <div className="content-left-inner">
            <h1 className="tagline">#1 Nutrition Tracking App</h1>
            <h1>Join Thousands of Fitness Enthusiasts</h1>
            <h2>No Cost, Just Results</h2>
            <p className="description">SignUp. Get full access. Simple</p>
            <button className="start-today-button"onClick={handleSignupClick}>START TODAY</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
