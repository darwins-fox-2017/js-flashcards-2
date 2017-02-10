"use strict"
// write your code here

export default class View{

  opening(){
    console.log(`\nWelcome to JS Flash Cards. You are using the deck 'data.json'\nTo play, just enter the correct term for each definition\n`);
  }

  closing(){
    console.log(`Thank you for playing, have a nice day`);
  }

  definition(){
    return `Definition : `
  }

  correctAnswer(){
    console.log(`Correct! `);
  }

  incorrectAnswer(){
    return `Incorrect! tryagain `
  }

  guess(){
    return `Guess: `
  }

  wrongCount(count){
    console.log(`You have answered ${count} times wrong\n`);
  }
}
