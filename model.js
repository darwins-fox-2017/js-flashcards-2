"use strict"

import fs from 'fs'

export default class Model {
  constructor(source) {
    this.file = source || "social.json"
  }

  getData(){
    let resultParse = JSON.parse(fs.readFileSync(this.file, "utf-8"))
    for (let i = 0; i < resultParse.length; i++) {
      resultParse[i]["wrongCount"] = 0
    }
    return resultParse
  }
}
