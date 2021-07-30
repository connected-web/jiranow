const { expect } = require('chai')
const folderConfig = require('../../../src/models/folderConfig')
const packageConfig = require('../../../src/models/packageConfig')
const systemConfig = require('../../../src/models/systemConfig')
const workingConfig = require('../../../src/models/workingConfig')

describe('Config models', () => {
  const configModels = [folderConfig, packageConfig, systemConfig, workingConfig]

  describe('Common interface', () => {
    configModels.forEach(model => {
      describe(`Config model "${model.name}"`, () => {
        it('should have a descriptive name property', () => {
          const actual = model.name || ''
          expect(actual).to.not.equal('')
        })

        it('should have a create function', () => {
          expect(typeof model.create).to.equal('function')
        })

        it('should expose a configuration property for Jira System API URL', async () => {
          const configuration = await model.create()
          const actual = configuration.jiraSystemApiUrl
          expect(actual).to.not.equal(null)
          expect(typeof actual).to.equal('string')
        })
      })
    })
  })

  describe('Folder Config', () => {

  })

  describe('System Config', () => {

  })

  describe('Package Config', () => {

  })

  describe('Working Config', () => {

  })
})
