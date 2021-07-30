const UNDEFINED = 'UNDEFINED'

async function create () {
  const config = {
    jiraSystemApiUrl: UNDEFINED,
    jiraDefaultProjectSpace: UNDEFINED
  }

  return config
}

module.exports = {
  name: 'Working Config',
  create
}
