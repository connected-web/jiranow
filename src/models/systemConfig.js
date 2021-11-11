const asyncFs = require('fs/promises')
const clone = require('../util/clone')
const resolveHome = require('../util/resolveHome')
const workingConfig = require('./workingConfig')

const localFilepath = resolveHome('~/.jiranow/jiranow.json')
const localProperty = 'jiranow'

async function create () {
  const base = await workingConfig.create()

  let config = {}
  let text = '{}'

  try {
    text = await asyncFs.readFile(localFilepath, 'utf8')
  } catch (ex) {
    console.debug(`Unable to load ${localFilepath}.`)
  }

  try {
    config = JSON.parse(text)
  } catch (ex) {
    console.error(`Found file; but unable to parse ${localFilepath} as JSON:`, ex.message)
  }

  return Object.assign({}, clone(base), config[localProperty] || config || {})
}

module.exports = {
  name: 'System Config',
  create
}
