import React from "react"
import './WeatherDate.css';

const WeatherDate = (props) => {
    let dateContent = <p>No date</p>
    if (props.date) {
        const dateArray = props.date.split("-");
        const month = +dateArray[1];
        const day = dateArray[2];
        const months = ["January ", "February ", "March ", "April ", "May ", "June ",
            "July ", "August ", "September ", "October ", "November ", "December "];
        const selectedMonth = months[month];
        dateContent = (<div className="weather-date">
            <div className="weather-date__month">{selectedMonth}</div>
            <div className="weather-date__day"> {day}</div>
        </div>);
    }
    return <>{dateContent}</>;
    
}

export default WeatherDate;