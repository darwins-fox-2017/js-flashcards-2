"use strict"

let fs = require("fs")

export default class Model {
  constructor(data) {
    this._data = JSON.parse(fs.readFileSync(data, "utf-8"))
  }

  get data() {
    return this._data
  }

}
