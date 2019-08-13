<template>
  <v-container class="search pa-5 elevation-2">
    <v-layout column>
      <header class="font-weight-light display-2 py-5">
        Vehicle Dashboard
      </header>
      <v-form ref="form" lazy-validation action="asdf">
        <v-flex xs12 md6>
          <v-text-field
            name="vehicle"
            label="Vehicle Number"
            :counter="6"
            required
            filled
            shaped
            outlined
          ></v-text-field>
        </v-flex>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VehicleDashboardSearch'
}
</script>

<style scoped>
.search {
  background: url(~@/assets/whitebg.jpg);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
