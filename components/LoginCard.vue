<template>
  <v-card max-width="500px" class="mx-auto mt-4">
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              label="E-mail"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              label="Enter Password"
              prepend-icon="mdi-lock"
              :append-icon="togglePassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="togglePassword ? 'text' : 'password'"
              @click:append="() => (togglePassword = !togglePassword)"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-card-actions>
              <v-btn>
                Login
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'RegisterCard',
  data() {
    return {
      togglePassword: '',
      email: '',
      password: '',
    }
  }
}
</script>

<style>

</style>