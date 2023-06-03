<template>
  <!-- <div class="thirdCard colorBack">
    <v-row justify="center" class="ma-0 pa-0 full" align="center">
        
        <div class="aboutMe fadeIn">About me</div>
    </v-row>
  </div> -->
  <v-card class="ma-0 pa-0 thirdCard colorBack" width="100%" :style="'height: calc(60% - 12px);'">
    <v-row class="ma-0 pa-0 full" justify="center" style="align-content: space-evenly;">
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
      <v-card elevation="0" class="ma-0 pa-0 cardMail" width="80%" height="40%">
        <v-row class="ma-0 pa-0 pa-4 pb-2" justify="center" align="center">
            <v-row class="ma-0 pa-0" justify="start" align="center">
              <v-img class="mr-2" contain height="30px" max-width="30px" src="icons/mail.svg"></v-img>
              Todos
            </v-row>
            <v-row class="ma-0 pa-0" justify="end" align="center">
            2
            </v-row>
        </v-row>
            <v-row class="ma-0 pa-0" justify="center">
              <v-divider class="divider"></v-divider>
            </v-row>
        <v-row class="ma-0 pa-0 px-4 py-2" justify="center" align="center">
            <v-row class="ma-0 pa-0 fullWidth" justify="center" align="center">
              <v-row class="ma-0 pa-0" justify="start" align="center">
                viva dios primer correo
              </v-row>
              <v-row class="ma-0 pa-0" justify="end" align="center">
                12:04
              </v-row>
            </v-row>
            <v-row class="ma-0 pa-0" style="width: -webkit-fill-available;" justify="start" align="center">
              <p class="ma-0" style="text-overflow: ellipsis;overflow: hidden; white-space: nowrap;">
                texto debajo texto debajo texto debajo texto debajo texto debajo texto debajo
              </p>
            </v-row>
        </v-row>
              <v-row class="ma-0 pa-0" justify="center">
                <v-divider class="divider"></v-divider>
              </v-row>
        <v-row class="ma-0 pa-0 px-4 py-2" justify="center" align="center">
            <v-row class="ma-0 pa-0 fullWidth" justify="center" align="center">
              <v-row class="ma-0 pa-0" justify="start" align="center">
                viva dios primer correo
              </v-row>
              <v-row class="ma-0 pa-0" justify="end" align="center">
                12:04
              </v-row>
            </v-row>
            <v-row class="ma-0 pa-0" style="width: -webkit-fill-available;" justify="start" align="center">
              <p class="ma-0" style="text-overflow: ellipsis;overflow: hidden; white-space: nowrap;">
                texto debajo texto debajo texto debajo texto debajo texto debajo texto debajo
              </p>
            </v-row>
        </v-row>
        <v-row class="ma-0 pa-0" justify="center">
                <v-divider class="divider"></v-divider>
              </v-row>
        <v-row class="ma-0 pa-0 px-4 py-2" justify="center" align="center">
            <v-row class="ma-0 pa-0 fullWidth" justify="center" align="center">
              <v-row class="ma-0 pa-0" justify="start" align="center">
                viva dios primer correo
              </v-row>
              <v-row class="ma-0 pa-0" justify="end" align="center">
                12:04
              </v-row>
            </v-row>
            <v-row class="ma-0 pa-0" style="width: -webkit-fill-available;" justify="start" align="center">
              <p class="ma-0" style="text-overflow: ellipsis;overflow: hidden; white-space: nowrap;">
                texto debajo texto debajo texto debajo texto debajo texto debajo texto debajo
              </p>
            </v-row>
        </v-row>
      </v-card>
    </v-row>
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