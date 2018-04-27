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
    complete(`Template: ${label}`)

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

    complete(`Project Name: ${name}`)
    this.initialize()
  }

  async initialize() {
    const { name, template } = this.state

    try {
      const commands = [
        `mkdir -p ${name}`,
        `curl ${tarUrl} | tar -xz -C ${name} --strip=3 mdx-master/examples/${template}`
      ]

      const px = commands.map(c => execa.shell(c))
      await Promise.all(px)

      complete('Code scaffolding')
      this.setState({ step: 'installing' })

      await execa.shell(`cd ${name} && npm i`)
      complete('Package install')
    } catch (e) {
      error(e, `Failed to initialize project`)
      process.exit(1)
    }

    this.setState({ step: 'done' })
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
        {step === 'done' && (
          <Text>Done!</Text>
        )}
      </div>
    )
  }
}

module.exports = Init
