<template>
  <div>
    <h1 class="ma-6">Dashboard</h1>
    <v-card>
      <v-card class="ma-5">
        <v-card-actions>
          <div>
            <DashLineChart/>
          </div>
          <div>
            <v-btn href="https://www.coinbase.com/oauth/authorize?client_id=5cc7e50cff0d976cfd64c17a90164c156ef799037a3fde66dc8622585ac3683b&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&response_type=code&scope=wallet%3Auser%3Aread">Login to Coinbase</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import DashLineChart from './DashLineChart.vue'
export default {
  name: 'DashboardCard',
  components: { DashLineChart }
}
</script>
