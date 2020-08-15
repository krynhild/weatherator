import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { load } from "../../store/data.actions";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    "margin": '50px'
  }
})

export function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={() => dispatch(load(value))}>
      <TextField
        variant="outlined"
        placeholder={"Enter your city name"}
        value={value}
        onChange={({ currentTarget: { value } }) => setValue(value)} />
    </form>
  );
};
