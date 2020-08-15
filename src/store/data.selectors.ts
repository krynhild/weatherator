import _ from "lodash";
import {IState} from "./store.types";
import {ShortForecast} from "../services/data.types";

export const hasError = (state: IState): boolean => !state.weather.success && !_.isEmpty(state.weather.error);
export const hasData = (state: IState): boolean => state.weather.success;

export const getGeoData = (state: IState): { name: string, country: string } | null =>
    _.has(state, "weather.city.name") ? _.pick(state.weather.city, ["name", "country"]) : null;
export const getShortForecast = (state: IState): ShortForecast | null =>
    _.has(state, "weather.list[0].weather[0]") ? state.weather.list[0].weather[0] : null;
