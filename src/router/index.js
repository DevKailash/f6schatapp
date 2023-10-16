import Vue from 'vue'
import Router from 'vue-router'
import conversationPage from "@/components/conversations/Conversation.vue";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/*',
      name: 'conversationPage',
      component: conversationPage
    }
  ],
  mode: 'history'
})

export default router
