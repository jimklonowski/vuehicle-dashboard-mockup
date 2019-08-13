<template>
  <section>
    <v-container>
      <header class="display-3 py-2">Fleet Reports</header>
      <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
        <v-layout wrap justify-center>
          <v-flex
            xs12
            sm6
            md4
            lg3
            x12
            v-for="report in reports"
            :key="report.text"
            cols="4"
          >
            <v-card outlined flat tile>
              <v-card-title secondary py-2>{{ report.text }}</v-card-title>
              <v-divider class="primary" dark></v-divider>
              <v-layout wrap column align-center py-5>
                <v-card-actions>
                  <!-- <v-btn text>
                    <v-icon>cloud_download</v-icon>&nbsp;Download
                  </v-btn>-->
                  <v-btn text :to="report.to">
                    <v-icon>visibility</v-icon>&nbsp;View
                  </v-btn>
                </v-card-actions>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <router-view />
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'FleetReports',
  components: {},
  data: () => ({
    date: new Date().toISOString().substring(0, 7),
    menu: false,
    size: 'sm',
    reports: [
      { text: 'Annual Expense', to: { name: 'annual-expense' } },
      { text: 'Replacement Analysis', to: { name: 'replacement-analysis' } },
      { text: 'Order Status', to: { name: 'orderstatus' } },
      { text: 'Inventory', to: { name: 'inventory' } },
      { text: 'Maintenance Detail', to: { name: 'maintenance' } },
      { text: 'Claim Status', to: { name: 'claimstatus' } },
      { text: 'MPG Report', to: { name: 'mpg' } },
      { text: 'Personal Mileage', to: { name: 'personalmileage' } }
    ]
  })
}
</script>

<style scoped></style>
