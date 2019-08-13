<template>
  <section>
    <vehicle-details></vehicle-details>
    <fuel-tiles></fuel-tiles>
    <fuel-history></fuel-history>
  </section>
</template>

<script>
import VehicleDetails from '@/components/VehicleDashboard/VehicleDetails'
import FuelTiles from '@/components/VehicleDashboard/FuelTiles'
import FuelHistory from '@/components/VehicleDashboard/DataTables/FuelHistory'
export default {
  name: 'General',
  components: {
    VehicleDetails,
    FuelTiles,
    FuelHistory
  }
}
</script>

<style></style>
