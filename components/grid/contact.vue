<template>
  <!-- <div class="firstCard colorBack">
    <v-carousel height="auto" cycle hide-delimiter-background hide-delimiters :show-arrows="false" interval="5000">
        <v-carousel-item v-for="item, index in images" :key="index" >
            <v-row class="pa-0 ma-0" align="center" justify="center">
                <v-img :src="item" contain class="smallImg"></v-img>
            </v-row>
        </v-carousel-item>
    </v-carousel>
    
    <div class="contact fadeIn" id="contact">Contact</div>
  </div> -->
    <v-card class="ma-0 pa-0 perro firstCard colorBack" color="transparent" width="100%" :height="widthCard">
        <v-carousel height="auto" cycle hide-delimiter-background hide-delimiters :show-arrows="false" interval="5000">
        <v-carousel-item v-for="item, index in images" :key="index" >
            <v-row class="pa-0 ma-0" align="center" justify="center">
                <v-img :src="item" contain class="smallImg"></v-img>
            </v-row>
        </v-carousel-item>
    </v-carousel>
    <div class="contact fadeIn" id="contact">Contact</div>
    </v-card>
</template>

<script>
export default {
    props:{widthCard:Number},
    data(){
        return{
            images:['contact/whats.svg','contact/linkedIn.svg','contact/mail.svg','contact/instagram.svg','contact/phone.svg'],
            isVisible:false,
            myText:'',
        }
    },

};
</script>
