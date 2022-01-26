<template>
  <div>
    <h1 class="ma-6">Dashboard</h1>
    <v-card>
      <v-card class="ma-5">
        <v-card-actions>
          <div>
            <DashLineChart/>
          </div>
        </v-card-actions>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import DashLineChart from "./DashLineChart.vue";
export default {
    components: { DashLineChart }
}
</script>