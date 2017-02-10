"use strict"

import Controller from "./controller"

let argv = process.argv
let controller = new Controller(argv[2])
    controller.run()
