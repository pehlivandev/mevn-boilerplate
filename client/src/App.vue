<template>
  <div class="main">
    <header>header</header>
    <div class="content">
      <div class="create-word">
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
      <div class="word-list">
        <div class="word" v-for="word in words" :key="word._id">
          <b>{{ word.name }}</b> - {{ word.description }} 
          <span class="delete" @click="deleteWord()">&#10006;</span>
        </div>
      </div>
    </div>
    <footer>footer</footer>
  </div>
</template>

<script setup>
import { computed, reactive, ref, onBeforeMount } from 'vue'
import useVuelidate from '@vuelidate/core'
import wordService from '@/services/word.service'

const words = ref([])

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

onBeforeMount(() => {
  wordService.getWords().then(response => {
    console.log('all words: ', response)
    words.value = response
  })
})

function addWord () {
  wordService.setWord(state).then(response => {
    console.log('response: ', response)
  })
}

function deleteWord () {
  alert('delete word')
}
</script>

<style lang="scss">
label {
  display: block;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  width: 640px;
  margin: auto;
}
.word {
  .delete {
    color: red;
    cursor: pointer;
  }
}
footer {
  padding: 10px;
  background-color: wheat;
}
</style>
