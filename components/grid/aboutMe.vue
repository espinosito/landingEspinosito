<template>
  <!-- <div class="thirdCard colorBack">
    <v-row justify="center" class="ma-0 pa-0 full" align="center">
        
        <div class="aboutMe fadeIn">About me</div>
    </v-row>
  </div> -->
  <v-card class="ma-0 pa-0 pb-3 thirdCard colorBack" width="100%" :style="'height: calc(60% - 12px);'">
    <v-row class="ma-0 pa-0 pt-3 full" justify="center">
      <v-card class="ma-0 pa-0 colorBack" width="80%" height="40%" @mouseleave="model=0">
        <v-carousel height="100%" hide-delimiter-background show-arrows-on-hover v-model="model" >
          <template v-slot:prev="{ on, attrs }">
            <v-img class="noBackgroundArow" v-bind="attrs" v-on="on" height="30px" width="30px" src="icons/left.svg" @click="model--"></v-img>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-img class="noBackgroundArow" v-bind="attrs" v-on="on" height="30px" width="30px" src="icons/right.svg" @click="model++"></v-img>
          </template>
          <v-carousel-item transition="fade-transition">
            <v-img height="100%" src="img/croc.jpeg"></v-img>
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <v-img height="100%" src="img/code.jpg"></v-img>
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <v-img height="100%" src="img/cool.jpg"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-row>
    <div class="aboutMe fadeIn">About me</div>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      model: 0,
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>