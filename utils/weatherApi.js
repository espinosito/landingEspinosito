const axios = require('axios');


const API_KEY = 'e651fb441f463b046a8e76ad122cc347';

export async function fetchWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Aguascalientes,mx&callback=test&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos del clima:', error);
    throw error;
  }
}
