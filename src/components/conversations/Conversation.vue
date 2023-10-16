<template>
    <section class="conversation-page" >
        <ConversationArea />
        <ComposeSection />
    </section>
</template>

<script>
export default {
    name: 'conversationPage',
    components: {
        ConversationArea: () => import('../conversations/conversation-area/ConversationArea.vue'),
        ComposeSection: () => import('../conversations/compose-section/ComposeSection.vue')
    },
    mixins: [],
    props: {
    },
    data () {
        return {
        }
    },
    computed: {},
    watch: {},
    mounted () {
    },
    methods: {}
}
</script>

<style scoped>
    .conversation-page {
        display: flex;
        flex-direction: column;
        height: 95vh;
        padding: 10px;
    }
</style>