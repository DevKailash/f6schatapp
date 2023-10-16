// index.js
// import Vue from 'vue'
import { currentUser, conversation } from '../api-mock/mockapi'
// Vue.http.interceptors.push(request => (response) => {
//   // Error handling for API
//   if (response.status === 401 ) {
//     console.log(request)
//   }
// })

let newMessage = {
  id: Date.now(),
  from: '',
  message: '',
  date: new Date().toISOString(),
}
const mockAPI = {
  getConversation() {
    return new Promise((resolve) => {
      resolve(conversation)
    })
  },

  getCurrentUser() {
    return new Promise((resolve) => {
      resolve(currentUser)
    })
  },

  simulateReply(text) {
    return new Promise((resolve) => {
      setTimeout(() => {
        newMessage.from = text.sender
        newMessage.text = text.message
        resolve(newMessage)
      }, 500)
    })
  }
}

export default mockAPI
