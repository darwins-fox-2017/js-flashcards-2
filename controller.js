"use strict"
// write your code here
import View from "./view"
import Model from "./model"
import readline from "readline"

export default class Controller {

  constructor(source) {
    this.name  = source;
    this.model = new Model(source)
    this.data  = this.model.getData();
    this.view  = new View()
    this.count = 0;
    this.falseCount = 0;
    this.rl    = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

  }

  welcome(){
    this.view.welcome(this.source);
  }

  skip(){
    this.data.push(this.data[this.count])
    this.count++
    this.view.answer(this.data[this.count].definition)
  }

  trueAnswers(){
    this.rl.prompt()
    this.view.trueAnswer();
    this.count++
    this.falseCount = 0;
  }

  falseAnswers(list, falseCount){
    this.falseCount++
    this.view.falseAnswer(list, falseCount);
  }

  exit(){
    this.view.thank();
    process.exit(0);
  }

  runApp(){
    this.welcome(this.name);
    this.rl.prompt();
    console.log(this.data[this.count].definition)
    this.rl.on('line', (line) => {
      if(line == "skip"){
        this.skip();
      }else{
        if(this.count < this.data.length - 1){
          if(line.toLowerCase() == this.data[this.count].term.toLowerCase()){
            this.trueAnswers()
          } else {
            this.falseAnswers(line, this.falseCount)
          }
          this.view.answer(this.data[this.count].definition)
        } else {
          this.rl.close()
        }
      }
    }).on('close', () => {
      this.exit()
    });
  }
}


// var input = process.argv[2];
// var run = new Controller(input);
//
// run.runApp();
