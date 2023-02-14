<template>
  <div class="content form-content">
    <div class="login">
      <h1>Giriş Yap</h1>
      <div class="form">
        <div>
          <label for="email">E posta</label>
          <input
            type="text"
            name="email"
            id="email"
            v-model="v$.email.$model"
          />
        </div>
        <div>
          <label for="password">Parola</label>
          <input
            type="text"
            name="password"
            id="password"
            v-model="v$.password.$model"
          />
        </div>
        <div>
          <input
            type="button"
            value="Giriş Yap"
            @click="login()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import useVuelidate from '@vuelidate/core'

const state = reactive({
  email: '',
  password: ''
})

const rules = computed(() => {
  const localRules = {
    email: {},
    password: {}
  }

  return localRules
})

const v$ = useVuelidate(rules, state)

function login () {
  console.log('login')
}
</script>
