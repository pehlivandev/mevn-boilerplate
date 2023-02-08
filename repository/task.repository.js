const { connect, disconnect } = require('../config/db.config')
const { Task } = require('../model/task.model')
const logger =  require('../logger/api.logger')
const { updateTask } = require('../controller/task.controller')
const { deleteTask } = require('../service/task.service')

connect()
const TaskRepository = {
	async getTasks() {
		const tasks = await Task.find({})
		console.log('tasks::: ', tasks)
		return tasks
	},

	async setTask(data) {
		let task = {}

		try {
			task = await Task.create(data)
		} catch (err) {
			logger.error(`Error::: ${err}`)
		}

		return task
	},

	async updateTask(data) {
		let task = {}

		try {
			task = await Task.updateOne(data)
		} catch (err) {
			logger.error(`Error::: ${err}`)
		}

		return task
	},

	async deleteTask(data) {
		let task = {}

		try {
			task = await Task.deleteOne({ _id: data })
		} catch (err) {
			logger.error(`Error::: ${err}`)
		}

		return task
	}
}

module.exports = TaskRepository