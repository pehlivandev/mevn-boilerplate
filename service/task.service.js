const taskRepository = require('../repository/task.repository')

class TaskService {
	constructor() {}

	async getTasks() {
		return await taskRepository.getTasks()
	}
}

module.exports = new TaskService()