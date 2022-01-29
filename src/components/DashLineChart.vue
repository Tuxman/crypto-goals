<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'DashLineChart',
  extends: Line,
  // props: {
  //   selectedDate: {
  //     type: String,
  //     default: '7',
  //     required: true
  //   },
  //   coinName: {
  //     type: String,
  //     required: true
  //   }
  // },
  data () {
    return {
      chartInterval: 'daily',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
          'January'
        ],
        datasets: [
          {
            label: 'Assets',
            data: [
              '0',
              '69',
              '180',
              '286',
              '449',
              '823',
              '1045',
              '1896',
              '4270',
              '8766',
              '23588',
              '85628',
              '148963'
            ],
            backgroundColor: 'rgba(20, 255, 0, 0.3)',
            borderColor: 'rgba(100, 255, 0, 1)',
            borderWidth: 2,
            pointRadius: 1,
            pointHoverRadius: 1
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Net Worth',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          x: {
            gridLines: {
              display: true
            },
            title: {
              text: 'Date',
              display: true
            }
          },
          y: {
            gridLines: {
              display: true
            },
            title: {
              text: 'Value',
              display: true
            }
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
