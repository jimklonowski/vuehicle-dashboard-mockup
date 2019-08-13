<template>
  <v-container>
    <v-card class="flex">
      <v-card-title>{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="row">
        <v-list dense class="flex xs12 md4">
          <v-list-item
            v-for="item in firstColumn"
            :key="vehicle[item]"
            class="details-row"
          >
            <v-list-item-content class="details-label">
              <strong>{{ item.name }}</strong>
            </v-list-item-content>
            <v-list-item-content class="details-value">{{
              item.value
            }}</v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list dense class="flex xs12 md4">
          <v-list-item
            v-for="item in secondColumn"
            :key="vehicle[item]"
            class="details-row"
          >
            <v-list-item-content class="details-label">
              <strong>{{ item.name }}</strong>
            </v-list-item-content>
            <v-list-item-content class="details-value">{{
              item.value
            }}</v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list dense class="flex xs12 md4">
          <v-list-item
            v-for="item in thirdColumn"
            :key="vehicle[item]"
            class="details-row"
          >
            <v-list-item-content class="details-label">
              <strong>{{ item.name }}</strong>
            </v-list-item-content>
            <v-list-item-content class="details-value">{{
              item.value
            }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'VehicleDetails',
  data: function() {
    return {
      title: 'Vehicle Details',
      vehicle: [
        {
          index: 0,
          key: 'account',
          name: 'Account',
          value: 'EM102'
        },
        {
          index: 1,
          key: 'billing_sort',
          name: 'Billing Sort',
          value: ''
        },
        {
          index: 2,
          key: 'vin',
          name: 'VIN',
          value: '987654321QWERTY'
        },
        {
          index: 3,
          key: 'vehicle_number',
          name: 'Vehicle Number',
          value: '123456'
        },
        {
          index: 4,
          key: 'center',
          name: 'Center',
          value: '001'
        },
        {
          index: 5,
          key: 'center_description',
          name: 'Center Description',
          value: 'Executive'
        },
        {
          index: 6,
          key: 'client_vehicle_number',
          name: 'Client Vehicle Number',
          value: '987654'
        },
        {
          index: 7,
          key: 'vehicle_year',
          name: 'Year',
          value: '2019'
        },
        {
          index: 8,
          key: 'vehicle_make',
          name: 'Make',
          value: 'DODGE'
        },
        {
          index: 9,
          key: 'vehicle_model',
          name: 'Model',
          value: 'DURANGO'
        },
        {
          index: 10,
          key: 'vehicle_classification',
          name: 'Category',
          value: 'Sport Utility - Medium'
        },
        {
          index: 11,
          key: 'vehicle_status',
          name: 'Status',
          value: 'ON BILLING'
        },
        {
          index: 12,
          key: 'customer_use_1',
          name: 'Client Use 1',
          value: 'asdf'
        },
        {
          index: 13,
          key: 'customer_use_2',
          name: 'Client Use 2',
          value: 'qwer'
        },
        {
          index: 14,
          key: 'customer_use_3',
          name: 'Client Use 3',
          value: '1234'
        },
        {
          index: 15,
          key: 'customer_use_4',
          name: 'Client Use 4',
          value: 'jklo'
        },
        {
          index: 16,
          key: 'customer_use_5',
          name: 'Client Use 5',
          value: 'test'
        }
      ]
    }
  },
  computed: {
    firstColumn() {
      return this.vehicle.slice(0, 6)
    },
    secondColumn() {
      return this.vehicle.slice(6, 12)
    },
    thirdColumn() {
      return this.vehicle.slice(12, this.vehicle.length)
    }
  }
}
</script>

<style scoped>
.details-row {
  min-height: 24px;
  height: 24px;
}
.details-label {
  font-family: 'Lato', sans-serif;
  text-align: right;
  padding-right: 0.5rem !important;
  line-height: normal;
  vertical-align: middle;
}
.details-value {
  font-family: 'Roboto Condensed', sans-serif;
  text-align: left;
  padding-left: 0.5rem !important;
  line-height: normal;
  vertical-align: middle;
}
</style>
