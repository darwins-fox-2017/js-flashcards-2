'use strict'

let jsonfile = require('jsonfile')

module.exports = class Model {
    constructor(fileName) {
        this.fileName = fileName
        this.questionList = []
    }

    parseFile() {
        debugger
        this.questionList = jsonfile.readFileSync(this.fileName)
    }

    writeToFile() {
        jsonfile.writeFileSync(this.fileName, this.todoList)
    }

    getQuestion(index) {
        console.log(this.questionList[index].definition);
        return this.questionList[index].definition
    }

    getAnswer(index) {
        return this.questionList[index].term
    }

    lengthOfQuestions() {
        return this.questionList.length - 1
    }

    addLoopQuestion(index){
      this.questionList.push(this.questionList[index])
    }
}
