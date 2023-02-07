const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	name: 'string',
	description: 'string'
})

const Task = mongoose.model('tasks', taskSchema)

module.exports = { Task }
