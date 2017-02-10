"use strict"
// write your code here

const fs = require('fs')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Model {
    constructor(answer) {
        this.answer = answer
    }
    getData() {
        return JSON.parse(fs.readFileSync("social.json", "utf-8"))
    }
}

class View {
    static header() {
        console.log('Wellcome to JS flash Card. To play, just enter the correct term for each definition. \n' +
            'Are You Ready ?? Lets Goooooo !!  \n');
    }
}

class Controller {
    start() {
        let i = 0;
        let x = 0;
        let model = new Model()
        let questions = model.getData()

        View.header()

        rl.setPrompt(`${questions[i]['definition']} \n `);
        rl.prompt()
        rl.on('line', (line) => {
            if (line === questions[i]['term'].toLowerCase()) {
                i++
                if (i < questions.length) {
                    rl.setPrompt(`${questions[i]['definition']} \n`);
                    rl.prompt()
                } else {
                    rl.close()
                }

            } else if (line === "skip") {
              questions.push(questions[i])
              i++
              rl.setPrompt(`${questions[i]['definition']} \n`);
              rl.prompt()

            }else {
                x++

                console.log(`Your input ${line} is false! ${x}`);
                rl.prompt()
            }

        }).on('close', () => {
            console.log('Mission Complete !!');
            process.exit(0);
        });
    }
}

var app = new Controller()
app.start()
