"use strict"
// write your code here

import fs from "fs"
let jsonfile = require('jsonfile')

export default class Model {
  
  constructor(sources) {
    this.source = sources;
  }

  getData() {
    return jsonfile.readFileSync(this.source)
  }
}
