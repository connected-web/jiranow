const path = require('path')
const fs = require('fs/promises')
const workingConfig = require('../../src/models/workingConfig')
const { expect } = require('chai')

describe('README Documentation', () => {
  let configModel, readme, readmeLines
  before(async () => {
    configModel = await workingConfig.create()
    const readmePath = path.join(__dirname, '../../', 'README.md')
    readme = await fs.readFile(readmePath, 'utf8')
    readmeLines = readme.split('\n')
  })

  describe('Configuration', () => {
    it('the readme should contain a configuration section', () => {
      const actual = readmeLines.filter(n => n.includes('## Configuration'))
      const expected = ['## Configuration']
      expect(actual).to.deep.equal(expected)
    })

    it('should contain documentation about each property', () => {
      const expectedProperties = Object.keys(configModel)
      expectedProperties.forEach((property) => {
        const actual = readmeLines.filter(n => n.includes(`### Property: ${property}`))
        const expected = [`### Property: ${property}`]
        expect(actual).to.deep.equal(expected)
      })
    })
  })
})
