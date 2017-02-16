"use strict"
const fs = require("fs");

export class Model{
  static data(file = "data.json"){
    let parsed = JSON.parse(fs.readFileSync(file,'utf-8'))
    for (let i = 0; i < parsed.length; i++){
      parsed[i].mistakes = 0
    }
    return parsed
  }
}
