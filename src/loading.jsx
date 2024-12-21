import React from "react";
import "./style.scss"; // Create a corresponding CSS/SCSS file for styling
import logo from "./utils/images/logo.png";
const LoadingScreen = () => {
  return (
    <div className="loading-page">
      <div>
        <div className="logo">
          <img src={logo} alt="Damen Logo" />
        </div>
        <div className="loading-bar">
          <div className="progress">
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
