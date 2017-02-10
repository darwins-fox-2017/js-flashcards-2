"use strict"
// write your code here

export default class View {
  static correctMessage() {
  }

  static incorrectMessage() {
  }

  static wrongAnswer(wrongCount) {
  }

  static question(x) {
  }

  static win() {
  }

  static welcome(x) {
    return `Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!\n\nDefinition\n${x}\n\nGuess: `
  }
}
