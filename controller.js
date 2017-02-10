"use strict"

import Model from "./model"
import View from "./view"
import readline from "readline"

export default class Controller {
  constructor(source) {
    this.file = source
    this.rl   = readline.createInterface({
      input :process.stdin,
      output: process.stdout
    })
    this.model      = new Model(this.file)
    this.questions  = this.model.getData()
    this.index      = 0
    this.wrongCount = 0
  }

  win(){
    View.closingMessage()
    this.rl.close()
  }

  correct(){
    View.wrongAnswer()
  }

  setQuestion(value){
    this.rl.setPrompt(value)
    this.rl.prompt()
  }

  run(){
    this.setQuestion(View.getQuestions(this.questions[0].definition));

    this.rl.on('line', (answer) => {
      switch (answer.trim().toUpperCase()) {
        case this.questions[this.index].term.toUpperCase():
            View.correctAnswer(this.questions[this.index].wrongCount)
            this.index++
            break;
        case "SKIP":
            this.questions.push(this.questions[this.index])
            this.index++

            if(this.index == this.questions.length){
              this.index = 0
            }
          break;
        default:
            this.questions[this.index].wrongCount++
            View.wrongAnswer(this.questions[this.index].wrongCount)
            // this.wrongCount++
            break;
      }

      if (this.index == this.questions.length) {
        this.rl.close()
      }else {
        this.setQuestion(View.getQuestions(this.questions[this.index].definition))
        this.rl.prompt()
      }
    }).on('close', () => {
      View.closingMessage()
      process.exit(0)
    })
  }
}
