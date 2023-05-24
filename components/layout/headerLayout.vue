<template>
  <v-row class="ma-0 pa-0 mt-8 headerLayout">
      <v-col cols="4" class="ma-0 pa-0">
        <v-row class="ma-0 pa-0" justify="center">
          <v-switch v-model="theme"></v-switch>
        </v-row>
      </v-col>
    <v-col cols="4" class="ma-0 pa-0 centeredCard" justify="center">
      <v-card class="pa-0 ma-0 textField" height="auto" width="100%" elevation="0" color="blue">
        <v-text-field class="ma-0 pa-0 textField" color="red" label="Outlined"  hide-details="true" append-icon="mdi-magnify" placeholder="Placeholder" single-line dense outlined>
        </v-text-field>
      </v-card>
    </v-col>
    <v-col cols="4" class="ma-0 pa-0">
      <v-row class="ma-0 pa-0" justify="center">
        <v-switch v-model="languague"></v-switch>
        <v-switch v-model="grid"></v-switch>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data(){
    return{
      text:'',
      theme:false,
      languague:false,
      grid:false,
    }
  },
  watch:{
    theme(){
      if (this.theme) {
        this.$vuetify.theme.isDark=true;
      }else{
        this.$vuetify.theme.isDark=false;
      }
    }
  }
}
</script>