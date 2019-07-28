/**
 * 	For reading file and return hex 
 */
function reader(url) {
	return require('fs').readFileSync(url);
}

module.exports = reader