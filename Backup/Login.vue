<template>
  <div>
    <LoginCard />
  </div>
</template>

<script>
import LoginCard from '@/components/LoginCard.vue'

export default {
  auth: false,
  name: 'LoginPage',
  components: {
    LoginCard
  }
}
</script>

<style>

</style>