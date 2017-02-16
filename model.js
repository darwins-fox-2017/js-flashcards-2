"use strict"

const fs = require('fs')

export default class Model {
  static loadData(answer) {
    return JSON.parse(fs.readFileSync(answer, "utf-8"))
  }
}
