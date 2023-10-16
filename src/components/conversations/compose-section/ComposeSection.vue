<template>
    <div class="compose">
        <textarea :ref="sendMessageRef" name="message" rows="1" cols="33" v-model="message" @keydown.enter="addReply" @input="resizeTextarea"></textarea>
        <button class="sendButton" @click="sendMessage">
        <img src="../../../assets/paper-plane.png" alt="send">
        </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ComposeSection',
    components: {
    },
    mixins: [],
    props: {
    },
    data () {
        return {
            message: '',
        }
    },
    computed: {},
    watch: {},
    mounted () {
    },
    methods: {
        sendMessage () {
            if (this.message.trim() === '') return
        }
    }
    }
  </script>
  
  <style scoped>
  .compose {
    padding: 8px 0px;
    min-height: 50px;
    display: flex;
  }
  textarea {
    flex: 1;
    border: 2px solid #5b5757;
  }
  .sendButton {
    width: 60px;
    margin-left: 12px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>