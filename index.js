const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()
require('colors')

require('./models/userSchema')
require('./services/passport')

const authRoutes = require('./routes/authRoutes')
const apiRoutes = require('./routes/apiRoutes')
const keys = require('./config/keys')


const options = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true
}

if (process.env.NODE_ENV !== 'test') {
	mongoose.connect('mongodb://localhost/pop-cart-dev', options)
} else {
	mongoose.connect(keys.mongoURI, options)
}

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', apiRoutes)
app.use('/auth', authRoutes)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build/index.html'))
	})
} 

app.get('/', (req, res) => res.send({ success: true }))

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
	console.log(`********** LISTENING ON PORT ${PORT} **********`.bgRed)
)

module.exports = app
