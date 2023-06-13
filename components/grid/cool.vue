<template>
 <!--  <div class="sixthCard colorBack">
    <v-row justify="center" class="ma-0 pa-0" align="center">
        
        <div class="cool fadeIn">Cool stuff</div>
    </v-row>
  </div> -->
  <v-card class="ma-0 pa-0 mt-3 sixthCard colorBack" width="100%" :style="'height: calc(60%);'">
    sapo
  </v-card>
</template>

<script>
import { fetchWeather } from '~/utils/weatherApi.js';

export default {
  data() {
    return {
      weather: null
    };
  },
  async mounted() {
    try {
      const city = 'aguascalientes'; // Reemplaza con el nombre de la ciudad deseada
      this.weather = await fetchWeather(city);
      console.log(this.weather);
    } catch (error) {
      console.error('Error al obtener los datos del clima:', error);
    }
  }
};
</script>

<style></style>
