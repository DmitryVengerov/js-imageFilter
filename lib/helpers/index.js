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

    writer(name, file) {
        return this.writer(name, file)
    }

    validator() {
        
    }
}

module.exports = Helpers