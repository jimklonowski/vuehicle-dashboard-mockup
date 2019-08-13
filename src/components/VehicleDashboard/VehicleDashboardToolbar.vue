<template>
  <v-toolbar dense light>
    <v-toolbar-title>Vehicle Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn text v-for="item in items" :key="item.text" :to="item.to">{{
        item.text
      }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'VehicleDashboardToolbar',
  data: () => ({
    items: [
      //{ text: 'General', to: '/vehicle-dashboard/general' },
      { text: 'General', to: { name: 'general' } },
      { text: 'Expense Summary', to: { name: 'expenses' } },
      { text: 'Billing History', to: { name: 'billing' } },
      { text: 'Maintenance', to: { name: 'maintenance' } },
      { text: 'Fuel', to: { name: 'fuel' } },
      { text: 'Accident', to: { name: 'accident' } },
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
