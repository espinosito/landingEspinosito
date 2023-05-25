<template>
  <!-- <div class="secondCard colorBack">
    <v-row justify="center" class="ma-0 pa-0" align="center">
        
        <div class="tech fadeIn">Techs</div>
    </v-row>
  </div> -->
  <v-card class="ma-0 pa-0 my-3" width="100%" :style="'height: calc(100% - '+widthCard+'px - 24px);'">
  </v-card>
</template>

<script>
export default {
  props:{widthCard:Number},
};
</script>

<style></style>
