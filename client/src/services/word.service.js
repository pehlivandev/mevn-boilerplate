import api from '@/config/axios.config'

const wordService = {
	async getWords () {
		const response = await api.get('/api/tasks')
		return response.data
	},

	async setWord (data) {
		const response = await api.post('/api/task', data)
		return response.data
	}
}

export default wordService