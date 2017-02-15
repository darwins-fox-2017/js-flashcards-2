"use strict"
 
import Model from './model'
import View from './view' 

export default class Controller {
	constructor(file) {
		this.file = file
		this.soalno = 0
		this.salah = 0
		this.benar = 0
	}

	tampilData() {
		const readline = require('readline')
		const rl = readline.createInterface({ 
			input: process.stdin,
			output: process.stdout
		})
		// let soalno = 0
		// let benar = 0
		// let salah = 0
 
		let pertanyaan = Model.loadDataJSON(this.file)
		//console.log(pertanyaan)
		rl.setPrompt(View.show(pertanyaan[this.soalno].definition))
		rl.prompt()
		rl.on('line', (jawaban) => {
			if(jawaban.toLowerCase() === pertanyaan[this.soalno].term.toLowerCase()) {
				View.alertBenar()
				this.soalno++
				this.benar++
				if(this.soalno < pertanyaan.length) {
					rl.setPrompt(pertanyaan[this.soalno].definition + "\n")
					rl.prompt()		
				} else {
					rl.close()
					View.keluar()
				}
			} else if(jawaban === 'skip') {
				pertanyaan.push(pertanyaan[this.soalno])
				this.soalno++
				View.skip(pertanyaan[this.soalno].definition)
			} else {
				View.alertSalah()
				this.salah++
				rl.prompt()
			}			
		}).on('close', () => {
			View.keluar(this.benar, this.salah)
			process.exit(0)
		})
	}
}