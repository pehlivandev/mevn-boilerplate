import api from '@/config/axios.config'

const wordService = {
	async getWords () {
		console.log('get words')
	},

	async setWord (data) {
		const response = await api.post('/api/task', data)
		return response
	}
}

export default wordService