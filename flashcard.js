"use strict"
// write your code here
import Controller from "./controller"
var input = process.argv[2] || 'social.json';
var run = new Controller(input);

run.runApp();
