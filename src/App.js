import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NasaPicture from "./components/NasaPicture";
import "./App.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>APOD</title>]
      </Helmet>
      <BrowserRouter>
        <div className="App-header">
          <Route component={NasaPicture} path="/" />
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
