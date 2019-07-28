/**
 *  Main start point for helpers lib
 */
class Helpers {
    constructor() {
        this.reader = require('./reader');
        this.writer = require('./writer');
    }
    
    reader(file) {
        return this.reader(file)
    }

    writer(name) {
        return this.writer(name)
    }

    validator() {}
}


module.exports = Helpers