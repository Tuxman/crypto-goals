<template>
  <v-card min-height="900px" min-width="700px" class="mx-auto">
    <v-card-title class="justify-center">Coins</v-card-title>
    <v-col>
      <v-card-actions class="justify-center mt-4">
        <v-form ref="form">
          <v-autocomplete
          v-model="coinSelection"
          :items="coinList"
          item-text="name"
          item-value="id"
          label="Search for coin"
          outlined
          clearable
          small-chips
          deletable-chips
          ></v-autocomplete>
          <v-text-field v-model="amountOfCoins" :rules="rules" type="number"></v-text-field>
          <v-btn
          color="success"
          @click="updateStorage(coinSelection, amountOfCoins), reset()"
          >Submit</v-btn>
        </v-form>
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
  name: 'SearchSingle',
  components: {
    // LineChart
  },
  data () {
    return {
      coinList: [],
      coinSelection: '',
      amountOfCoins: '',
      rules: [
        v => {
          if (!isNaN(parseFloat(v)) && v > 0) return true
          return 'Number has to be greater than 0.'
        }
      ]
    }
  },
  async created () {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/list')
    if (res.status === 200) {
      res.data.forEach(element => {
        this.coinList.push(element)
      })
    }
  },
  methods: {
    updateStorage (coinSelection, amountOfCoins) {
      this.$auth.$storage.setLocalStorage(coinSelection, amountOfCoins.toString())
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
