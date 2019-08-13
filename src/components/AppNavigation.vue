<template>
  <span>
    <v-navigation-drawer v-model="drawer" light app clipped>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="item.to"
          @click
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-spacer></v-spacer>
        <v-subheader class="mt-4 grey--text text--darken-1"
          >FLEET MESSAGES</v-subheader
        >
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" @click>
            <v-list-item-avatar>
              <img
                :src="
                  `https://randomuser.me/api/portraits/men/${item.picture}.jpg`
                "
                alt
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item class="mt-4" @click>
          <v-list-item-action>
            <v-icon color="white darken-1">add_circle_outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="white--text text--darken-1"
            >Browse Channels</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon color="white darken-1">settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="white--text text--darken-1"
            >Manage Subscriptions</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="blue-grey darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-icon class="mx-4">drive_eta</v-icon> -->
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">EMKAY, Inc</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      {
        icon: 'dashboard',
        text: 'Fleet Dashboard',
        to: '/fleet-dashboard'
      },
      {
        icon: 'table_chart',
        text: 'Vehicle Dashboard',
        to: '/vehicle-dashboard'
      },
      {
        icon: 'show_chart',
        text: 'Fleet Reports',
        to: '/fleet-reports'
      },
      {
        icon: 'build',
        text: 'Fleet Resources',
        to: '/fleet-resources'
      },
      {
        icon: 'message',
        text: 'Fleet Messenger',
        to: '/fleet-messenger'
      }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' }
    ]
  }),
  created() {
    //this.$vuetify.theme.dark = true
  }
}
</script>
