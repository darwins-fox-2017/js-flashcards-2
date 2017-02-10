"use strict"

const fs = require('fs')

module.exports = class Model {
    constructor(answer) {
        this.answer = answer
    }
    getData() {
        return JSON.parse(fs.readFileSync("social.json", "utf-8"))
    }
}
