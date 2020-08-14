import _ from "lodash";
import {WeatherDataType} from "../services/data.types";

export const getCity = (state: WeatherDataType): string => _.has(state, "data.city.name") ? state.data.city.name : null;
