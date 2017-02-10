"use strict"

import Model from "./model"
import View from "./view"

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export default class Controller {

  constructor() {
    this.model = new Model("social.json")
    this.view = new View()
  }
  viewAnswer() {
    this.view.viewAnswer(this.model.data)
  }
  start() {
    // console.log(this.model.data[0].definition)
    // this.view.starts(this.model.data)
    let i = 0;

    let jumlahSalah = 1
    let indPertanyaan = []
    for(let i=0; i<this.model.data.length; i++) {
      indPertanyaan.push(i)
    }
    // this.model.data
    // console.log(this.model.data)
    rl.setPrompt(this.view.question(this.model.data[indPertanyaan[0]].definition))
    rl.prompt()

    let skipArrInd = []
    rl.on('line', (input) => {
      if (indPertanyaan.length > 0) {
        if(this.model.data[indPertanyaan[0]]['term'].toLowerCase() == input.toLowerCase()) {
          this.view.jawabanBenar()
          jumlahSalah = 1
          indPertanyaan.shift()
        } else if (input.toLowerCase() == "skip") {
          let a = indPertanyaan.shift()
          indPertanyaan.push(a)
        }
        else {
          this.view.jawabanSalah(jumlahSalah)
          jumlahSalah++
        }
      }

      if(indPertanyaan.length > 0) {
      rl.setPrompt(this.view.question(this.model.data[indPertanyaan[0]].definition))
      rl.prompt()
      } else {
        rl.close()
        this.view.finish()
      }
    })
  }
} // end Controller Class
