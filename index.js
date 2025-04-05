import ReactDOM from 'react-dom/client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailTemplate from '../../Apptodo/EmailTemplate';
import { BrowserRouter, Routes, Route,useLocation  } from 'react-router-dom'; 
import RestaurantMenu from './RestaurantMenu';
import Menu from './Menu';
import BreakFast from './BreakFast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Dessert from './Dessert';
import { AnimatePresence } from 'framer-motion';




const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<RestaurantMenu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/breakfast" element={<BreakFast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/dessert" element={<Dessert />} />
        {/* add other routes too */}
      </Routes>
    </AnimatePresence>
  );
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
    
    
    
 
