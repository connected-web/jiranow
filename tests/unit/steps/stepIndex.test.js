const { expect } = require('chai')
const stepIndex = require('../../../src/steps/_index')

describe('Step Index', () => {
  it('should export an object where all steps are functions', () => {
    const actualTypes = Object.entries(stepIndex).map(([key, value]) => `${key}:${typeof value}`)
    const expectedTypes = [
      'findJiraTicket:function'
    ]
    expect(actualTypes).to.deep.equal(expectedTypes)
  })
})
