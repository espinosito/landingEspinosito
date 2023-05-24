<template>
<v-row class="ma-0 pa-0">
  <v-row class="ma-0 pa-0" v-if="$vuetify.breakpoint.width>738" style="height: 100vh;">
    <v-row class="ma-0 pa-0" style="height: 100vh;" v-for="item, index in 2" :key="index">
        <contact/>
        <tech/>
        <about-me/>
        <projects/>
        <hobbies/>
        <cool/>
    </v-row>
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
      lastFirst:''
    }
  },
  created(){
    
  },
  mounted(){
    const lenis = new Lenis({
    smooth: true,
    infinite: true,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}
</script>