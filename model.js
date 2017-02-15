"use strict"

const fs = require('fs')

export default class Model {
	// constructor(file) {
	// 	this.file = file
	// }
	static loadDataJSON(file) {
		// baca file
		console.log(file)
		return JSON.parse(fs.readFileSync(file, 'utf-8'))
	}
}
 