'use strict'

let jsonfile = require('jsonfile')

module.exports = class Model {
    constructor() {
        this.fileName = ''
        this.questionList = []
    }

    parseFile() {
        this.questionList = jsonfile.readFileSync(this.fileName)
    }

    setFileName(fileName){
      console.log(fileName);
      this.fileName = fileName
      return true
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
