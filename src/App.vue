<template>
  <v-app left-fixed-sidebar top-fixed-toolbar footer>
  <main-nav v-bind:title="title"></main-nav>
  <main>
    <main-side v-model="sidebar"></main-side>
    <v-content>
      <v-container fluid="fluid">
        <transition name="slide" mode="out-in">
          <router-view @view="meta"></router-view>
        </transition>
      </v-container>
    </v-content>
  </main>
  <!--<main-footer></main-footer>-->
</v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Nuevo'
    }
  },
  computed: {
    isHome () {
      return this.$route.path === '/'
    },
    sidebar () {
      return this.$store.state.sidebar
    }
  },
  methods: {
    meta (obj) {
      this.title = obj.h1
      this.$store.commit('vuetify/TITLE', obj.title)
      this.$store.commit('vuetify/DESCRIPTION', obj.description)
      this.$store.commit('vuetify/KEYWORDS', obj.keywords)
    }
  }
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
</style>
