const steps = [
  'findJiraTicket'
]

module.exports = steps.reduce((acc, stepName) => {
  acc[stepName] = require(`./${stepName}`)
  return acc
}, {})
