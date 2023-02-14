const { connect } = require('../config/db.config')
const { Word } = require('../model/word.model')
const logger =  require('../logger/api.logger')

connect()

const wordRepository = {
	async getWords() {
		const words = await Word.find({})
		// console.log('words::: ', words)
		return words
	},

	async setWord(data) {
		let word = {}

		try {
			word = await Word.create(data)
		} catch (err) {
			logger.error(`Error::: ${err}`)
		}

		return word
	},

	async updateWord(data) {
		let word = {}

		try {
			word = await Word.updateOne({ _id: data.id }, data)
		} catch (err) {
			logger.error(`Error::: ${err}`)
		}

		return word
	},

	async deleteWord(data) {
		let word = {}

		try {
			word = await Word.deleteOne({ _id: data })
		} catch (err) {
			logger.error(`Error::: ${err}`)
		}

		return word
	}
}

module.exports = wordRepository