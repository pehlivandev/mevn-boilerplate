const { connect, disconnect } = require('../config/db.config')
const { Task } = require('../model/task.model')
const logger =  require('../logger/api.logger')

class TaskRepository {
	constructor() {
		connect()
	}

	async getTasks() {
		const tasks = await Task.find({})
		console.log('tasks::: ', tasks)
		return tasks
	}
}

module.exports = new TaskRepository()