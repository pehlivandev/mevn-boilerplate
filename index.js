const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const wordController = require('./controller/word.controller')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.use(function(req, res, next) {
	const corsWhitelist = [
		'http://localhost:8080',
		'http://localhost:8081'
];

if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
	res.header(
		'Access-Control-Allow-Origin',
		req.headers.origin
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id, email'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT');
	res.header('Access-Control-Expose-Headers', 'x-access-token, x-refresh-token');
}
	next();
});

app.get('/', (req, res) => {
  res.send(`<h1>Hello world</h1>`)
})

app.get('/api/words', (req, res) => {
  wordController.getWords().then(data => res.json(data))
})

app.post('/api/word', (req, res) => {
  wordController.setWord(req.body).then(data => {
    return res.json(data)
  })
})

app.put('/api/word', (req, res) => {
  wordController.updateWord(req.body).then(data => {
    return res.json(data)
  })
})

app.delete('/api/word/:id', (req, res) => {
  wordController.deleteWord(req.params.id).then(data => {
    return res.json(data)
  })
})

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
})
