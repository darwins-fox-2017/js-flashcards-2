"use strict"
let jsonfile = require ('jsonfile')
const readline = require('readline')
const argv = process.argv



class Models{
  static data(){
    return jsonfile.readFileSync('social.json')
  }
}

class Views{
  constructor(){

  }

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

class Controllers{
  controller(){

  }

  start(source){
    let view = new Views()
    let questions = Models.data()
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

control.start()
