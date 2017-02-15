"use strict"

import Controller from './controller'

export default class View {
	static show(data) {
		return `${data}?`
	}

	static skip(pertanyaan) {
		console.log(pertanyaan)
	}

	static alertBenar() {
		console.log(`Jawaban Anda benar!`)
	}

	static alertSalah() {
		console.log(`Jawaban Anda salah!`)
	}

	static keluar(benar, salah) {
		console.log(`Terimakasih ! Anda benar ${benar} dan salah ${salah}`)
	}
}  