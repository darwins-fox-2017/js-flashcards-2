"use strict"

import fs from "fs"

export default class Model {
  constructor(data) {
    this.data   = data
  }

  getData() {
    return JSON.parse(fs.readFileSync(this.data, "utf-8"))
  }
}

// module.exports = Model
