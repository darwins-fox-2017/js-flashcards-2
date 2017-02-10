"use strict"

// const Model    = require('./model.js')
// const View     = require('./view.js')
// const readline = require('readline')

import Model from "./model"
import View from "./view"
import readline from "readline"

export default class Controller {
  constructor(input) {
    this.model  = new Model(input)
    this.json   = this.model.getData()
    this.count  = 0
    this.salah  = 0
    this.rl     = readline.createInterface({
      input   : process.stdin,
      output  : process.stdout
    })
  }

  // QUESTION
  question(x) {
    this.rl.setPrompt(x)
    this.rl.prompt()
  }

  play() {
    // console.log('Test');
    let rl = this.rl
    View.menuView()
    this.question(View.questionView(this.json[this.count].definition))

    rl.on('line', (answer) => {
      if ((this.count+1) < (this.json.length)) {
        if (answer.trim().toLowerCase() === "skip") {
          this.skip()
        } else {
          if (answer.trim().toLowerCase() === this.json[this.count].term.toLowerCase()) {
            this.correct()
          } else {
            this.incorrect()
          }
      } else {
          this.win()
      }
    })
  }

  skip() {
    this.json.push(this.json[this.count])
    this.count++
    this.question(View.questionView(this.json[this.count].definition))
  }

  correct() {
    this.salah = 0
    View.correctView()
    this.count++
    this.question(View.questionView(this.json[this.count].definition))
  }

  incorrect() {
    View.incorrectView()
    this.salah++
    View.wrongAnswer(this.salah)
    this.rl.prompt()
  }

  win() {
    View.winnerView()
    this.rl.close()
  }
}

// module.exports = Controller
