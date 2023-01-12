import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: process.env.REACT_APP_WEATHER_API_KEY,
    },
  })

  return data
}
