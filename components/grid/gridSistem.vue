<template>
<v-row class="ma-0 pa-0">
  <v-row class="ma-0 pa-0" v-if="$vuetify.breakpoint.width>738" justify="center" align="center">
    <v-card class="ma-0 pa-0 px-4" max-width="1400px" width="100vw" elevation="0" color="transparent">
      <v-row class="ma-0 pa-0 py-4"  justify="center" align="center" style="height:100vh;"> <!-- v-for="item, index in 3" :key="index" -->
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
    },
    },
  mounted(){
    setTimeout(()=>{this.widthHandler()
    window.addEventListener('resize', this.widthHandler)},1)

    /* const lenis = new Lenis({
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
    requestAnimationFrame(raf); */
    /* esto da problemas con el scroll en la card de correos */
  }
}
/* created(){
    const arr=[12,-30,4,67,3,1,23,6,8,7,56, 0,1,100];
    const arr2=[2,4,1,0,6,3,5,7]
    const pali=12321
    const duplex=[1,2,1,3,3,1,7,1,2,4,5];
    const falsy=[2,null, false, 0, 3,[]];
    function falsyFilter(arr){
      let res=arr.filter(item => item===0 || item &&!(Array.isArray(item) && item.length===0))
      return res;
    }

    console.log(falsyFilter(falsy));
  //   /* function deleteDuplex(arr){
  //     let newArr=[]
  //     for(let i=0; i<arr.length;i++){
  //       for(let j=i; j<arr.length;j++){
  //         if(arr[i]==arr[j+1]){
  //           arr.splice(j+1,1)
  //         }
  //       }
  //     }
  //     return arr
  //   }

  //   console.log(deleteDuplex(duplex)); */
  //   /* function palindromo(arr){
  //     if(typeof arr == 'string'){
  //       arr = arr.toLowerCase();
  //       console.log(arr);
  //     }
  //     if(typeof arr == 'number'){
  //       arr=arr.toString()
  //       console.log(arr);
  //     }
  //     let aux=true
  //     for(let i=0; i<arr.length;i++){
  //       if (arr[i]!=arr[arr.length-1-i]) {
  //         aux=false
  //       }
  //     }
  //     return aux
  //   }
  //   console.log(palindromo(pali)) */
  //   // const auxSum=[];
  //   // function sumPar(arr){
  //   //   for(let i=0; i<arr.length; i++){
  //   //     if(arr[i]%2===0){
  //   //       auxSum.push(arr[i])
  //   //     }
  //   //   }
  //   //   /* let res = auxSum.reduce((a,b)=>{a+b},0) */
  //   //   console.log(auxSum);
  //   //   function recursive(arr,res,iter){
  //   //       if (iter<arr.length) {
  //   //         res=res + arr[iter];
  //   //         iter+=1
  //   //         return recursive(arr,res,iter)
  //   //       }else{
  //   //         return res;
  //   //       }
  //   //   }
  //   //   const final=recursive(auxSum,0,0)
  //   //   return final;
  //   // }
  //   // console.log(sumPar(arr2));

  //   // function calcMaxPlusMin(arr){
  //   //   let ordered = arr.sort((a,b)=>{ return a-b});
  //   //   let max = ordered[ordered.length-1]
  //   //   let min = ordered[0]
  //   //   let result=max+min;
  //   //   return(result);
  //   // }
  //   // console.log(calcMaxPlusMin(arr));

  //   // /* sortp por comparacion */
  //   // function sortComp(arr){
  //   //   for (let i=0; i<arr.length;i++){
  //   //     for (let j=0; j<arr.length -i -1;j++){
  //   //       if(arr[j]>arr[j+1]){
  //   //         let temp = arr[j+1]
  //   //         arr[j+1]=arr[j]
  //   //         arr[j]=temp
  //   //       }
  //   //     }
  //   //   }
  //   //   return arr;
  //   // }
  //   // console.log(sortComp(arr))
  // }, */
</script>