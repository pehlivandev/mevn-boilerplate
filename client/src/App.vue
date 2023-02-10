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
          <template v-if="editingId">
            <input
              type="button"
              value="Düzenle"
              @click="editWord()"
            />
            <input
              type="button"
              value="Vazgeç"
              @click="toAddMode()"
            />
          </template>
          <input
            v-else
            type="button"
            value="Ekle"
            @click="addWord()"
          />
        </div>
      </div>
      <div class="word-list">
        <div class="word" v-for="word in words" :key="word._id">
          <b>{{ word.name }}</b> - {{ word.description }}
          <span class="edit" @click="toEditMode(word)">&#9998;</span>
          <span class="delete" @click="deleteWord(word._id)">&#10006;</span>
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
const editingId = ref('')

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

function editWord () {
  const data = {
    _id: editingId.value,
    name: state.name,
    description: state.description
  }

  wordService.editWord(data).then(response => {
    console.log('response: ', response)
    toAddMode()
  })
}

function deleteWord (id) {
  wordService.deleteWord(id).then(response => {
    console.log('response: ', response)
  })
}

function toEditMode (word) {
  editingId.value = word._id
  state.name = word.name
  state.description = word.description
}

function toAddMode () {
  editingId.value = ''
  state.name = ''
  state.description = ''
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
  .edit {
    cursor: pointer;
  }
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
