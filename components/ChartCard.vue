<template>
  <v-card min-height="900px" min-width="700px" class="mx-auto">
    <v-card-title class="justify-center">Coins</v-card-title>
    <v-col>
      <v-card-actions class="justify-center mt-4">
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
        <v-btn-toggle
        v-model="selectedDateToggle"
        mandatory
        >
          <v-btn value="1">1d</v-btn>
          <v-btn value="7">1w</v-btn>
          <v-btn value="30">1m</v-btn>
          <v-btn value="365">1y</v-btn>
        </v-btn-toggle>
      </v-card-actions>
      <v-card-actions class="justify-center mt-4">
        <div>
          <LineChart v-for="coin in coins" :key="coin.id" :coin-name="coin" :selected-date="selectedDateToggle" :height="500" :width="800"/>
        </div>
      </v-card-actions>
    </v-col>
  </v-card>
</template>

<script>
import axios from 'axios';
import LineChart from '@/components/LineChart.vue';

export default {
  components: {
    LineChart
  },
  data () {
    return {
      coinList: [],
      coins: ['bitcoin'],
      selectedDateToggle: '7',
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
}
</script>