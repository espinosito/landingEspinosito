<template>
  <!-- <div class="thirdCard colorBack">
    <v-row justify="center" class="ma-0 pa-0 full" align="center">
        
        <div class="aboutMe fadeIn">About me</div>
    </v-row>
  </div> -->
  <v-card class="ma-0 pa-0 mb-3 thirdCard colorBack" width="100%" :style="'height: calc(60% - 12px);'">
    <v-row class="ma-0 pa-0 pt-3 full" justify="center">
      <v-card class="ma-0 pa-0 colorBack" width="80%" height="40%">
        <v-carousel height="100%" hide-delimiter-background show-arrows-on-hover>
          <template v-slot:prev="{ on, attrs }">
            <v-img class="noBackgroundArow" v-bind="attrs" v-on="on" height="30px" width="30px" src="icons/left.svg"></v-img>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-img class="noBackgroundArow" v-bind="attrs" v-on="on" height="30px" width="30px" src="icons/right.svg"></v-img>
          </template>
          <v-carousel-item v-for="item, index in 4" :key="index">
            <v-img height="100%" src="img/croc.jpeg"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-row>
    <div class="aboutMe fadeIn">About me</div>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>