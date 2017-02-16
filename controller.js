"use strict"

import Model from './model'
import View from './view'

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

class Controller {

  promptData(answer){
    let questionLine = 0
    let correct = 0
    let wrong = 0
    if (Number(answer) === 1 ) {
      answer = "social.json"
    } else {
      answer = "social2.json"
    }
    console.log();
    console.log("=======================================");
    console.log("Selamat Datang di kuis trivia suka suka");
    console.log("=======================================");
    console.log();
    let questions = Model.loadData(answer)
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

rl.question('Silakan pilih no quiz flash card 1 atau 2 ', function(answer){
  let controller = new Controller()
  controller.promptData(answer)
})
