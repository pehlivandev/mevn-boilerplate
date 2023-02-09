const wordRepository = require('../repository/word.repository')

const wordService = {
	async getWords() {
		return await wordRepository.getWords()
	},

	async setWord(data) {
		return await wordRepository.setWord(data)
	},

	async updateWord(data) {
		return await wordRepository.updateWord(data)
	},

	async deleteWord(data) {
		return await wordRepository.deleteWord(data)
	}
}

module.exports = wordService