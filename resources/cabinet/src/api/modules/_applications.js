import api from '@/api/api.js'

const send = (data) => api({
  method: 'post',
  url: 'messages/send',
  data
})

const decrypt = (data) => api({
  method: 'post',
  url: 'messages/decrypt',
  data
})

export {
  send,
  decrypt
}
