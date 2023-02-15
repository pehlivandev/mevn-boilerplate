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
          <div class="login-with-google">
            <GoogleLogin
              :callback="loginWithGoogle"
              :buttonConfig="{ type: 'icon', size: 'medium', shape: 'pill' }"
            />
            <div>ile giriş yap</div>
          </div>
        </div>
      </div>
      <div class="form-link">Üye değil misin? 
        <router-link to="/register">Kayıt ol</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { decodeCredential } from 'vue3-google-login'

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

function loginWithGoogle (response) {
  // This callback will be triggered when user click on the One Tap prompt
  // This callback will be also triggered when user click on login button 
  // and selects or login to his Google account from the popup
  const userData = decodeCredential(response.credential)
  console.log("Handle the user data", userData)
}
</script>

<style lang="scss">
.login-with-google {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 0 5px;
  }
}
</style>
