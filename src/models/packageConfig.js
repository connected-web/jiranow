const workingConfig = require('./workingConfig')

const localFilepath = 'package.json'
const localProperty = 'jiranow'

async function create () {
  return workingConfig.create()
}

module.exports = {
  name: 'Package Config',
  create
}
