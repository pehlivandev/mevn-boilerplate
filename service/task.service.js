const taskRepository = require('../repository/task.repository')

const TaskService = {
	async getTasks() {
		return await taskRepository.getTasks()
	},

	async setTask(data) {
		return await taskRepository.setTask(data)
	},

	async updateTask(data) {
		return await taskRepository.updateTask(data)
	},

	async deleteTask(data) {
		return await taskRepository.deleteTask(data)
	}
}

module.exports = TaskService