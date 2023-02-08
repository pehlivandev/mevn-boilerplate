const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const taskController = require('./controller/task.controller')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

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
