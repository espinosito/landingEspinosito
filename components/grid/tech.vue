<template>
  <!-- <div class="colorBack">
    <v-row justify="center" class="ma-0 pa-0" align="center">
        
        <div class="tech fadeIn">Techs</div>
    </v-row>
  </div> -->
  <v-card class="ma-0 pa-0 my-3 secondCard colorBack" width="100%" :style="'height: calc(100% - '+widthCard+'px - 24px);'">
    <v-row class="ma-0 pa-0 full" justify="center" align="center">
      <!-- <div class="tech fadeIn">Techs</div> -->
      <v-sparkline
      id="sapo"
      class="graph"
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
    ></v-sparkline>
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
    mounted(){
      const sapo = document.getElementById('sapo').scrollWidth

      console.log(sapo);
    }
};
</script>

<style></style>
