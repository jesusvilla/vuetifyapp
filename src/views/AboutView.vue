<template>

<div class="view" id="about-view">
  <section-def>
    <dt slot="title">About</dt>
    <dd slot="desc">
      <p>Vuetify.js is a semantic component framework for Vue.js 2. It aims to provide clean, semantic and reusable components that make building your application a breeze. Vuetify.js uses Google's <strong><a href="https://material.io/" target="_blank">Material Design</a></strong> design pattern, taking cues from other popular frameworks such as <a href="http://materializecss.com/" target="_blank">Materialize.css</a>, <a href="https://getmdl.io/" target="_blank">Material Design Lite</a>, <a href="http://semantic-ui.com/" target="_blank">Semantic UI</a> and <a href="https://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a>.</p>
      <div class="text-xs-center">
        <v-btn class="cta" large="large" primary="primary" router="router" href="/quick-start">Get Started Now
          <v-icon class="hidden-sm-and-down" right="right">fast_forward</v-icon>
        </v-btn>
      </div>
    </dd>
  </section-def>
  <section><img src="~public/doc-images/featured.png" width="100%" alt="featured"/>
    <section-header>Features</section-header>
    <v-list three-line="three-line">
      <v-container fluid="fluid">
        <v-row row="row" wrap="wrap">
          <v-col xs12="xs12" lg6="lg6">
            <v-list-item class="py-1">
              <v-list-tile tag="div">
                <v-list-tile-avatar>
                  <v-icon class="primary white--text">widgets</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Vue Material Components</v-list-tile-title>
                  <v-list-tile-sub-title>The Vuetify.js core is designed to provide a variety of reusable, plug and play components.</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </v-col>
          <v-col xs12="xs12" lg6="lg6">
            <v-list-item class="py-1">
              <v-list-tile tag="div">
                <v-list-tile-avatar>
                  <v-icon class="primary white--text">extension</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Vue Semantic Components</v-list-tile-title>
                  <v-list-tile-sub-title>Utilize the power of Vue.js 2 functional components with easy markup.</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </v-col>
          <v-col xs12="xs12" lg6="lg6">
            <v-list-item class="py-1">
              <v-list-tile tag="div">
                <v-list-tile-avatar>
                  <v-icon class="primary white--text">view_quilt</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Prototyping Made Easy</v-list-tile-title>
                  <v-list-tile-sub-title>Kickstart your UI mockup easy to use layouts</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </v-col>
          <v-col xs12="xs12" lg6="lg6">
            <v-list-item class="py-1">
              <v-list-tile tag="div">
                <v-list-tile-avatar>
                  <v-icon class="primary white--text">phone_android</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Made for Mobile</v-list-tile-title>
                  <v-list-tile-sub-title>Applications easily transfer from different orientations and screen sizes.</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </v-col>
          <v-col xs12="xs12" lg6="lg6">
            <v-list-item class="py-1">
              <v-list-tile tag="div">
                <v-list-tile-avatar>
                  <v-icon class="primary white--text">add_to_queue</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Premade Vue CLI Templates</v-list-tile-title>
                  <v-list-tile-sub-title>Vuetify.js comes with 3 Vue CLI templates, pre-configured with Vuetify, ready to go.</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </v-col>
          <v-col xs12="xs12" lg6="lg6">
            <v-list-item class="py-1">
              <v-list-tile tag="div">
                <v-list-tile-avatar>
                  <v-icon class="primary white--text">open_in_browser</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Built with Vue.js Server Side Rendering</v-list-tile-title>
                  <v-list-tile-sub-title>Vuetify.js is ready from installation for SSR based applications and PWA's.</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>
    </v-list>
  </section>
  <section>
    <h6>Sponsors</h6>
    <section-text>Vuetify.js is proudly sponsored by:</section-text>
    <v-container fluid="fluid">
      <v-row row="row">
        <v-col xs12="xs12"><a href="https://www.browserstack.com" target="_blank"><img src="~public/doc-images/browser-stack.svg" height="35" alt="browser-stack"/></a></v-col>
      </v-row>
    </v-container>
  </section>
  <section>
    <whats-next route="/quick-start" text="Quick Start">Select from 3 premade Vuetify vue-cli templates. These packages are based off of the official releases, pre-configured for the <strong>Vuetify.js</strong> package.</whats-next>
  </section>
</div>
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', this.meta())
    },
    preFetch (store) {
      return this.methods.meta()
    },
    methods: {
      meta () {
        return {
          title: 'Vue.js 2 Component Framework | Vuetify.js',
          h1: 'Vuetify.js',
          description: 'Vuetify.js is a reusable semantic component framework for Vue.js 2. It aims to provide clean, semantic and reusable components.',
          keywords: 'vue, vue 2, vue js, vue.js, material design, vue components, material design components, vuetify, vuetify.js'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #about-view
    .cta
      font-size: 18px
      padding: 2rem 4rem
      margin: 50px auto 40px
</style>
