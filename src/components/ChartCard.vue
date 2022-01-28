<template>
  <v-card min-height="900px" min-width="700px" class="mx-auto">
    <v-card-title class="justify-center">Coins</v-card-title>
    <v-col>
      <v-card-actions class="justify-center mt-4">
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <v-autocomplete
        v-model="coins"
        :items="coinList"
        item-text="name"
        item-value="id"
        label="Search for coins"
        outlined
        clearable
        small-chips
        deletable-chips
        multiple
        ></v-autocomplete>
      </v-card-actions>
      <v-card-actions class="justify-center mt-4">
        <v-data-table
        :headers="headers"
        :items="coinList"
        :items-per-page="10"
        ></v-data-table>
        <!-- <v-btn-toggle
        v-model="selectedDateToggle"
        mandatory
        >
          <v-btn value="1">1d</v-btn>
          <v-btn value="7">1w</v-btn>
          <v-btn value="30">1m</v-btn>
          <v-btn value="365">1y</v-btn>
        </v-btn-toggle> -->
      </v-card-actions>
      <!-- <v-card-actions class="justify-center mt-4">
        <div>
          <LineChart v-for="coin in coins" :key="coin.id" :coin-name="coin" :selected-date="selectedDateToggle" :height="500" :width="800"/>
        </div>
      </v-card-actions> -->
    </v-col>
  </v-card>
</template>

<script>
import axios from 'axios'
// import LineChart from '@/components/LineChart.vue';

export default {
  name: 'ChartCard',
  components: {
    // LineChart
  },
  data () {
    return {
      coinList: [],
      coins: [],
      selectedDateToggle: '7',
      headers: [
        {
          text: 'Rank',
          align: 'start',
          sortable: false,
          value: 'market_cap_rank'
        },
        { text: 'Name', value: 'name' },
        { text: 'Symbol', value: 'symbol' },
        { text: 'Price', value: 'current_price' },
        { text: '1hr', value: 'price_change_percentage_1h_in_currency' },
        { text: '24hr', value: 'price_change_percentage_24h_in_currency' },
        { text: '7d', value: 'price_change_percentage_7d_in_currency' }
      ]
    }
  },
  async created () {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    if (res.status === 200) {
      res.data.forEach(element => {
        element.price_change_percentage_1h_in_currency = (Math.round(element.price_change_percentage_1h_in_currency * 100) / 100) + '%'

        element.price_change_percentage_24h_in_currency = (Math.round(element.price_change_percentage_24h_in_currency * 100) / 100) + '%'

        element.price_change_percentage_7d_in_currency = (Math.round(element.price_change_percentage_7d_in_currency * 100) / 100) + '%'
        this.coinList.push(element)
      })
    }
  },
  methods: {
  }
}
</script>
