const taskService = require('../service/task.service')
const logger = require('../logger/api.logger')

const TaskController = {
	async getTasks() {
		logger.info('Controller: getTasks')
		return await taskService.getTasks()
	},

	async setTask(data) {
		logger.info('Controller: setTask')
		return await taskService.setTask(data)
	},

	async updateTask(data) {
		logger.info('Controller: updateTask')
		return await taskService.updateTask(data)
	},

	async deleteTask(data) {
		logger.info('Controller: deleteTask')
		return await taskService.deleteTask(data)
	}
}

module.exports = TaskController