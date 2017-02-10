"use strict"
// write your code here

import Model from "./model"
import View from "./view"
import readline from "readline"
let jsonfile = require('jsonfile')

export default class Controller {

  constructor(source){
    this.model = new Model(source)
  }

  run(){
    let view = new View()
    let questions = this.model.getData()

    let i = 0
    const rl = readline.createInterface({
      input : process.stdin,
      output : process.stdout
    });

    view.opening()
    rl.setPrompt(view.definition()+ ` ${questions[i].definition}\n\n` + view.guess())

    rl.prompt();

    rl.on('line', (answer) => {
      if(i<questions.length){
        switch (answer.trim().toUpperCase()) {
          case questions[i].term.toUpperCase():
            view.correctAnswer();
            (i==questions.length-1)? rl.close() : i++
            rl.setPrompt(`\n` + view.definition()+ ` ${questions[i].definition}\n\n` + view.guess())
            rl.prompt()
            break;

          case "SKIP":
            questions.push(questions[i])
            i++
            rl.setPrompt(`\n` + view.definition()+ ` ${questions[i].definition}\n\n` + view.guess())
            rl.prompt()
            break;

          default:
            questions.hasOwnProperty("wrong")? questions[i].wrong++ : questions[i].wrong = 1
            view.wrongCount(questions[i].wrong)
            view.incorrectAnswer()
            rl.prompt()
        }
      }else {
        rl.close()
      }
    }).on('close', () => {
      view.closing()
      process.exit(0);
    });

  }

}
