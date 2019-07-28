const Helpers = require('../lib/helpers/');
const hel = new Helpers();
console.log(process.argv)
const filename = process.argv[2]

try {
    this.data = hel.reader(filename);
    hel.writer('writer');
} catch (err) {
    throw new Error(err)
} finally {
    try {
    	// console.log(this.data.toString('hex'))
    	console.log(this.data.toJSON())
      hel.writer('./src/test.png', this.data)
    } catch (err) {
        throw new Error(err)
    } finally {
        console.log('create new file')
    }
}