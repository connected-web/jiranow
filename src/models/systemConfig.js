const workingConfig = require('./workingConfig')

const homeDirectory = '~/.jiranow/jiranow.json'

async function create () {
  return workingConfig.create()
}

module.exports = {
  name: 'System Config',
  create
}
