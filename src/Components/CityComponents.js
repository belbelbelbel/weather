import React from 'react'
import { styled } from 'styled-components';
import {  NavLink } from 'react-router-dom';
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    background: linear-gradient(lightgreen, lightgrey);
    font-size: 14px;
    padding: 0 10px;
    color: grey;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: cursive;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.3s ease; 

    &:hover {
      transform: scale(1); /* Add a scaling effect on hover */
      font-size:16px;
    }
  }
`;

export default SearchBox;

// const ChooseCityLabel = styled.span`
//   color: black;
//   margin: 2rem auto;
//   font-size: 18px;
//   font-weight: bold;
// `;


const WelcomeWeatherLogo = styled.img`
  width: 200px;
  height: 200px;
  margin: 0;
  border-radius: 50%; /* Add a rounded border */
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow for depth */
  transition: transform 0.3s ease; /* Add a smooth transition effect on hover */

  &:hover {
    transform: scale(1.02); 
  }
`;

export const CityComponents = ({ setcity, fetchprogram }) => {
  return (
    <>
      <WelcomeWeatherLogo src="/icon/weatherlogo2.jpeg" />
      <SearchBox onSubmit={fetchprogram}>
        <input placeholder='search city' onChange={e => setcity(e.target.value)}/> <button type='submit' >search</button>
      </SearchBox>
    </>
  )
}
