"use strict"
// write your code here

import Model from "./model"
import View from "./view"
import readline from "readline"

export default class Controller {
  constructor (source) {
    this.model = new Model(source)
    this.readData = this.model.getData();
    this.count = 0;
    this.wrongCount = 0;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  win(){
    View.win()
    this.rl.close();
  }

  correct() {
    this.wrongCount = 0;
    View.correctMessage();
    this.count++;
    this.question(View.question(this.readData[this.count].definition))
  }

  skip(){
    this.readData.push(this.readData[this.count]);
    this.count++;
    this.question(View.question(this.readData[this.count].definition))
  }

  incorrect() {
    View.incorrectMessage();
    this.wrongCount++;
    View.wrongAnswer(this.wrongCount);
    this.rl.prompt(); // Pertanyaan Terakhir
  }

  question(x){
    this.rl.setPrompt(x);
    this.rl.prompt();
  }

  run() {
    this.question(View.question(this.readData[0].definition))
    this.rl.on('line', (answer) => {
      if ((this.count+1) < (this.readData.length)) {
        if(answer.trim().toLowerCase() === "skip"){
          this.skip();
        }else{
          if(answer.trim().toLowerCase() === this.readData[this.count].term.toLowerCase()) {
            this.correct();
          }else{
            this.incorrect();
          }
        }
      }else{
        this.win();
      }
    });
  }

}
