import React from 'react';
import './parttens.css';
import logo1 from '../../assets/logo1.png';


const Parttens = () => {
  return (
    <div className="patterns-scroll-container">
      <div className="patterns-track">
        {[logo1, logo1,logo1,logo1,logo1,logo1,logo1,logo1,logo1,logo1,logo1,logo1,].map((logo, index) => (
          <div key={index} className="pattern-logo">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parttens;
