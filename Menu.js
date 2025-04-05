import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Menu = () => {
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate(`/${item.toLowerCase()}`);
    };
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
               {/* CSS inside JSX */}
               <style>{`
                .header {
                    background-color: #B22222; /* Dark Gray/Black */
                    padding: 20px;
                    color: #f5f5dc; /* Light Beige */
                }

                .header h1 {
                    font-family: 'Georgia', serif;
                    font-weight: bold;
                    font-size: 2.5rem;
                    margin-left: 20px;
                }

                

                .nav-link {
                    color: #e6d8b4 !important; /* Light Beige/Pale Yellow */
                    font-weight: 500;
                    transition: color 0.3s ease;
                }

                .nav-link:hover {
                    color: #fff5cc !important;
                }
                    .food-section {
    background-color: #1a1a1a; /* Cream */
    padding: 50px 20px;
}

.section-title {
    font-size: 2.9rem;
    color: #fff5cc ; /* Dark Gray */
    margin-bottom: 40px;
}

.food-box {
    background-color: #FFF8DC ; /* Dark background */
    color: #1a1a1a ; /* Pale Yellow text */
    padding: 40px;
    margin: 10px 0;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    transition: transform 0.3s ease, background-color 0.3s ease;
    text-align: center;
    cursor: pointer;
}

.food-box:hover {
    background-color: #1a1a1a; /* Pale Yellow bg on hover */
    color: #e6d8b4; /* Dark text on hover */
    transform: scale(1.05);
}
    


            `}</style>
            
            {/*header*/}
            <div className = "header">
                <h1>DaaWat Co.</h1>
                <ul className = "nav justify-content-end">
                    <li className = "nav-item">
                        <a className = "nav-link active" href = "#">Home</a>
                    </li>
                    <li className = "nav-item">
                        <a className = "nav-link active" href = "#">Explore</a>
                    </li>
                    <li className = "nav-item">
                        <a className = "nav-link active" href = "#">Contact Us</a>
                    </li>
                    </ul>

            </div>
        <div className ="picture">
            <img src = "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt = "Menu" className = "img-fluid" />
            </div>

            {/* Menu Section */}
            <div className="food-section text-center">
    <h1 className="section-title">Food To Be Served</h1>
    <div className="container mt-4">
        <div className="row justify-content-center">
            <div className="col-md-3">
                <div className="food-box" onClick={() => handleClick('breakfast')}>Breakfast</div>
            </div>
            <div className="col-md-3">
                <div className="food-box" onClick={() => handleClick('lunch')}>Lunch</div>
            </div>
            <div className="col-md-3">
                <div className="food-box" onClick={() => handleClick('dinner')}>Dinner</div>
            </div>
            <div className="col-md-3">
                <div className="food-box" onClick={() => handleClick('dessert')}>Dessert</div>
            </div>
        </div>
    </div>
</div>
            {/*Footer*/}
<style>{`
body, div { /* Or the specific parent element */
    background-color: #1a1a1a; /* If that's the intended overall background */
    margin: 0;
    padding: 0;
    border: 0;
}
    .footer {
        background-color: #1a1a1a; /* Dark Gray/Black */
        color: #e6d8b4; /* Pale Yellow */
        padding: 30px 20px;
        text-align: center;
        margin-top: 50px;
    }
    
    .footer .nav-link {
        color: #e6d8b4 !important;
        font-weight: 500;
        margin: 0 10px;
        transition: color 0.3s ease;
    }
    
    .footer .nav-link:hover {
        color: #fff5cc !important; /* Slightly lighter on hover */
    }
`}</style>
            <div className = "footer">
                <p>&copy; 2023 DaaWat Co. All rights reserved.</p>
                <ul className = "nav justify-content-center">
                    <li className = "nav-item">
                        <a className = "nav-link active" href = "#">Privacy Policy</a>
                    </li>
                    <li className = "nav-item">
                        <a className = "nav-link active" href = "#">Terms of Service</a>
                    </li>
                </ul>
            </div>

        </motion.div>
    );
};
export default Menu;