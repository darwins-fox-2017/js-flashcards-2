"use strict"

export default class View {
  constructor() {

  }
  viewAnswer(data) {
    for(let i = 0; i<data.length; i++) {
      console.log(`- Pertanyaan : ${data[i].card}`)
      console.log(`- Jawaban : ${data[i].term} \n`)
    }
  }
  finish() {
    console.log("\nAnda telah menjawab dengan benar.")
  }

  question(data) {
    return `\n${data} ? `
  }

  jawabanBenar() {
    console.log("- Jawaban anda benar")
  }

  jawabanSalah(n) {
    console.log("-  This question is too easy you dumb fuck, you already answer it wrong ", n, " times.")
  }

  starts(data) {

  }
}// tutup class view
