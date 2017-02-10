"use strict"

export default class View {
  static menuView() {
    console.log('::           Welcome to JS Flash Cards           ::\nTo play, just enter the correct term for each definition.\nReady? Go!');
  }

  static questionView(x){
    return `\nDefinition\n${x}\nGuess: `
  }

  static correctView() {
    console.log('Great! Das beste!');
  }

  static incorrectView() {
    console.log('Oh, no! Try again!');
  }

  static wrongAnswer(salah) {
    console.log(`Jawaban salah yang ke-${salah}`);
  }

  static winnerView() {
    console.log("\nCongratulation! You're the best! Das beste!\n");
  }
}

// module.exports = View
