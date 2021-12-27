const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const Product = require('./model')

//Product.collection.drop()

app.get('/api/test', (request, response) => {
	response.send('Hello, สวัสดีค่ะ')
})

app.get('/api/indicator', (request, response) => {
	setTimeout(() => {
		response.send('Hello, สวัสดีค่ะ')
	}, 5000)
})

//ใช้ all() เพื่อให้รองรับการทดสอบได้ทั้ง POST และ GET 
app.all('/api/component-data', (request, response) => {
	let login = request.body.login || ''
	let password = request.body.password || ''
	let save = request.body.save || false
	/*
	let login = request.query.login || ''
	let password = request.query.password || ''
	let save = request.query.save || false
	*/

	let text = `login: ${login}, password: ${password}, save: ${save}`
	response.send(text)
})

app.post('/api/create-data', (request, response) => {
	Product.find().exec((err, docs) => {
		if (docs.length > 0) {
			response.send('เพิ่มข้อมูลแล้ว')
		} else {
			let docs = [
				{ name: 'JavaScript', price: 1000 },
				{ name: 'ECMAScript', price: 1500 },
				{ name: 'React', price: 850 },
				{ name: 'Node.js', price: 1200 },
				{ name: 'Express.js', price: 750 },
				{ name: 'Angular', price: 300 },
				{ name: 'React Native', price: 2000 },
				{ name: 'Vue.js', price: 200 },
				{ name: 'Expo', price: 150 },
				{ name: 'MongoDB', price: 600 },
			]

			Product.insertMany(docs, err => {
				if (!err) {
					response.send('เพิ่มข้อมูลแล้ว')
				} else {
					response.send('Error: ' + err)
				}
			})
		}
	})
})

app.get('/api/read-data', (request, response) => {
	Product.find().exec((err, docs) => {
		response.json(docs)
	})
})

app.listen(port, () => {
	console.log('Server listening on port ' + port)
})
