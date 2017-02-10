"use strict"

import Model from './model'
import View from './view'

class Controller {

  promptData(){
    const readline = require('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
    let questionLine = 0
    let correct = 0
    let wrong = 0
    let questions = Model.loadData()
    rl.setPrompt(View.show(questions[questionLine].definition))
    rl.prompt();
    rl.on('line', (answer) => {
      if (answer.toLowerCase() === questions[questionLine].term.toLowerCase()) {
        View.rightComment()
        questionLine++
        correct++
      } else if(answer === 'skip') {
        questions.push(questions[questionLine])
        questionLine++
      } else {
        View.wrongComment(wrong++)
      }

      if (questionLine < questions.length) {
        rl.setPrompt(View.show(questions[questionLine].definition))
        rl.prompt();
      } else {
        rl.close()
      }
    }).on('close', ()=>{
      View.exit();
      process.exit(0)
    })
  }

}

let controller = new Controller()
controller.promptData()
