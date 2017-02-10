let Controler = require('./controller');

let controler = new Controler();
let argv = process.argv;
let fileName;
  //melakukan pengecekan apakah user memasukan nama file jika tidak default file adalah social.json
if (argv.length > 2) {
    fileName = argv[2];
} else {
  fileName = 'social.json';
}

controler.run(fileName);
