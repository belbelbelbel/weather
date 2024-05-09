import React, { useState } from 'react';
import './App.css';
import { styled } from 'styled-components';
import { CityComponents } from './Components/CityComponents';
import { keyframes } from 'styled-components';
import { Weatherappinfo } from './Components/Weatherappinfo';
import axios from 'axios';
import Hero from './Components/Hero';
import About from './Components/About';
import Issue from './Components/Issue';
import { Response } from './Components/Response';
import { UserPreference} from './Components/UserPreference';
import Modal from './Components/Modal';

// import Response  from './Components/Response';
import RegisterAccount from './Components/RegisterAccount';
const API_KEY = "daf3468e726e9c4d555abe56aedd75b6";
const moveFromLeftToRight = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const AppLabel = styled.span`
color: rgb(109, 108, 108);
  margin: auto;
  font-size: 18px;
  font-weight: bold;
`;
function App() {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
  
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleBack = () => {
    // Clear dataWeather when going back
    setdataweather(null);
  };
  const [city, setcity] = useState();
  const [isvisible,setisvisible] = useState(false)
  const [dataweather, setdataweather] = useState()
  const [isloading, setisloading] = useState(false);
  const handleCloseModal = () => {
    setisvisible(false);
  };
  const fetchprogram = async (e) => {
    
    e.preventDefault();
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setdataweather(res.data);
      setisloading(false)
    } catch (error) {
      alert(`The City Name ${city} Does Not Exist🤣, Type In  A Valid City`, error);
    }
  };
  if (isloading === true) {
    return <div>loading...</div>
  }
  return (

    <div className='App' id='appp'>
      <Hero scrollToSection={scrollToSection} isvisible={isvisible} setisvisible={setisvisible}></Hero>
      {/* <About></About>
      <Issue></Issue>
      <Response></Response>
      <RegisterAccount  scrollToSection={scrollToSection}></RegisterAccount>
      <UserPreference scrollToSection={scrollToSection}></UserPreference> */}
     {isvisible && <Modal className='Container' onClose={handleCloseModal}>
        <AppLabel>Farmer's Weather Dashboard</AppLabel>
        {dataweather ? <Weatherappinfo dataweather={dataweather} goback={handleBack}></Weatherappinfo> : <CityComponents setcity={setcity} fetchprogram={fetchprogram} />}
        {/* /* <Weatherappinfo></Weatherappinfo> */}
      </Modal>}
    </div>
  );
}
export default App;
