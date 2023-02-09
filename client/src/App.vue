<template>
  <div class="main">
    <header>header</header>
    <div class="content">
      <div>
        <label for="name">Kelime Ekle</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="v$.name.$model"
        />
      </div>
      <div>
        <label for="description">Açıklama</label>
        <input
          type="text"
          name="description"
          id="description"
          v-model="v$.description.$model"
        />
      </div>
      <div>
        <input type="button" value="Ekle" @click="addWord()" />
      </div>
    </div>
    <footer>footer</footer>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import useVuelidate from '@vuelidate/core'

const state = reactive({
  name: '',
  description: ''
})

const rules = computed(() => {
  const localRules = {
    name: {},
    description: {}
  }

  return localRules
})

const v$ = useVuelidate(rules, state)

function addWord () {
  alert('add word')
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  padding: 10px;
  background-color: violet;
}
.content {
  flex-grow: 1;
}
footer {
  padding: 10px;
  background-color: wheat;
}
</style>
