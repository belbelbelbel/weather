import React from 'react'

export const UserPreference = ({scrollToSection}) => {
  return (
    <div className="userPreference-container">
      <form action="" className="userPreference-form">
        <label htmlFor="farm-name">Farm Name:</label>
        <input type="text" name="farm-name" />
        <label htmlFor="city">City of choice:</label>
        <input type="text" name="city" />
        <label htmlFor="temperature">Ideal Temperature:</label>
        <input type="text" name="temperature" />
        <label htmlFor="humidity">Humidity:</label>
        <input type="text" name="humidity" />
        <label htmlFor="wind-speed">Wind Speed:</label>
        <input type="text" name="wind-speed" />
        <label htmlFor="pressure">Pressure:</label>
        <input type="text" name="pressure" />
      </form>
      <button className="done-btn" onClick={()=>scrollToSection('appp')}>Done</button>
    </div>
  );
}
