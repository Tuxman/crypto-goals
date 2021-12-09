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
        <GChart
        type="LineChart"
        :data="chartData"
        :options="chartOptions"
        />
      </v-card-actions>
    </v-col>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      btcRaw: new Map(),
      ethRaw: new Map(),
      btc: new Map(),
      eth: new Map(),
      chartData: [
        ['Date', 'Bitcoin']
      ],
      chartOptions: {
        title: 'Coins',
        width: 800,
        legend: { position: 'bottom' }
      },
      chartSelectedDate: 1,
      chartInterval: '',
    }
  },
  methods: {

    onChartReady(chart, google) {

    },

    async btnChartSelectedDateBtc() {
      this.btc = new Map()
      this.chartData = [['Date', 'Bitcoin']]

      if(this.chartSelectedDate === '1') {
        this.chartInterval = 'minutely'
      } else if (this.chartSelectedDate === '7') {
        this.chartInterval = 'hourly'
      } else if (this.chartSelectedDate === '30'|| this.chartSelectedDate === '365') {
        this.chartInterval = 'daily'
      } 

      const reqBtc = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${this.chartSelectedDate}&interval=${this.chartInterval}`)
      const reqEth = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${this.chartSelectedDate}&interval=${this.chartInterval}`)

      axios.all([reqBtc, reqEth]).then(axios.spread((...responses) => {
        const resBtc = responses[0].data.prices
        // eslint-disable-next-line no-unused-vars
        const resEth = responses[1].data.prices

        this.chartData.push(...resBtc)
        // eslint-disable-next-line no-console
        console.log(this.chartData)

        // if(resBtc.status === 200) {
        //   this.btcRaw.set('Bitcoin', resBtc.data.prices)
        //   const tempDateBtc = resBtc.data.prices.map((el) => {
        //     el[0] = new Date(el[0]).toISOString()
        //     return el
        //     })
        //     this.chartData[0].push('Bitcoin $')
        //     this.chartData.push(...tempDateBtc)
        // }
        // if(resEth.status === 200) {
        //   this.ethRaw.set('Ethereum', resEth.data.prices)
        //   const tempDateEth = resEth.data.prices.map((el) => {
        //     el[0] = new Date(el[0]).toISOString()
        //     return el
        //     })
        //     this.chartData[0].push('Ethereum $')
        //     tempDateEth.array.forEach(element => {
        //       let matchingDate = -1 
        //       for (let index = 0; index < this.chartData.length; index++) {
        //         const el = this.chartData[index];
        //         if(element[0] === el[0]) {
        //           matchingDate = index
        //         }
        //       }
        //       if(matchingDate !== -1) {
        //         this.chartData[matchingDate].push(element[1])
        //       } else {
        //         this.chartData.push(element)
        //       }
        //     });
        // }
      })).catch(errors => {
        // eslint-disable-next-line no-console
        console.log(errors)
      })

      // const res = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${this.chartSelectedDate}&interval=${this.chartInterval}`)
      // if(res.status === 200) {
      //   this.coins.set('bitcoin', res.data.prices)
      //   const tempDate = res.data.prices.map((el) => {
      //     el[0] = new Date(el[0]).toISOString()
      //     return el
      //   })
      //   this.chartData.push( ...tempDate)
      // }
    },
    // async btnChartSelectedDateEth() {
    //   this.coins = new Map()
    //   this.chartData = [['Date', 'Bitcoin $']]

    //   const res = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${this.chartSelectedDate}&interval=${this.chartInterval}`)
    //   if(res.status === 200) {
    //     this.coins.set('bitcoin', res.data.prices)
    //     const tempDate = res.data.prices.map((el) => {
    //       el[0] = new Date(el[0]).toISOString()
    //       return el
    //     })
    //     this.chartData.push( ...tempDate)
    //   }
    // }
  }
}
</script>

<style>

</style>