import React, { useState } from "react";
import { Input } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { load } from "../store/data.actions";

export function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  return (
    <form noValidate autoComplete="off" onSubmit={() => dispatch(load(value))}>
      <Input
        variant="outlined"
        value={value}
        onChange={({currentTarget: {value}}) => setValue(value)}
      />
    </form>
  );
}
