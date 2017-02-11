"use strict"
// write your code here

import Model from "./model"
import View from "./view"
import readline from "readline"
let jsonfile = require('jsonfile')

export default class Controller {

  constructor(source){
    this.model = new Model(source)
    this.file = source
  }

  run(){
    let view = new View()
    let questions = this.model.getData()

    let i = 0
    const rl = readline.createInterface({
      input : process.stdin,
      output : process.stdout
    });

    view.opening(this.file)
    rl.setPrompt(view.definition() + `${questions[i].definition} ` + view.guess())

    rl.prompt();

    rl.on('line', (answer) => {
      switch (answer.trim().toUpperCase()) {
        case questions[i].term.toUpperCase():
          view.correctAnswer();
          (i==questions.length-1)? rl.close() : i++
          rl.setPrompt(view.definition() + `${questions[i].definition} ` + view.guess())
          rl.prompt()
          break;

        case "SKIP":
          questions.push(questions[i])
          i++
          rl.setPrompt(view.definition() + `${questions[i].definition} ` + view.guess())
          rl.prompt()
          break;

        default:
          questions[i].hasOwnProperty("wrong")? questions[i].wrong++ : questions[i].wrong = 1
          view.wrongCount(questions[i].wrong)
          view.incorrectAnswer()
          rl.prompt()
      }
      
    }).on('close', () => {
      view.closing()
      process.exit(0);
    });

  }

}
