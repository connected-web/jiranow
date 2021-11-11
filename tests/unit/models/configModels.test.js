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

        it('should expose a configuration property for Jira System Base URL', async () => {
          const configuration = await model.create()
          const actual = configuration.jiraSystemBaseUrl
          expect(actual).to.not.equal(null)
          expect(typeof actual).to.equal('string')
          expect(actual).to.deep.equal('UNDEFINED')
        })

        it('should expose a configuration property for Jira Default Project Space', async () => {
          const configuration = await model.create()
          const actual = configuration.jiraDefaultProjectSpace
          expect(actual).to.not.equal(null)
          expect(typeof actual).to.equal('string')
          expect(actual).to.deep.equal('UNDEFINED')
        })
      })
    })
  })

  describe('Folder Config', () => {

  })

  describe('System Config', () => {

  })

  describe('Package Config', () => {
    it('should retrieve an TEST_OVERRIDE property unique from the local project package.json', async () => {
      const configuration = await packageConfig.create()
      const actual = configuration.TEST_OVERRIDE
      expect(actual).to.not.equal(null)
      expect(typeof actual).to.equal('string')
      expect(actual).to.deep.equal('hello mocha test')
    })
  })

  describe('Working Config', () => {

  })
})
