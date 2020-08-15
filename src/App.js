import React from 'react';
import { useSelector } from "react-redux";
import { Search, ErrorWidget, WeatherWidget } from "./components";
import { hasData, hasError } from "./store/data.selectors";
import { Typography } from "@material-ui/core";
import './App.scss';

function App() {
  const loaded = useSelector(hasData);
  const failed = useSelector(hasError);

  return (
    <div className="App">
      <Typography variant={"h2"}>Weather App</Typography>
      <Search />
      {loaded ? <WeatherWidget /> : failed ? <ErrorWidget /> : null}
    </div>
  );
}

export default App;
