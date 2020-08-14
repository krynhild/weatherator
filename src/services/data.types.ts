type City = {
    coord: { lat: number, lon: number }
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
}

type Forecast = {
    clouds: { all: number }
    dt: number
    dt_txt: string
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        temp_kf: number
    }
    pop: number,
    sys: { pod: string }
    visibility: number
    weather: [{ id: number, main: string, description: string, icon: string }]
    wind: { speed: number, deg: number }
}

export type WeatherDataType = {
    city: City,
    list: Array<Forecast>
    cnt: number,
    cod: string,
    message: number
}
