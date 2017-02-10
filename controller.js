'use strict'
let View = require('./view');
let Model = require('./model');
//declare sarat readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = class controler {
    constructor() {
        //this._fileName;
        this._model = new Model();
        this._view = new View();
    }
    run(fileName) {
        // melakukan pengecekan nama file yang dimasukan user jika tidak ada akan memita user memasukan ulang perintah baru
        this.checkFileName(fileName)
    }

    checkFileName(fileName) {
        let fs = require('fs');
        try {
            fs.readFileSync(fileName);
            //declare fungsinya readline disini
            var data = this._model.readFile(fileName);
            var i = 0;
            console.log(data[i].definition);
            rl.on('line', (answer) => {
                if (answer.toLowerCase() == data[i].term.toLowerCase()) {
                    this._view.viewBenar();
                    i++
                } else if (answer.toLowerCase() == 'skip') {
                    this._view.viewSkip()
                    data.push(data[i]);
                    i++
                } else {
                    data[i].totalSalah = data[i].totalSalah + 1;
                    this._view.viewSalah(data[i].totalSalah);
                }
                if (i > data.length - 1) {
                    console.log('permainan selesai');
                    return rl.close();
                }
               console.log(data[i].definition);
            })
        } catch (e) {
            console.log('file dengan nama tersebut tidak ada silahkan ulangi perintah');
           return rl.close();
        }
    }
}
