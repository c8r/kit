'use strict'

const importJsx = require('import-jsx')
const { h, Component, Text } = require('ink')
const Select = require('ink-select-input')
const Input = require('ink-text-input')
const Spinner = require('ink-spinner')
const execa = require('execa')

const Item = importJsx('./ListItem')
const { projectTemplates } = require('../lib/constants')
const items = projectTemplates.map(t => ({ label: t, value: t }))
const ProjectSelect = ({ items, onSelect }) => (
  <div>
    <Text>Select project template</Text>
    <br />
    <Select items={items} itemComponent={Item} onSelect={onSelect} />
  </div>
)

//mkdir foo && curl https://codeload.github.com/mdx-js/mdx/tar.gz/master | tar -xz -C foo --strip=3 mdx-master/examples/next
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
    console.log(`✅ Template: ${label}`)

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

    console.log(`✅ Project Name: ${name}`)
    this.initialize()
  }

  async initialize() {
    const { name, template } = this.state

    try {
      execa.shellSync(`mkdir ${name}`)
    } catch (e) {
      console.log(e)
      process.exit(1)
    }

    console.log('✅ Directory initialized')

    try {
      const command = [
        // From: https://github.com/segmentio/create-next-app/blob/master/lib/utils/load-example.js
        'curl https://codeload.github.com/mdx-js/mdx/tar.gz/master',
        `tar -xz -C ${name} --strip=3 mdx-master/examples/${template}`
      ].join(' | ')

      const result = execa.shellSync(command)
    } catch (e) {
      console.log(e)
      process.exit(1)
    }

    console.log(`✅ Initialized`)
    this.setState({ step: 'installing' })
    this.install(name)
  }

  async install(name) {
    try {
      execa.shellSync(`cd ${name} && npm i`)
    } catch (e) {
      console.log(e)
      process.exit(1)
    }

    console.log(`✅ Installed`)
    console.log(`Get started with $ cd ${name}`)
    console.log('Done!')
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
            <Text>Enter project name</Text>
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
