const workingConfig = require('./workingConfig')

async function create () {
  return workingConfig.create()
}

module.exports = {
  name: 'Folder Config',
  create
}
