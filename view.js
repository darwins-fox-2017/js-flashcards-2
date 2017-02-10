'use strict'

module.exports = class View {
    constructor() {

    }

    showQuestion(questionList, index) {
        console.log(questionList[index].definition);
    }

    wrongAnswer() {
        console.log(`Jawaban mu salah, Sis! Coba lagi yak!`);
    }

    correctAnswer() {
        console.log(`Jawaban kamu benar, Sis!`);
    }

    welcomeMessage() {
        console.log('----==== Selamat datang di Game Flash Card ===-----');
    }

    greating() {
        console.log('-----------------------');
        console.log('Selamat kamu menang, Sis!');
    }
}
