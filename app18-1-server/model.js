const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db2', {
	useNewUrlParser: true, useUnifiedTopology: true
}).catch(err => console.log(err))

let productSchema = new mongoose.Schema({
	name: String,
	price: Number
})
let Product = mongoose.model('Product', productSchema)
module.exports = Product
