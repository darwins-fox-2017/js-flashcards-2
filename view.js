"use strict"
// write your code here

export default class View{

  opening(file){
    console.log(`\nWelcome to JS Flash Cards. You are using the deck '${file}'\nTo play, just enter the correct term for each definition\n`);
  }

  closing(){
    console.log(`\nThank you for playing, have a nice day`);
  }

  definition(){
    return '\nDefinition :\n'
  }

  correctAnswer(){
    console.log(`Correct! `);
  }

  incorrectAnswer(){
    return `Incorrect! try again `
  }

  guess(){
    return 'Guess: '
  }

  wrongCount(count){
    console.log(`You have answered ${count} times wrong\n`);
  }
}
