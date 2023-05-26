<template>
<v-row class="ma-0 pa-0" >
  <v-row class="ma-0 pa-0" v-if="$vuetify.breakpoint.width>738" justify="center">
    <v-card class="ma-0 pa-0 px-4" max-width="1400px" width="100vw" elevation="0" color="transparent">
      <v-row class="ma-0 pa-0"  justify="center" style="height:100vh;" v-for="item, index in 3" :key="index">
          <v-col style="height:100%;" cols="2" class="ma-0 pa-0" >
            <contact :widthCard="widthCard"/>
            <tech :widthCard="widthCard"/>
          </v-col>
          <v-col style="height:100%;" cols="6" class="ma-0 pa-0 px-3">
            <about-me />
            <projects/>
          </v-col>
          <v-col style="height:100%;" cols="4" class="ma-0 pa-0">
            <hobbies/>
            <cool/>
          </v-col>
      </v-row>
    </v-card>
  </v-row>
  <v-row v-else>
    
  </v-row>
</v-row>
</template>

<script>
import AboutMe from './aboutMe.vue'
import contact from "./contact.vue"
import cool from './cool.vue'
import hobbies from './hobbies.vue'
import projects from './projects.vue'
import tech from './tech.vue'

export default {
  components: { contact, tech, cool, projects, hobbies, AboutMe },
  data(){
    return{
      lastFirst:'',
      widthCard:0,
      width:'',
      final:'',
    }
  },
  created(){
    
  },
   methods:{
    widthHandler(){
      this.width=window.innerWidth
      this.widthCard=document.querySelectorAll('.perro')[0].scrollWidth;
      this.final = 'calc(100% -'+this.widthCard+'px);'
      console.log(this.final);
    },
    },
  mounted(){
    setTimeout(()=>{this.widthHandler()
    window.addEventListener('resize', this.widthHandler)},1)

    const lenis = new Lenis({
    smoothWheel: true,
    infinite: true,
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,

    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}
</script>