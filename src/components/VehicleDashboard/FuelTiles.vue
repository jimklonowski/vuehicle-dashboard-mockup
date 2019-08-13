<template>
  <v-container>
    <v-layout row no-gutters>
      <v-flex v-for="(tile, index) in tiles" :key="index" xs12 md6 lg3>
        <v-alert
          :color="tile.color"
          class="text-right"
          :class="getTileClass(index)"
          elevation="1"
          border="left"
          colored-border
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon x-large left>directions_car</v-icon>
            </v-list-item-icon>
            <v-spacer class="hidden-lg-and-down"></v-spacer>
            <v-list-item-content>
              <v-list-item-subtitle>{{ tile.title }}</v-list-item-subtitle>
              <v-divider></v-divider>
              <v-list-item-title>{{ tile.value }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'FuelTiles',
  data: function() {
    return {
      title: 'Fuel Tiles',
      tiles: [
        {
          title: 'Current MPG',
          value: '18.36',
          icon: 'directions_car',
          color: 'primary lighten-1'
        },
        {
          title: 'Current Odometer',
          value: '18,118',
          icon: 'av_timer',
          color: 'primary lighten-1'
        },
        {
          title: 'Total Gallons',
          value: '983.20',
          icon: 'local_gas_station',
          color: 'primary lighten-1'
        },
        {
          title: 'Total Fuel Cost',
          value: '$2,527.85',
          icon: 'attach_money',
          color: 'primary lighten-1'
        }
      ]
    }
  },
  methods: {
    getTileClass(index) {
      if (index === 0) return 'mr-1'
      else if (index === 3) return 'ml-1'
      else return 'mx-1'
    }
  }
}
</script>

<style></style>
