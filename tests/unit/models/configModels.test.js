const { expect } = require('chai')
const folderConfig = require('../../../src/models/folderConfig')
const packageConfig = require('../../../src/models/folderConfig')
const systemConfig = require('../../../src/models/folderConfig')
const workingConfig = require('../../../src/models/folderConfig')

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
