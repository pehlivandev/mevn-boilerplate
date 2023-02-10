import api from '@/config/axios.config'

const wordService = {
	async getWords () {
		const response = await api.get('/api/words')
		return response.data
	},

	async setWord (data) {
		const response = await api.post('/api/word', data)
		return response.data
	},

	async editWord (data) {
		const response = await api.put('/api/word', data)
		return response.data
	},

	async deleteWord (data) {
		const response = await api.delete(`/api/word/${data}`)
		return response.data
	}
}

export default wordService