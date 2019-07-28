function writer(name, file) {
  try {
    return require('fs').writeFileSync(name, file,);
  } catch(error) {
    throw new Error(error)
  }
}

module.exports = writer;