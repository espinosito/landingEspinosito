<template>
  <div class="firstCard" @mouseover="changeSize()" @mouseleave="maxSize()">
    <v-row class="pa-0 ma-0 full" align="center" justify="center">
            <v-carousel height="100%" cycle hide-delimiter-background hide-delimiters :show-arrows="false" interval="5000">
                <v-carousel-item v-for="item, index in images" :key="index" >
                    <v-row class="pa-0 ma-0 full" align="center" justify="center">
                        <v-img :src="item" :height="heightCard" contain class="whats"></v-img>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
            <!-- <v-img src="contact/whats.svg" height="20vh" contain class="whats"></v-img> -->
            <div class="contact fadeInUp" id="contact">Contact</div>
    </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            images:['contact/whats.svg','contact/linkedIn.svg','contact/mail.svg','contact/instagram.svg','contact/phone.svg'],
            isVisible:false,
            myText:'',
            heightCard:'30vh'
        }
    },
    methods:{
        changeSize(){
            this.heightCard='20vh'
        },
        maxSize(){
            this.heightCard='30vh'
        }
    }

};
</script>
