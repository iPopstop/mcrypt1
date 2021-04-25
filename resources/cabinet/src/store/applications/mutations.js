import initialState from './initialState'

const mutations = {
  setKey(state, payload) {
    state.key = payload
  },
  setDecrypted(state, payload) {
    state.decrypted = payload
  },
  clear() {
    this.state.applications = initialState()
  }
}

export default mutations
