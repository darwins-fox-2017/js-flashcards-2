"use strict"

export default class View {
  constructor() {}

  static correctAnswer(value){
    console.log('your answer is correct!');
    console.log(`wrong count ${value}`);
  }

  static wrongAnswer(value){
    console.log(`wrong answer!!`);
    console.log(`wrong count ${value}`);
  }

  static closingMessage(){
    console.log('\nCongrats! you answered all correct. Thanks for playing this game. Hope you get something from this game !!\n');
  }

  static getQuestions(value){
    return `\nDefinition:\n${value}\nYour answer: `
  }
}
