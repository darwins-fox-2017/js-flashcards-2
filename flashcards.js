"use strict"

import Controller from "./controller"
let argv = process.argv

// Controller

let controller = new Controller('social.json')

controller.run();
