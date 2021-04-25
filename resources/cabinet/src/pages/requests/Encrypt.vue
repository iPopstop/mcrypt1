<script>
import FormText from "@/components/Spectrum/Form/FormText"
import {mapState} from "vuex"

export default {
  name: 'EncryptRequest',
  components: {FormText},
  data: () => ({
    createForm: {
      message: '',
      email: ''
    },
    sended: false
  }),
  computed: {
    ...mapState('applications', ['key'])
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('applications/send', this.createForm).then(() => {
        this.sended = true
      })
    }
  },
}
</script>
<template>
  <div class="requests">
    <div class="auth-content">
      <div class="card">
        <div class="row align-items-center text-center">
          <div class="col-md-12">
            <div class="card-body">
              <h3 class="mb-3 f-w-400">Новое сообщение</h3>
              <form @submit.prevent="handleSubmit">
                <form-text
                  placeholder="Текст"
                  type="textarea"
                  other="mb-3"
                  :value.sync="createForm.message"
                />
                <form-text
                  placeholder="email"
                  type="email"
                  other="mb-3"
                  :value.sync="createForm.email"
                />
                <button type="submit" class="btn btn-primary btn-block" :disabled="!createForm.message || !createForm.email">Отправить</button>
              </form>
              <template v-if="sended">
                <h3 class="text-center">Сообщение отправлено! Ключ: {{ key }}</h3>
              </template>
              <div class="d-flex justify-content-center mt-4">
                <router-link :to="{name: 'decrypt'}">Расшифровать полученное сообщение</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>