const { expect } = require('chai')
const findJiraTicket = require('../../../src/steps/findJiraTicket')

describe('Find Jira Ticket', () => {
  it('should export the step as a function', () => {
    expect(typeof findJiraTicket).to.equal('function')
  })
})
