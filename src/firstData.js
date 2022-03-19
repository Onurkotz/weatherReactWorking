import axios from "axios";

export const FirstData = async() => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=41.0096334&lon=28.9651646&exclude=hourly&appid=992c1f2ef9fa5dbd0f8cd57296cac07b&lang=tr&units=metric`)
    return data
}