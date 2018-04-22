'use strict'

const importJsx = require('import-jsx')
const { h, Component, Text } = require('ink')
const Select = require('ink-select-input')
const Input = require('ink-text-input')
const Spinner = require('ink-spinner')
const execa = require('execa')

const { log, error, complete } = require('../lib/log')

const Item = importJsx('./ListItem')
const { projectTemplates, tarUrl } = require('../lib/constants')
const items = projectTemplates.map(t => ({ label: t, value: t }))
const ProjectSelect = ({ items, onSelect }) => (
  <div>
    <Text>Select project template</Text>
    <br />
    <Select items={items} itemComponent={Item} onSelect={onSelect} />
  </div>
)

class Init extends Component {
  constructor() {
    super()

    this.state = {
      step: 'template',
      template: 'x0',
      name: ''
    }

    this.handleTemplateSelect = this.handleTemplateSelect.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.initialize = this.initialize.bind(this)
  }

  handleTemplateSelect({ label }) {
    log(`Template: ${label}`)

    this.setState({
      template: label,
      step: 'name'
    })
  }

  handleNameChange(name) {
    this.setState({ name })
  }

  handleSubmit() {
    const { name } = this.state
    this.setState({ step: 'initializing' })

    log(`Project Name: ${name}`)
    this.initialize()
  }

  async initialize() {
    const { name, template } = this.state

    try {
      execa.shellSync(`mkdir ${name}`)
    } catch (e) {
      error(e, `Could not create ${name} dir`)
      process.exit(1)
    }

    complete(`${name} directory created`)

    try {
      const command = [
        // From: https://github.com/segmentio/create-next-app/blob/master/lib/utils/load-example.js
        `curl ${tarUrl}`,
        `tar -xz -C ${name} --strip=3 mdx-master/examples/${template}`
      ].join(' | ')

      const result = execa.shellSync(command)
    } catch (e) {
      error(e, `Failed to initialize project`)
      process.exit(1)
    }

    complete('Initialized')
    this.setState({ step: 'installing' })
    this.install(name)
  }

  async install(name) {
    try {
      execa.shellSync(`cd ${name} && npm i`)
    } catch (e) {
      error(e, `Failed to install dependencies`)
      process.exit(1)
    }

    complete(`Installed`)
    log(`
  ${name} is ready to go!

  Get started with the following terminal commands:

    cd ${name}
    npm start
    open localhost:3000
`)
    process.exit(0)
  }

  render() {
    const { step, name, template } = this.state

    return (
      <div>
        {step === 'template' && (
          <ProjectSelect items={items} onSelect={this.handleTemplateSelect} />
        )}
        {step === 'name' && (
          <div>
            <br />
            <Text>Enter project name:</Text>
            <br />
            <Input
              value={name}
              onChange={this.handleNameChange}
              onSubmit={this.handleSubmit}
            />
          </div>
        )}
        {step === 'initializing' && (
          <div>
            <Spinner /> Initializing {name}
          </div>
        )}
        {step === 'installing' && (
          <div>
            <Spinner /> Running <Text bold>npm i</Text>
          </div>
        )}
      </div>
    )
  }
}

module.exports = Init
