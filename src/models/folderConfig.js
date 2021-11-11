const workingConfig = require('./workingConfig')

const localFilepath = './.jiranow.json'

async function create () {
  return workingConfig.create()
}

module.exports = {
  name: 'Folder Config',
  create
}
