"use strict"

import Controller from "./controller"
let input        = process.argv[2]
// console.log('tes');
const controller = new Controller(input)
controller.play()
