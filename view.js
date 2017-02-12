"use strict"

import Controller from './controller'

export default class View {
	static show(data) {
		return `${data}?`
	}

	static alertBenar() {
		console.log("Jawaban Anda benar!")
	}

	static alertSalah() {
		console.log(`Salah ke ${wrong+1}`)
	}

	static keluar() {
		console.log(`Selamat Anda menang!`)
	}
} 