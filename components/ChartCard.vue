<template>
  <v-card min-height="900px" min-width="700px" class="mx-auto">
    <v-card-title class="justify-center">Coins {{ coin }}</v-card-title>
    <v-col>
      <v-card-actions class="justify-center mt-4">
        <v-autocomplete 
        v-model="coins" 
        :items="coinList"
        item-text="name"
        item-value="id"
        label="Search for a coin"
        outlined
        clearable
        small-chips
        deletable-chips
        multiple
        @change="coinQueries(coins)"
        ></v-autocomplete>
      </v-card-actions>
      <v-card-actions class="justify-center mt-4">
        <v-btn-toggle
        v-model="chartSelectedDate"
        mandatory
        @change="btnChartSelectedDateBtc">
          <v-btn value="1">1d</v-btn>
          <v-btn value="7">1w</v-btn>
          <v-btn value="30">1m</v-btn>
          <v-btn value="365">1y</v-btn>
        </v-btn-toggle>
      </v-card-actions>
      <v-card-actions class="justify-center mt-4">
        <div>
          <LineChart :data="lineChartData" :options="lineChartOptions" :height="500" :width="700"/>
        </div>
      </v-card-actions>
    </v-col>
  </v-card>
</template>

<script>
import LineChart from '@/components/LineChart.vue';

export default {
  components: {
    LineChart
  },
  data () {
    return {
      coinList: [],
      coins: ['bitcoin', ],
    }
  }
}
</script>

<style>

</style>