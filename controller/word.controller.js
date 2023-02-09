const wordService = require('../service/word.service')
const logger = require('../logger/api.logger')

const wordController = {
	async getWords() {
		logger.info('Controller: getWords')
		return await wordService.getWords()
	},

	async setWord(data) {
		logger.info('Controller: setWord')
		return await wordService.setWord(data)
	},

	async updateWord(data) {
		logger.info('Controller: updateWord')
		return await wordService.updateWord(data)
	},

	async deleteWord(data) {
		logger.info('Controller: deleteWord')
		return await wordService.deleteWord(data)
	}
}

module.exports = wordController