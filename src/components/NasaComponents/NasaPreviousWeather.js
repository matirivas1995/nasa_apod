import WeatherDate from '../UI/WeatherDate';
import './NasaPreviousWeather.css';

const NasaPreviousWeather = (props) => {
    const sol = props.sol;
    return (
        <div className="previous-wrapper">
            <h3 className="previous-title">
                <span>Sol {sol.sol}</span>
                <WeatherDate date={sol.terrestrial_date}/>
            </h3>
            <p className="previous-temp">
                    High:
                <span>{sol.max_temp}</span>
                <span> °C</span>
                </p>
                <p className="previous-temp">
                    Low:
                <span>{sol.min_temp}</span>
                <span> °C</span>
            </p>
            <div className="button-container">
                <button
                        className="previous-day__more-info"
                        onClick={() => props.setSelectedSol(sol)}
                    >
                        More info
                </button>
            </div>
        </div>
    );
}

export default NasaPreviousWeather;