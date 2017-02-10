"use strict"

import fs from 'fs'

export default class Model {
  constructor(file) {
    this.file = file
  }

  getData(){
    return JSON.parse(fs.readFileSync(this.file, "utf-8"))
  }
}
