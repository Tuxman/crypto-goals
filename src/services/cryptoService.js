import axios from 'axios'

export default {
    getCoins() {
        return axios.get("https://api.coingecko.com/api/v3/coins/list?include_platform=false")
    },
    getCoinByID(coinID) {
        return axios.get(`https://api.coingecko.com/api/v3/coins/${coinID}`)
    }
}