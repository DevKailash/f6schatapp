import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import store from './store'
import router from '@/router'
import { ConversationArea } from "./components/conversations/conversation-area/ConversationArea.vue"
import ConversationPage from './components/conversations/Conversation.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component('conversation-area', ConversationArea);
Vue.component('conversation-page', ConversationPage);
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
