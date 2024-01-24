import React from 'react'
import { styled } from 'styled-components';
import { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Condition = styled.span`
  margin: auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

export const WeatherInfoIcons = {
  sunset: "/icon/temp.svg",
  sunrise: "/icon/temp.svg",
  humidity: "/icon/humidity.svg",
  wind: "/icon/wind.svg",
  pressure: "/icon/pressure.svg",
};

const WelcomeWeatherLogo = styled.img`
width: 150px;
height: 100px;
margin : 0rem; // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow for depth */
transition: transform 0.3s ease; /* Add a smooth transition effect on hover */

&:hover {
  transform: scale(1.02); /* Increase size on hover */
}
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Location = styled.span`
  margin: 3rem;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
  color: rgb(86, 84, 84);
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02n": "/icon/day.svg",
  "02d": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;



const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Back = styled.div`
  & button {
    padding: 7px;
    border-radius: 100%;
    background: linear-gradient(lightgrey,white);
    outline: none;
    animation: ${blinkAnimation} 1s infinite; /* Apply the blink animation */
  }
`;
const Backimage = styled.img`
cursor:pointer;

`;
const InfoIcon = styled.img`
  width: 50px;
  height: 36px;
`;
const Flexes = styled.div`
display:flex
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const WeatherInfoComponent = ({ name, value }) => {
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  )
}
export const Weatherappinfo = ({ dataweather, goback }) => {
  const day = dataweather?.weather[0]?.icon?.includes("d")
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <Flexes>
      <Back>
        <button onClick={() => goback()}>
          <Backimage src="/icon/10255591.png" width="20px"></Backimage>
        </button>
      </Back>
      <div>
        <WeatherContainer>
          <Condition> <span>{`${Math.floor(dataweather?.main?.temp - 273)}°C`}</span> {`  |  ${dataweather?.weather[0].description}`}</Condition>
          <WelcomeWeatherLogo src={WeatherIcons[dataweather?.weather[0].icon]} />
        </WeatherContainer>
        <Location>{`${dataweather?.name}, ${dataweather?.sys?.country}`}</Location>
        <WeatherInfoContainer>
          <WeatherInfoComponent name={day ? "sunset" : "sunrise"} value={`${getTime(dataweather?.sys[day ? "sunset" : "sunrise"])}`}></WeatherInfoComponent>
          <WeatherInfoComponent name='humidity' value={dataweather?.main?.humidity}></WeatherInfoComponent>
          <WeatherInfoComponent name='wind' value={dataweather?.wind?.speed}></WeatherInfoComponent>
          <WeatherInfoComponent name='pressure' value={dataweather?.main?.pressure}></WeatherInfoComponent>
        </WeatherInfoContainer>
      </div>
      {/* <div>
        <a href='CityComponents'>go back</a>
      </div> */}
    </Flexes>
  )
}
