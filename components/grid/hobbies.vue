<template>
 <!--  <div class="fifthCard colorBack">
    <v-row justify="center" class="ma-0 pa-0 full" align="center">
       
        <div class="hobbies fadeIn">Hobbies</div>
    </v-row>
  </div> -->
  <v-card class="ma-0 pa-0 mb-3 fifthCard colorBack" width="100%" :style="'height: calc(40% - 12px);'">
    <general-map/>
  </v-card>
</template>

<script>
import generalMap from '../maps/generalMap.vue';
export default {
  components: { generalMap },
}
</script>

<style></style>
