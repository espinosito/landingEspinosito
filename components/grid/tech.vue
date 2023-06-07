<template>
  <v-card class="ma-0 pa-0 mt-3 secondCard colorBack" width="100%" :style="'height: calc(100% - '+widthCard+'px - 12px);'">
    <v-row class="ma-0 pa-0 full fullWidth" justify="center" align="center">
      <div class="tech fadeIn">Tech</div>
      <svg xmlns="http://www.w3.org/2000/svg" class="secondCard" width="90%" height="80%" viewBox="0 0 200 810">
        <path id="curve" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" d="M 10 20 
          C 280 120, 150 200, 100 250 
          C 40 300, 120 350, 130 400 
          C 140 450, 10 500, 100 600 
          C 200 700, 180 750, 190 800" />
        <path id="lineSm" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" d="M 10 800 L 190 800" />
        <path id="line" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" d="M 190 10 L 190 800" />
      </svg>
    </v-row>
  </v-card>
</template>

<script>
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
export default {
  props:{widthCard:Number},
  data: () => ({
      width: 10,
      radius: 20,
      padding: 0,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
    /* mounted() {
    // Obtén el elemento path del SVG
    const path = document.getElementById('curve');

    // Obtiene la longitud total de la curva
    const length = path.getTotalLength();

    // Establece la longitud inicial del trazo en 0
    path.style.strokeDasharray = length;

    // Anima la longitud del trazo para que aparezca gradualmente
    path.style.strokeDashoffset = length;

    // Para iniciar la animación, espera un corto tiempo y luego aplica la clase para activarla
    setTimeout(() => {
      path.classList.add('curve-animation');
    }, 100);
  } */
};
</script>

<style></style>
