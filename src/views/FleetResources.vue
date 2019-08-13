<template>
  <section>
    <v-container>
      <header>
        <h1>Fleet Resources!</h1>
      </header>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'FleetResources',
  computed: {
    userRecipes() {
      return this.$store.state.userRecipes
    }
  },
  mounted() {
    this.getRecipes()
  },
  methods: {
    getRecipes() {
      this.$store.dispatch('getUserRecipes')
    }
  }
}
</script>

<style scoped></style>
