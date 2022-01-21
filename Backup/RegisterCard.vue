<template>
  <v-card max-width="500px" class="mx-auto mt-4">
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :rules="passRules"
              label="Enter Password"
              prepend-icon="mdi-lock"
              :append-icon="togglePassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="togglePassword ? 'text' : 'password'"
              @click:append="() => (togglePassword = !togglePassword)"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="verify"
              :rules="[(password === verify) || 'Passwords must match']"
              label="Confirm Password"
              prepend-icon="mdi-lock"
              :append-icon="togglePassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="togglePassword ? 'text' : 'password'"
              @click:append="() => (togglePassword = !togglePassword)"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-card-actions>
              <v-btn>
                Register
              </v-btn>
            </v-card-actions>
            <v-card-text>
              {{ email }}
              {{ password }}
              {{ verify }}
            </v-card-text>
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
      verify: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => v.length > 3 || 'Password has to be greater than 3 characters'
      ],
    }
  }
}
</script>

<style>

</style>