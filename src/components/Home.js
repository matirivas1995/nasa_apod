import React from "react";
import NasaPicture from "./NasaComponents/NasaPicture";
import NasaWeather from "./NasaComponents/NasaWeather";
import './Home.css'

const Home = () => {
    
    return (
        <div className="wrapper">
            <NasaWeather className="weather"/>
            <NasaPicture className="picture"/>
        </div>
    );
}

export default Home;