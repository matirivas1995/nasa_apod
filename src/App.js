import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import Home from "./components/Home";

const App = () => {
  const title='NASA API'
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>]
      </Helmet>
      <BrowserRouter>
        <div className="App-header">
          <Route component={Home} path="/" />
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
