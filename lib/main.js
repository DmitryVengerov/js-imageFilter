const Helpers = require('../lib/helpers/');

let hel = new Helpers();
hel.reader('../1.png');
hel.writer('writer');

try {
	var data = require('fs').readFileSync('./1.png');
	console.log(data)
} catch(err) {
	console.log(err)
}



