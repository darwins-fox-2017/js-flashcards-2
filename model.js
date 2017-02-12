"use strict"

const fs = require('fs')

export default class Model {
	static loadDataJSON() {
		// baca file
		return JSON.parse(fs.readFileSync('social.json', 'utf-8'))
	}
}
