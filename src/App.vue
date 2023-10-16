<template>
  <div id="app">
    <!-- <Conversation /> -->
    <router-view />
  </div>
</template>

<script>
// import Conversation from './components/conversations/Conversation.vue'

export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
