<template>
  <div class="main">
    <header>header</header>
    <div class="content">
      <div class="word-list">
        <div class="word" v-for="word in words" :key="word._id">
          <div>
            <b>{{ word.name }}</b> - {{ word.description }}
          </div>
          <div class="buttons">
            <span
              class="edit"
              @click="toEditMode(word)">
              &#9997;
            </span>
            <span
              class="delete"
              @click="deleteWord(word._id)">
              &#10006;
            </span>
          </div>
        </div>
      </div>
    </div>
    <footer>footer</footer>
  </div>
  <div v-if="statusOfPopup" class="popup">
    <div class="popup-inside">
      <div class="close" @click="toChangePopupStatus(false)">
        &#10007;
      </div>
      <div class="create-word">
        <h3>{{ editingId ? 'Düzenle' : 'Yeni Kelime' }}</h3>
        <div>
          <label for="name">Kelime</label>
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
          </template>
          <input
            v-else
            type="button"
            value="Ekle"
            @click="addWord()"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="add-word" @click="toAddMode()">
    <div class="plus">&#10010;</div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, onBeforeMount } from 'vue'
import useVuelidate from '@vuelidate/core'
import wordService from '@/services/word.service'

const words = ref([])
const editingId = ref('')
const statusOfPopup = ref(false)

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
  toChangePopupStatus(true)

  editingId.value = word._id
  state.name = word.name
  state.description = word.description
}

function toAddMode () {
  toChangePopupStatus(true)

  editingId.value = ''
  state.name = ''
  state.description = ''
}

function toChangePopupStatus (status) {
  statusOfPopup.value = status
}

</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type=text] {
  border: 3px solid #c1c1c1;
  border-radius: 15px;
  outline: none;
  width: 100%;
  padding: 8px 16px;
  font-size: 20px;
  font-weight: 700;
}
input[type=button] {
  background-color: aquamarine;
  border: 3px solid #68f7c7;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
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
.word-list {
  margin: 20px 0;
}
.word {
  border: 3px solid #c1c1c1;
  box-shadow: 3px 4px 0 0 #e9e9e9;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 6px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .buttons {
    span {
      padding: 2px;
      font-size: 20px;
      cursor: pointer;
      &.delete {
        color: red;
      }
    }
  }
}
footer {
  padding: 10px;
  background-color: wheat;
}
.popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  .popup-inside {
    width: 400px;
    max-width: 95%;
    max-height: 95%;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    position: relative;
    border: 3px solid #c1c1c1;
    .close {
      position: absolute;
      right: -15px;
      top: -15px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid #c1c1c1;
      color: red;
      background-color: #fff;
      text-align: center;
      line-height: 24px;
      cursor: pointer;
      font-size: 22px;
    }
    .create-word {
      & > div {
        margin-bottom: 20px;
      }
      input[type=button] {
        margin-top: 30px;
      }
    }
  }
}
.add-word {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  border: 4px solid #fff;
  border-radius: 50%;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
  .plus {
    text-shadow: 2px 2px #fff;
  }
}
</style>
