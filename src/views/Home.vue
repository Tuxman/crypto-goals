<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-container>
        <ChartCard />
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import ChartCard from '../components/ChartCard.vue'
export default {
  name: 'Home',
  components: { ChartCard }
}
</script>

<style>

</style>
