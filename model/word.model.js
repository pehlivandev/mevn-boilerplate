const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
	name: 'string',
	description: 'string'
})

const Word = mongoose.model('words', wordSchema)

module.exports = { Word }
