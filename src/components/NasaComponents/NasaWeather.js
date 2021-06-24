import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import WeatherDate from "../UI/WeatherDate";
import NasaPreviousWeather from "./NasaPreviousWeather";
import './NasaWeather.css'


const NasaWeather = () => {
    const [description, setDescription] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [historicWeather, setHistoricWeather] = useState([]);

    useEffect(() => {
        fetchWeather();

        async function fetchWeather() {
            const res = await fetch(
                `https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`
            );
            const data = await res.json();
            setDescription(data.descriptions);
            if (data.soles.length > 0) {
                setCurrentWeather(data.soles[0]);
                for (let i = 0; i < 5; i++) {
                    setHistoricWeather(prev => {
                        return [data.soles[i], ...prev]
                    })
                }
            }
        }
    }, []);

    const onChangeSol = (newSol) => {
        setCurrentWeather(newSol);
    }

    let historicWeatherContent = <p>No Historic Weather Found</p>
    if (historicWeather.length > 0) {
        historicWeatherContent = historicWeather.map(weather => (
            <NasaPreviousWeather
                key={weather.id}
                sol={weather}
                setSelectedSol={onChangeSol} />
        ));
    }

    return (
        <Card className="nasa-weather">
            <div className="header">
                <h1>Weather at Gale Crater - MARS</h1>
            </div>
            <div className="wrap">
                {currentWeather ? (
                    <>
                        <div className="date">
                            <h2>Sol {currentWeather.sol}</h2>
                            <WeatherDate date={currentWeather.terrestrial_date} />
                            <span>{currentWeather.atmo_opacity}</span><br />
                            <span>{currentWeather.season}</span>
                        </div>
                        <div className="extra-content">
                            <div className="temp">
                                <h2 className="section-title">Temp</h2>
                                <p className="reading">
                                    High:
                                <span>{currentWeather.max_temp}</span>
                                    <span> °C</span>
                                </p>
                                <p className="reading">
                                    Low:
                                <span>{currentWeather.min_temp}</span>
                                    <span> °C</span>
                                </p>
                            </div>
                            <div className="temp">
                                <h2 className="section-title">Extra</h2>
                                <p className="reading">
                                    Wind:
                                <span>{currentWeather.wind_speed}</span>
                                    <span>{"kph"}</span>
                                </p>
                                <p className="reading">
                                    Pressure:
                                <span>{currentWeather.pressure}</span>
                                    <span>{"Pa"}</span>
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <h2>No data</h2>
                )}
            </div>
            <div className="wrap-previous">
                {historicWeatherContent}
            </div>
            <p>*{description && description.sol_desc_en}</p>
        </Card>
    );
}

export default NasaWeather;