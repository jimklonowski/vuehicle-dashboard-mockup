<template>
  <v-container>
    <v-card>
      <v-card-title class="primary lighten-2 white--text">
        {{ title }}
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          background-color="primary lighten-4"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        :search="search"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'replacement-analysis',
  data: () => ({
    title: 'Replacement Analysis Report',
    headers: [],
    items: []
  })
}
</script>

<style></style>
