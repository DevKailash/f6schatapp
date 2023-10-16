import Vuex from 'vuex'
import mockAPI from '../api/index'

const state = {
  conversation: [],
  currentUser: []
}

const mutations = {
  SET_CONVERSATION(state, conversation) {
    state.conversation = conversation
  },
  SET_CURRENTUSER(state, currentUser) {
    state.currentUser = currentUser
  },
  ADD_REPLY(state, newMessage) {
    state.currentUser.push(newMessage)
  }
}

const actions = {
  async initializeChat({ commit }) {
    const conversation = await mockAPI.getConversation()
    commit('SET_CONVERSATION', conversation)

    const currentUser = await mockAPI.getCurrentUser()
    commit('SET_CURRENTUSER', currentUser)
  },

  async sendReply({ commit }, text) {
    const newMessage = await mockAPI.simulateReply(text)
    commit('ADD_REPLY', newMessage)
  }
}

const getters = {
    getConversation (state) {
        return state.conversation
    },
    getCurrentUser (state) {
        return state.currentUser
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store