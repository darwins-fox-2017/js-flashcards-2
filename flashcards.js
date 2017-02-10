"use strict"

import Controller from "./controller"
let arg = process.argv

// Controller
let controller = new Controller(arg[2])
controller.run();
