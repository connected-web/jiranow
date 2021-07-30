const steps = require('../steps/_index')
const { findJiraTicket } = steps

const defaultMode = {
  name: 'No OP?',
  setup: ({ command, args, cwd }) => {
    const workingKnowledge = {
      ticket: command,
      args,
      cwd
    }
    return workingKnowledge
  },
  steps: {
    'Find Jira Ticket': findJiraTicket
  }
}

module.exports = defaultMode
