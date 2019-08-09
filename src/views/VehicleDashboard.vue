<template>
  <span>
    <v-toolbar dense light>
      <v-toolbar-title>Vehicle Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in items"
          :key="item.text"
          :to="item.to"
          @click
          >{{ item.text }}</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>

    <v-text-field label="Vehicle Number" outlined></v-text-field>
  </span>
</template>

<script>
export default {
  name: 'VehicleDashboard',
  data: () => ({
    items: [
      { text: 'General', to: '/general' },
      { text: 'General', to: '/general' },
      { text: 'General', to: '/general' },
      { text: 'Expense Summary', to: '/expenses' },
      { text: 'Billing History', to: '/billing' },
      { text: 'Maintenance', to: '/maintenance' },
      { text: 'Fuel', to: '/fuel' },
      { text: 'Accident', to: '/accident' },
      { text: 'Rental History', to: '/rentals' },
      { text: 'Inspections', to: '/inspections' },
      { text: 'Drivers', to: '/drivers' },
      { text: 'Documents', to: '/documents' },
      { text: 'Reported Odometers', to: '/odometers' },
      { text: 'Toll Transactions', to: '/tolls' },
      { text: 'Transport/Storage', to: '/transports' },
      { text: 'Violations', to: '/violations' },
      { text: 'eVoucher', to: '/evoucher' },
      { text: 'SafeRoads', to: '/saferoads' }
    ]
  })
}
</script>

<style></style>
