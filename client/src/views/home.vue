<template>
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
<div v-if="statusOfPopup" class="popup">
	<div class="popup-inside">
		<div class="close" @click="toChangePopupStatus(false)">
			&#10007;
		</div>
		<div class="create-word">
			<h3>{{ editingId ? 'Düzenle' : 'Yeni Kelime' }}</h3>
			<div class="form">
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
					<input
						v-if="editingId"
						type="button"
						value="Düzenle"
						@click="editWord()"
					/>
					<input
						v-else
						type="button"
						value="Ekle"
						@click="addWord()"
					/>
				</div>
			</div>
			<div class="info">form info</div>
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
    id: editingId.value,
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

