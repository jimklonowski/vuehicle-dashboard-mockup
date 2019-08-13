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
  name: 'annual-expense',
  data: () => ({
    title: 'Annual Expense Report',
    search: '',
    headers: [
      {
        text: 'Level 1',
        align: 'left',
        sortable: true,
        value: 'level1'
      },
      {
        text: 'Level 2',
        align: 'left',
        sortable: true,
        value: 'level2'
      },
      {
        text: 'Level 3',
        align: 'left',
        sortable: true,
        value: 'level3'
      },
      {
        text: 'Center',
        align: 'left',
        sortable: true,
        value: 'center'
      },
      {
        text: 'Last Name',
        align: 'left',
        sortable: true,
        value: 'last_name'
      },
      {
        text: 'Billing Year',
        align: 'left',
        sortable: true,
        value: 'year'
      }
    ],
    items: [
      {
        level1: 'Emkay Inc',
        level2: 'Sales',
        level3: 'Short Term & Unassigned Demos',
        center: '004',
        last_name: '801 SPARE',
        year: '2019'
      },
      {
        level1: 'Emkay Inc',
        level2: 'Sales',
        level3: 'Short Term & Unassigned Demos',
        center: '004',
        last_name: '801 SPARE',
        year: '2019'
      },
      {
        level1: 'Emkay Inc',
        level2: 'Sales',
        level3: 'Short Term & Unassigned Demos',
        center: '004',
        last_name: '801 SPARE',
        year: '2019'
      },
      {
        level1: 'Emkay Inc',
        level2: 'Sales',
        level3: 'Short Term & Unassigned Demos',
        center: '004',
        last_name: '801 SPARE',
        year: '2019'
      },
      {
        level1: 'Emkay Inc',
        level2: 'Sales',
        level3: 'Sales',
        center: '002',
        last_name: 'BEINKE',
        year: '2019'
      },
      {
        level1: 'Emkay Inc',
        level2: 'Sales',
        level3: 'Account Managers',
        center: '003',
        last_name: 'BLEILER',
        year: '2019'
      },
      {
        level1: 'Emkay Inc',
        level2: 'Executive',
        level3: '',
        center: '001',
        last_name: 'DEPACE',
        year: '2019'
      }
    ]
  })
}
</script>

<style></style>
