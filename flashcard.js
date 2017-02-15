
import Controller from "./controller"

let argv = process.argv[2] || 'social.json'	
//console.log(argv)	
let controller = new Controller(argv)
controller.tampilData() 