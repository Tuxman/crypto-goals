<template>
  <div>
      <multiselect 
      v-model="coinID" 
      label="name" 
      :options="coinsList"
      :multiple="true"
      ></multiselect>
      <button v-on:click="clearCoins, getCoinByID(coinID)">Click</button>
      <ul id="coin-prices">
          <li v-for="coin in coinPricesToDisplay" :key="coin.name"> {{ coin.name }} ${{ coin.market_data.current_price.usd }} </li>
      </ul>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import CryptoService from '@/services/CryptoService.js'
export default {
    components: { Multiselect },
    data () {
        return {
            value: null,
            options: ['list', 'of', 'options'],
            coinsList: [],
            coinID: [],
            coinPricesToDisplay: [],
        }
    },
    created() {
            CryptoService.getCoins().then((response => {
                console.log(response.data)
                response.data.forEach(element => {
                    this.coinsList.push(element)
                })
                }))
    },
    methods: {
        getCoinByID(coinIDWanted) {
            coinIDWanted.forEach(element => {
                CryptoService.getCoinByID(element.id).then((response => {
                    this.coinPricesToDisplay.push(response.data)
                }))
            })
            // console.log(coinIDWanted[0].id)
        },
        clearCoins() {
            this.coinID = [];
            this.coinPricesToDisplay = [];
        },
        log(id) {
            console.log(id)
        }
    },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

</style>