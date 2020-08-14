import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCity } from "../store/data.selectors";

export function Widget() {
  const city = useSelector(getCity);

  return (
    <div>
      {city}
    </div>
  );
}
