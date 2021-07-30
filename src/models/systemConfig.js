const workingConfig = require('./workingConfig')

async function create () {
  return workingConfig.create()
}

module.exports = {
  name: 'System Config',
  create
}
