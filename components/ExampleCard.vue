<template>
  <v-card min-height="900px" min-width="700px" class="mx-auto">
    <v-card-title class="justify-center">Coins</v-card-title>
    <Gchart
    type="LineChart"
    @ready="onChartReady"
    />
  </v-card>
</template>

<script>
import { GChart } from 'vue-google-charts'
import axios from 'axios'

export default {

  components: {
    // eslint-disable-next-line vue/no-unused-components
    GChart
  },

  data () {
    return {
      chartSelectedDate: 1,
      chartInterval: 'minutely',
      coinIds: ['bitcoin', 'ethereum'],
      coinData: this.onChartReady(['bitcoin', 'ethereum']),
      coinMatrix: []
    }
  },

  methods: {
   async coinQueries(coins) {
     console.log(coins)
      const queries = coins.map(coin => axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${this.chartSelectedDate}&interval=${this.chartInterval}`))
      await axios.all(queries).then(axios.spread((...responses) => {
        const prices = responses.map(res =>  res.data.prices)
        this.coinMatrix = prices.map((p, i) => ['Date', coins[i]].concat(p))
      }))
    },

    async onChartReady(coins, chart, google) {
      await this.coinQueries(coins)
      console.log(this.coinMatrix)
      const dt1 = google.visualization.arrayDataToTable(this.coinMatrix[0])
      const dt2 = google.visualization.arrayDataToTable(this.coinMatrix[1])
      const joined = google.visualization.data.join(dt1, dt2, 'full', [[0, 0]], [1], [1])
      console.log(joined)
      const options = {
        title: 'Coins',
        width: 800,
        legend: { position: 'bottom' }
      }

      chart.draw(joined, options)
    }
  }
}
</script>