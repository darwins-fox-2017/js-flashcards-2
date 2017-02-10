"use strict"
// write your code here

import fs from "fs"

export default class Model {
  constructor(source) {
    this.source = source;
  }
  getData() {
    return JSON.parse(fs.readFileSync(this.source, "utf8"));
  }
}
