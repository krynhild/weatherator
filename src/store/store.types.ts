import {WeatherDataType} from "../services/data.types";

export interface IState {
    weather: WeatherDataType & {error: object | null, success: boolean}
};
