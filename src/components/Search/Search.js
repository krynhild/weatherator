import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { clear, load } from "../../store/data.actions";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles({
  root: {
    "margin": '50px',
    "max-width": "500px",
    width: '100%',
    transition: "all 0.2s ease 0s"
  },
  textField: {
    width: '100%'
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

  const clearInput = () => {
    setValue("");
    dispatch(clear());
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
      <TextField
        autoFocus
        className={classes.textField}
        variant={"outlined"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={clearInput}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        label={"City Name"}
        value={value}
        onChange={({ currentTarget: { value } }) => setValue(value)} />
    </form>
  );
}
