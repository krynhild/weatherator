import React from "react";
import { useSelector } from "react-redux";
import { getGeoData, getShortForecast } from "../../store/data.selectors";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import appConfig from "../../appConfig.json";

const useStyles = makeStyles({
  root: {
    "background-color": "rgb(255, 255, 255, 0.2)",
    color: "white",
    padding: "40px"
  },
  description: {
    "text-transform": "capitalize"
  }
})

export function WeatherWidget() {
  const classes = useStyles();
  const { name, country } = useSelector(getGeoData);
  const { main, description, icon } = useSelector(getShortForecast);

  return (
    <Paper className={classes.root} elevation={0}>
      <p>{`${name}, ${country}`}</p>
      <img alt="weather icon" src={`${appConfig.iconURL}${icon}@2x.png`} />
      <p className={classes.description}>{description}</p>
    </Paper>
  );
}
