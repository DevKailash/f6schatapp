<template>
    <div class="conversation-body">
        <TextBubble />
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ConversationArea',
    components: {
      TextBubble: () => import('../bubble/TextBubble.vue')
    },
    mixins: [],
    props: {
    },
    data () {
        return {
        }
    },
    computed: {
      ...mapGetters(['getConversation'])
    },
    watch: {},
    mounted () {
    },
    methods: {
      ...mapActions(),
    }
    }
  </script>
  
  <style scoped>
    .conversation-body {
      flex: 1;
      max-height: calc(100% - 50px);
      overflow-y: auto;
      padding: 10px;
      border: 2px solid #5b5757;
    }
  </style>
  