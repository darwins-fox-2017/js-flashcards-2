"use strict"

let Controller = require('./controller')


var input = process.argv[2];
let controller =  new Controller(input)


controller.start()
