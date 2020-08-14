import {HttpClient} from "./http.service";
import {WeatherDataType} from "./data.types";
import {AxiosResponse} from "axios";

export class DataService {
    constructor(private http: HttpClient) {
    }

    public get(city: String): Promise<AxiosResponse<{ data: WeatherDataType }>> {
        return this.http.get({q: city, units: "metric"});
    }
}
