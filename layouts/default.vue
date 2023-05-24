<template>
  <v-app class="heightLayout">
    <div>
      <headerLayout/>
      <Nuxt/>
    </div>
  </v-app>
</template>

<script>
import headerLayout from '../components/layout/headerLayout.vue'
export default {
  components:{headerLayout}
}
</script>
