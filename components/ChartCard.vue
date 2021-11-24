<template>
  <v-container>
    <v-card>
        <v-autocomplete v-model="coin" 
        :items="coinList"
        item-text="name"
        item-value="id"
        label="Select"
        auto-select-first
        clearable
        deletable-chips
        multiple
        >
          <!-- <option v-for="coins in coinList" :key="coins.name" :value="coins.id">{{ coins.name }}</option> -->
        </v-autocomplete>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      coinList: [],
      coin: '',
    }
  },
  async created() {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=false')
    if(res.status === 200) {
      res.data.forEach(element => {
        this.coinList.push(element)
      })
    }
    // eslint-disable-next-line no-console
    console.log(this.coinList)
  },
  methods: {
  }
}
</script>

<style>

</style>