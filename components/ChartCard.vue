<template>
  <v-card min-height="900px" min-width="700px" class="mx-auto">
    <v-card-title class="justify-center">Coins</v-card-title>
    <v-col>
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
          <LineChart :data="lineChartData" :options="lineChartOptions" :height="400"/>
        </div>
      </v-card-actions>
    </v-col>
  </v-card>
</template>

<script>
import LineChart from '@/components/LineChart.vue'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      lineChartData: {
        labels: [
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-01",
          "2020-02",
          "2020-03",
        ],
        datasets: [
          {
            label: "Visualizaciones",
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: "rgba(20, 255, 0, 0.3)",
            borderColor: "rgba(100, 255, 0, 1)",
            borderWidth: 2,
          },
        ],
      },
      lineChartOptions: {
        responsive: true,
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: "Google analytics data",
          fontSize: 24,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    };
  }
}
</script>

<style>

</style>