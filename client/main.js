import Vue from 'vue'
import '../imports/ui/plugins'
import { VueMeteor } from 'vue-meteor-tracker'
import App from '../imports/ui/App.vue'

Meteor.startup(() => {
  Vue.use(VueMeteor)
  new Vue({
    el: '#app',
    render: h => h(App),
  })
})
