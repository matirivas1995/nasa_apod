import React, { useState, useEffect } from "react";
import Picture from "../UI/Picture";
import Card from "../UI/Card";
import './NasaPicture.css'

const apiKey = process.env.REACT_APP_APOD_KEY;

const NasaPicture = () => {
    const [pictureData, setPictureData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPictureData(data);
        }

    }, []);

    if (!pictureData) return <div />;

    return (
            <Card className="nasa-picture">
                <h1>ASTRONOMY PICTURE OF THE DAY</h1>
                <Picture pictureData={pictureData} />
                <div>
                    <h1>{pictureData.title}</h1>
                    <p className="date">{pictureData.date}</p>
                    <p className="explanation">{pictureData.explanation}</p>
                </div>
            </Card>
    );
}

export default NasaPicture;