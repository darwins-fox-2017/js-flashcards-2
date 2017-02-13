import Controller from './controller'
let file = process.argv[2] || 'social.json'
let controller = new Controller(file)
controller.quizUp()
