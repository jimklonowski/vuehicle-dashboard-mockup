<template>
  <section>
    <vehicle-dashboard-toolbar></vehicle-dashboard-toolbar>
    <vehicle-dashboard-search></vehicle-dashboard-search>
    <router-view />
  </section>
</template>

<script>
import VehicleDashboardToolbar from '@/components/VehicleDashboard/VehicleDashboardToolbar'
import VehicleDashboardSearch from '@/components/VehicleDashboard/VehicleDashboardSearch'

export default {
  name: 'VehicleDashboard',
  components: {
    VehicleDashboardToolbar,
    VehicleDashboardSearch
  }
}
</script>

<style></style>
