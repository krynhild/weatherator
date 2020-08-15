import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "background-color": "rgb(255, 255, 255, 0.2)",
    color: "white",
    padding: "40px"
  }
})

export function ErrorWidget() {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={0}>
        Sorry, the specified city was not found.
    </Paper>
  );
}
