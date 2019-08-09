<template>
  <v-container fluid fill-height class="home-hero" style="max-height:100vh;">
    <v-layout column justify-center align-center pa-5>
      <div class="display-4 font-weight-black black--text text-xs-center">
        EMKAY, Inc
      </div>
      <!-- <div class="display-4 font-weight-black white--text text-xs-center mb-3">
        FOR YOUR TABLE
      </div>-->
      <div class="display-1 font-weight-black black--text text-xs-center">
        simple. better. different.
      </div>
      <v-btn fab class="mt-5 orange darken-1">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero'
}
</script>

<style scoped>
.home-hero {
  /* background: url('http://source.unsplash.com/0BhSKStVtdM'); */
  /* background: url('/static/assets/whitebg.jpg'); */
  background: url(~@/assets/whitebg.jpg);
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
