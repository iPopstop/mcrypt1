<script>
import FormText from "@/components/Spectrum/Form/FormText"
import {mapState} from "vuex"

export default {
  name: 'DecryptRequest',
  components: {FormText},
  data: () => ({
    decryptForm: {
      message: '',
      key: '',
    }
  }),
  computed: {
    ...mapState('applications', ['decrypted'])
  },
  methods: {
    handleSubmit() {
      this.decrypted = ''
      this.$store.dispatch('applications/decrypt', this.decryptForm)
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
              <h3 class="mb-3 f-w-400">Расшифровать сообщение</h3>
              <form @submit.prevent="handleSubmit">
                <form-text
                  placeholder="Сообщение"
                  type="textarea"
                  other="mb-3"
                  :value.sync="decryptForm.message"
                />
                <form-text
                  placeholder="Ключ"
                  type="textarea"
                  other="mb-3"
                  :value.sync="decryptForm.key"
                />
                <button type="submit" class="btn btn-primary btn-block" :disabled="!decryptForm.key || !decryptForm.message">Расшифровать</button>
              </form>
              <div class="card bg-light my-2">
                <div class="card-header">
                  Результат
                </div>
                <div class="card-body">
                  {{ decrypted }}
                </div>
              </div>
              <div class="d-flex justify-content-center mt-4">
                <router-link :to="{name: 'main'}">Отправить новое сообщение</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>