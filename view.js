"use strict"

import Controller from './controller'

export default class View {
  static show(data) {
    return `${data}?`
  }

  static rightComment(){
    console.log('Yak betul!');
  }

  static wrongComment(wrong){
    console.log(`Salah ke ${wrong+1}`);
    console.log('Duh Salah tuh! Ulang!! #Ci windi style');
  }

  static exit(){
    console.log('Selamat Anda memenangkan permainan. Dapat #sayadisctv auwuwwwwwww');
  }

}
