"use strict"

let Model = require('./model')
let View = require('./view')

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


module.exports = class Controller {
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
                    x = 0
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
