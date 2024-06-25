import axios from 'axios';

const API_KEY = '9a707bd61amsh25f68c787e3549cp148273jsnfde8632bdbbf';
const BASE_URL = 'https://weatherapi-com.p.rapidapi.com/forecast.json';


export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { q: city,
        days: '3',
        alert:'yes' },
      headers: {
        'x-rapidapi-key': API_KEY,
        //process.env.API_KEY
        
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        //process.env.API_HOST
        
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
};

