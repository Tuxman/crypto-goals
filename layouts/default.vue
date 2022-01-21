<template>
  <v-app dark>
    <v-navigation-drawer
      permanent
      expand-on-hover
      mini-variant
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          link
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <v-list-item-title v-text="item.title" />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn @click="logout">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn class="mr-1" @click="login">Login</v-btn>
        <v-btn @click="login">Register</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  auth: false,
  data () {
    return {
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'Portfolio',
          to: '/Portfolio'
        },
      ],
      title: 'Crypto Goals Tracker'
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('auth0')
    },
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
