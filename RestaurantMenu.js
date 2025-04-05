import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Restaurant.css'; // Import the external CSS for animations & media queries
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const RestaurantMenu = () => {
    const navigate = useNavigate();
    const handleClick = (item) => {
        if (item === 'Menu') {
          navigate('/menu');
        }
        
      };
  return (
    
    <motion.div
    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="container-fluid d-flex flex-column align-items-center justify-content-start position-relative restaurant-bg"
  
      
    >
      {/* Heading */}
      <div className="header-text text-end">
        <h1 className="restaurant-title">DaaWat Co.</h1>
        <p className="restaurant-subtitle">
          Where tradition meets taste, one plate at a time.
        </p>
      </div>

      {/* Button Box */}
      <div className="menu-box animate-fade-in">
        {['Menu', 'Explore', 'Contact Us', 'Testimonials'].map((item, index) => (
          <button key={index} className="custom-btn" onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
    
    </motion.div>
  );
};

export default RestaurantMenu;
