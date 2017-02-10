'use strict'
let View = require('./view')
let Model = require('./model')

let readline = require('readline')

module.exports = class Controller {
    constructor(fileName) {
        this.view = new View()
        this.model = new Model(fileName)
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'Aloha > '
        });
    }

    init() {
        console.log('running');
        this.model.parseFile()
        this.view.welcomeMessage()

        let index = 0
        this.model.getQuestion(index)
        // Versi Async
        this.rl.prompt()
        this.rl.on('line', (answer) => {
            if (answer.toLowerCase() == 'skip') {
                this.model.addLoopQuestion(index)
                index++
            } else {
                if (this.model.getAnswer(index).toLowerCase() == answer.toLowerCase()) {
                    this.view.correctAnswer()
                    index++
                    if (index >= this.model.lengthOfQuestions()) {
                        this.view.greating()
                        return this.rl.close()
                    }
                } else {
                    this.view.wrongAnswer()
                }
            }
            this.model.getQuestion(index)
        })
    }
}
