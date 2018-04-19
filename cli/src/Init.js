'use strict'

const importJsx = require('import-jsx')
const { h, Component, Text } = require('ink')
const Select = require('ink-select-input')
const Input = require('ink-text-input')

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
    this.setState({ step: 'summary' })

    console.log(`✅ Project Name: ${name}`)
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
            <Input value={name} onChange={this.handleNameChange} onSubmit={this.handleSubmit} />
          </div>
        )}
        {step === 'summary' && (
          <div>
            <br />
            <Text>Cloning template...</Text>
          </div>
        )}
      </div>
    )
  }
}

module.exports = Init
