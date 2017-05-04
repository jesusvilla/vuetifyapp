<template>
  <div class="view" id="quick-start-view">
  <section>
    <section-header>Vue CLI</section-header>
    <section-text>Vuetify has 3 pre-made Vue CLI templates, 2 being forked from <a href="https://github.com/vuejs-templates" target="_blank">official Vue.js templates</a>. They contain small modifications to help you get started with Vuetify even faster. These packages require <code>vue-cli</code>. For more information on vue-cli, visit the official <a href="https://github.com/vuejs/vue-cli" target="_blank">Github</a> repository.</section-text>
    <v-tabs class="elevation-1 mb-5" grow="grow" icons="icons">
      <v-tab-item ripple="ripple" slot="activators" href="#simple">Simple HTML
        <v-icon>accessibility</v-icon>
      </v-tab-item>
      <v-tab-item ripple="ripple" slot="activators" href="#webpack">Webpack
        <v-icon>web</v-icon>
      </v-tab-item>
      <v-tab-item ripple="ripple" slot="activators" href="#webpack-ssr">Webpack SSR
        <v-icon>cloud_circle</v-icon>
      </v-tab-item>
      <v-tab-item ripple="ripple" disabled="disabled" slot="activators" href="#nuxt">NUXT (coming soon)
        <v-icon>business</v-icon>
      </v-tab-item>
      <v-tab-content id="simple" slot="content">
        <v-card>
          <v-card-text>
            <h4>Simple HTML Quick Start</h4>
            <p>This template is intended for users who want to try out Vue.js and Vuetify.js in the most simplistic way. It contains a basic index.html with no additional functionality. This is useful for developers who want to easily preview the features of the framework.</p>
          </v-card-text>
        </v-card>
      </v-tab-content>
      <v-tab-content id="webpack" slot="content">
        <v-card>
          <v-card-text>
            <h4>Webpack Quick Start</h4>
            <p>This template is intended for users who are already familiar with Vue/Webpack. It contains a very simple webpack setup and is targetted at developers creating prototype or basic applications.</p>
          </v-card-text>
        </v-card>
      </v-tab-content>
      <v-tab-content id="webpack-ssr" slot="content">
        <v-card>
          <v-card-text>
            <h4>Webpack SSR Quick Start</h4>
            <p>This template is for advanced users looking to utilize the new Vue SSR (server-side rendering). Based off of the structure in the Vue.js 2 <a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">Hackernews</a> repository. The Vuetify.js SSR template provides next generation functionality for advanced Vue applications.</p>
          </v-card-text>
        </v-card>
      </v-tab-content>
    </v-tabs>
    <p>If you are using the <strong>Simple HTML</strong> template, you are ready to go. Open the <code>index.html</code> in any browser to get started.</p>
  </section>
</div>
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', this.meta())
    },
    preFetch () {
      return this.methods.meta()
    },
    methods: {
      meta () {
        return {
          title: 'Quick Start | Vuetify.js',
          h1: 'Quick Start',
          description: 'Get started with Vue and Vuetify in no time.',
          keywords: 'vuetify quick start, vuetify templates, server side rendering'
        }
      }
    }
  }
</script>
