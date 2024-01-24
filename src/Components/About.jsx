import React from "react";
import Plant from "../assets/climbing-plant.png";

const About = () => {
  return (
    <div className="about-container container">
      <div className="about-content">
        <h2 className="about-title">About</h2>
        <p className="about-text">
          Farming is a highly weather-dependent endeavor, and the success of
          crops often hinges on the ability of farmers to anticipate and respond
          to weather conditions. Understanding weather patterns, temperature
          fluctuations, precipitation, and other meteorological factors is
          crucial for making informed decisions in agriculture.
          <br />
          <br />
          To address the unique needs of farmers, a specialized weather
          dashboard has been developed to provide real-time and forecasted
          weather information tailored to agricultural activities.
        </p>
      </div>
      <img className="plant" src={Plant} alt="climbing plant" />
      
    </div>
  );
};

export default About;
