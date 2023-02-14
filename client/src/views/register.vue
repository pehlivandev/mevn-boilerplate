<template>
  <div class="content form-content">
    <div class="register">
      <h1>Kayıt Ol</h1>
      <div class="form">
        <div>
          <label for="name">İsim</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="v$.name.$model"
          />
        </div>
        <div>
          <label for="email">Email</label>
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
          <label for="password2">Parola (Tekrar)</label>
          <input
            type="text"
            name="password2"
            id="password2"
            v-model="v$.password2.$model"
          />
        </div>
        <div>
          <input
            type="button"
            value="Kayıt Ol"
            @click="register()"
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
  name: '',
  email: '',
  password: '',
  password2: '',
})

const rules = computed(() => {
  const localRules = {
    name: {},
    email: {},
    password: {},
    password2: {}
  }

  return localRules
})

const v$ = useVuelidate(rules, state)

function register () {
  console.log('register')
}
</script>
