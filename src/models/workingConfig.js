const UNDEFINED = 'UNDEFINED'

async function create () {
  const config = {
    jiraSystemBaseUrl: UNDEFINED,
    jiraDefaultProjectSpace: UNDEFINED
  }

  return config
}

module.exports = {
  name: 'Working Config',
  create
}
