const { connect, disconnect } = require('../config/db.config')
const { Task } = require('../model/task.model')
const logger =  require('../logger/api.logger')

connect()
const TaskRepository = {
	async getTasks() {
		const tasks = await Task.find({})
		console.log('tasks::: ', tasks)
		return tasks
	}
}

module.exports = TaskRepository