const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const taskController = require('./controller/task.controller')

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

app.get('/api/tasks', (req, res) => {
  taskController.getTasks().then(data => res.json(data))
})

app.post('/api/task', (req, res) => {
  taskController.setTask(req.body).then(data => {
    return res.json(data)
  })
})

app.put('/api/task', (req, res) => {
  taskController.updateTask(req.body).then(data => {
    return res.json(data)
  })
})

app.delete('/api/task/:id', (req, res) => {
  taskController.deleteTask(req.params.id).then(data => {
    return res.json(data)
  })
})

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
})
