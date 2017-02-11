"use strict"

import Controller from "./controller"
let file = process.argv[2] || 'social.json'

// Controller

let controller = new Controller(file)

controller.run();
