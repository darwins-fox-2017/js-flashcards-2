import Model from './model'
import View from './view'
import * as readline from 'readline'

export default class Controller {
  constructor() {
    this.model           = new Model('social.json')
    this.view            = View
    this.currentQuestion = 0
    this.questionRemain  = this.model.readData().getParseData().length
    this.data            = this.model.readData().getParseData()
  }

  quizUp() {
    this.view.welcomeMessage()
    let rl = readline.createInterface({
      input : process.stdin,
      output: process.stdout,
    })
    
    rl.setPrompt(this.view.displayQuestion(this.data[this.currentQuestion].definition))
    rl.prompt()

    rl.on('line', (answer) => {
      switch (answer.toUpperCase()) {
        case this.data[this.currentQuestion].term.toUpperCase():
          this.view.displayCorrectMessage()
          if (this.currentQuestion === this.data.length-1) rl.close()
          else this.currentQuestion++
          rl.setPrompt(this.view.displayQuestion(this.data[this.currentQuestion].definition))
          rl.prompt()
          break;
        case 'SKIP':
          this.view.skipMessage()
          this.data.push(this.data[this.currentQuestion])
          this.currentQuestion++
          rl.setPrompt(this.view.displayQuestion(this.data[this.currentQuestion].definition))
          rl.prompt()
          break;
        default:
          this.view.displayIncorrectMessage()
          this.data[this.currentQuestion].hasOwnProperty("wrong")? this.data[this.currentQuestion].wrong++ : this.data[this.currentQuestion].wrong = 1
          this.view.getWrongAnswerCount(this.data[this.currentQuestion].wrong)
          this.data.push(this.data[this.currentQuestion])
          this.currentQuestion++
          rl.setPrompt(this.view.displayQuestion(this.data[this.currentQuestion].definition))
          rl.prompt()
      }
    }).on('close', () => {
      this.view.winMessage()
      process.exit(0)
    })
  }
}

