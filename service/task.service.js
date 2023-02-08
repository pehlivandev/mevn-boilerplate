const taskRepository = require('../repository/task.repository')

const TaskService = {
	async getTasks() {
		return await taskRepository.getTasks()
	}
}

module.exports = TaskService