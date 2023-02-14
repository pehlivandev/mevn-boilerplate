const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	}
})

const Word = mongoose.model('words', wordSchema)

module.exports = { Word }
