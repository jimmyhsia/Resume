import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'
import firebase from "firebase";
var config = {
    apiKey: "AIzaSyAgIhi02NVhB53MUWTwBIrF_PnIdDgorJU",
    authDomain: "resume-df0fa.firebaseapp.com",
    databaseURL: "https://resume-df0fa.firebaseio.com",
    projectId: "resume-df0fa",
    storageBucket: "resume-df0fa.appspot.com",
    messagingSenderId: "462385505050"
};
firebase.initializeApp(config);

dom.watch();
library.add(faDatabase,faGooglePlus,faLaptopCode,faChartLine,faJsSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component(VeLine.name, VeLine);
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
