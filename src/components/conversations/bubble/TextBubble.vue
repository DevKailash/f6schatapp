<template>
    <div class="bubble-row">
        <div class="text-bubble-chat" :class="{'send-msg-reverse': isSendMessage}">
            <img src="../../../assets/user.png" alt="user" class="user-icon">
            <span class="message received-message">
                texttexttexttexttexttexttexttexttext 
            </span>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextBubble',
    components: {
    },
    mixins: [],
    props: {
    },
    data () {
        return {
        }
    },
    computed: {
        isSendMessage () {
            return true
        }
    },
    watch: {},
    mounted () {
    },
    methods: {}
    }
  </script>
  
  <style scoped>
  .bubble-row {
    display: flex;
  }
  .text-bubble-chat {
    display: flex;
    align-items: center;
    max-width: 60%;
  }
  .user-icon {
    width: 48px;
    height: 48px;
    min-width: 48px;
  }
  .message {
    width: auto;
    border-radius: 8px;
    padding: 8px;
    text-wrap: wrap;
  }
  .sender-message {
    background-color: #a2c2f0;
  }
  .received-message {
    background-color: #e1e1e1;
  }
  .send-msg-reverse {
    flex-flow: row-reverse;
  }
  </style>