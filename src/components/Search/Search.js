import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { clear, load } from "../../store/data.actions";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    "margin": '50px',
    transition: "all 0.2s ease 0s"
  },
  input: {
    padding: "10px 15px 10px 15px"
  }
})

export function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();
    value.trim() && dispatch(load(value.trim()));
    !value.trim() && dispatch(clear());
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
      <TextField
        variant={"outlined"}
        inputProps={{
          className: classes.input
        }}
        placeholder={"Enter your city name"}
        value={value}
        onChange={({ currentTarget: { value } }) => setValue(value)} />
    </form>
  );
}
