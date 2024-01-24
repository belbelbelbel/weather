import React from "react";
const Hero = ({ scrollToSection,setisvisible,handleShowWeather }) => {
  // const navigateToDashboard = () => {
  //   // Change the URL to the path of your dashboard's index.html
  //   window.location.href = '/dashboard/CityComponents.jsx';
  // };
  const handleRegisterClick = () => {
    // Call the scrollToSection function with the ID or reference of the target section
    scrollToSection("registerSection");
  };

  return (
    <div className="hero-container container">
      <div className="registerBtn" onClick={handleRegisterClick}>
        Register
      </div>

      <div className="hero-text">
        <h1>Weather Dashboard</h1>
        <p>
          Visit [Specific Website] now to experience the future of weather
          intelligence in agriculture. Make informed decisions, minimize risks,
          and optimize your farming practices with precision. Your farm's
          weather, your way!
        </p>
      </div>

      <button className="go-btn"  onClick={()=>setisvisible(true)}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default Hero;
