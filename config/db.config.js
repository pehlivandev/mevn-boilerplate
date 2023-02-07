const mongoose = require('mongoose')
const logger = require('../logger/api.logger')

const connect = () => {
	const url = process.env.MONGO_CONNECTION_STRING
	logger.info(
		`process.env.MONGO_CONNECTION_STRING::: ${process.env.MONGO_CONNECTION_STRING}`
	)

	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	mongoose.connection.once('open', async () => {
		logger.info('Connected to database')
	})

	mongoose.connection.on('error', (err) => {
		logger.error('Error connecting to database: ', err)
	})
}

const disconnect = () => {
	if (!mongoose.connection) {
		return
	}

	mongoose.disconnect()

	mongoose.once('close', async () => {
		console.log("Disconnected to database")
	})
}

module.exports = {
	connect,
	disconnect
}






// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://salihpehlivan:<password>@cluster0.vs1j8dg.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });