import API from '@/api'

const actions = {
  decrypt({ commit }, payload) {
    return new Promise((resolve, reject) => {
      API.applications.decrypt(payload).then((response) => {
        commit('setDecrypted', response.data.info)
        resolve(response)
      }).catch(err => reject(err))
    })
  },
  send({ commit }, payload) {
    return new Promise((resolve, reject) => {
      API.applications.send(payload).then((response) => {
        commit('setKey', response.data.info)
        resolve(response)
      }).catch(err => reject(err))
    })
  },
}

export default actions
