/**
 * 	For reading file and return hex 
 */
function reader(url) {
  try {
    return require('fs').readFileSync(url);
  } catch(error) {
    throw new Error(error)
  }	
}

module.exports = reader