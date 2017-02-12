export default class View {
  static welcomeMessage() {
    console.log('\n\n\t\t**Welcome to JS Flash Cards**To play\n\tJust enter the correct term for each definition.\n\t\t\tReady? Go!');
  }

  static displayQuestion(question){
    return `\nDefinition\n${question}\nGuess: `
  }
  
  static skipMessage() {
    console.log('You skip this question')
  }

  static displayCorrectMessage() {
    console.log('Correct!')
  }

  static displayIncorrectMessage() {
    console.log('Oh, no! Try again!')
  }

  static getWrongAnswerCount(answer) {
    console.log(`Your answer is wrong on question ${answer}`)
  }

  static winMessage() {
    console.log("\nCongratulation! You have answered all questions correctly.")
  }
}