<script>
/* eslint-disable vue/require-prop-types */
import { Line } from "vue-chartjs";
import axios from 'axios';

export default {
  extends: Line,
  props: ['data', 'options'],
  data () {
  return {
    coinList: [],
    coins: ['bitcoin', ],
    lineChartData: {
      labels: [],
      datasets: [
        {
          label: "Cryptocurrency",
          data: [],
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
              max: 20,
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
    }
  },
    async created() {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/list')
    if(res.status === 200) {
      res.data.forEach(element => {
        this.coinList.push(element)
      })
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  },
  methods: {
    async coinQueries(coins) {
      const queries = coins.map(coin => axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${this.chartSelectedDate}&interval=${this.chartInterval}`))
      await axios.all(queries).then(axios.spread((...responses) => {
        const prices = responses.map(res =>  res.data.prices)
        this.coinMatrix = prices.map((p, i) => ['Date', coins[i]].concat(p))
      }))
    }
  }
}
</script>