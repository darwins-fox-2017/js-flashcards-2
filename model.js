"use strict"

const fs = require('fs')

module.exports = class Model {
    constructor(file) {
        this.file = file
    }
    getData() {
        return JSON.parse(fs.readFileSync(this.file, "utf-8"))
    }
}
