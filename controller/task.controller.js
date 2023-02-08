const taskService = require('../service/task.service')
const logger = require('../logger/api.logger')

const TaskController = {
	async getTasks() {
		logger.info('Controller: getTasks')
		return await taskService.getTasks()
	}
}

module.exports = TaskController