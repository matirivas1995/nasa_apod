import React, { useState, useEffect } from "react";
import Picture from "./UI/Picture";
import Card from "./UI/Card";
import './NasaPicture.css'
import Nav from "./UI/Nav";

const apiKey = process.env.REACT_APP_APOD_KEY;

const NasaPicture = () => {
    const [pictureData, setPictureData] = useState(null);
    const title = "APOD";

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
        <>
            <Nav title={title}/>
            <Card className="nasa-picture">
                <Picture pictureData={pictureData} />
                <div>
                    <h1>{pictureData.title}</h1>
                    <p className="date">{pictureData.date}</p>
                    <p className="explanation">{pictureData.explanation}</p>
                </div>
            </Card>
        </>
    );
}

export default NasaPicture;