<template>
  <v-app>
    <app-navigation></app-navigation>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'

export default {
  name: 'App',
  components: {
    AppNavigation
  },
  data: () => ({
    //
  })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
</style>
