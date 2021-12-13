<script>
/* eslint-disable vue/require-prop-types */
import { Line } from "vue-chartjs";
import axios from 'axios';

export default {
  extends: Line,
  props: {
    selectedDate: {
      type: String,
      required: true,
    },
    coinName: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      chartInterval: 'daily',
      data: {
        labels: [],
        datasets: [
          {
            label: this.coinName,
            data: [],
            backgroundColor: "rgba(20, 255, 0, 0.3)",
            borderColor: "rgba(100, 255, 0, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: "Cryptocurrency Data",
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
  mounted() {
    this.renderChart(this.data, this.options)
  },
  created() {
    if(this.selectedDate === "1") {
      this.chartInterval = 'minutely'
    } else if(this.selectedDate === "7") {
      this.chartInterval = 'hourly'
    } else {
      this.chartInterval = 'daily'
    }

      const query = axios.get(`https://api.coingecko.com/api/v3/coins/${this.coinName}/market_chart?vs_currency=usd&days=${this.selectedDate}&interval=${this.chartInterval}`)
      query.then((res) => {
        const prices = res.data.prices;
        prices.forEach(el => {
          this.data.labels.push(this.convertTimestamp(el[0]));
          this.data.datasets[0].data.push(el[1]);
        });
      })
      // eslint-disable-next-line no-console
      console.log(this.data.labels, this.data.datasets[0].data)
    },
    methods: {
      convertTimestamp(ts) {
        return new Date(ts).toISOString()
      }
    }
  }
</script>