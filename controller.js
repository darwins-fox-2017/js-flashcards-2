"use strict"

import Model from './model'
import View from './view'

class Controller {

	tampilData() {
		const radline = require('readline')
		const rl = readline.createInterface({ 
			input: process.stdin,
			output: process.stdout
		})
		let soalno = 0
		let benar = 0
		let salah = 0

		let pertanyaan = Model.loadDataJSON()
		rl.setPrompt(View.show(pertanyaan[soalno].definition))
		rl.prompt()
		rl.on('line', (jawaban) => {
			if(jawaban.toLowerCase() === pertanyaan[soalno].term.toLowerCase()) {
				View.alertBenar()
				soalno++
				benar++
			} else if(jawaban === 'skip') {
				pertanyaan.push(pertanyaan[soalno])
				soalno++
			} else {
				View.alertSalah(salah++)
			}

			if(soalno < pertanyaan.length) {
				rl.setPrompt(View.show(pertanyaan[soalno].definition))
				rl.prompt()
			} else {
				rl.close()
			}
		}).on('close', () => {
			View.exit()
			process.exit(0)
		})
	}
}

let controller = new Controller()
controller.tampilData(	)
