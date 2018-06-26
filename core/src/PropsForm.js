import React from 'react'
import { Box, Flex, Label, Input, Select, Divider } from './ui'

class PropsForm extends React.Component {
  constructor(props) {
    super()
    const [child] = React.Children.toArray(props.children)
    const initialState = child ? child.props : {}
    this.state = initialState
    this.update = fn => this.setState(fn)
  }

  componentWillReceiveProps(next) {
    if (next.children !== this.props.children) {
      const [child] = React.Children.toArray(next.children)
      this.update(child.props)
    }
  }

  render() {
    const children = React.Children.toArray(this.props.children)
    const [child] = children
    const clone = React.cloneElement(child, this.state)

    const controls = children
      .filter(c => c.type.isForm === true)
      .map(c =>
        React.cloneElement(c, { props: this.state, update: this.update })
      )

    return (
      <Flex flexDirection="column">
        <Box pb={4} flex="1 1 auto">
          {React.cloneElement(child, this.state)}
        </Box>
        <Divider />
        <Box flex="none" py={2} mt={2}>
          {controls}
        </Box>
      </Flex>
    )
  }
}

PropsForm.Input = ({ update, name, props = {}, ...rest }) => (
  <Box mb={2}>
    <Label>{name}</Label>
    <Input
      {...rest}
      name={name}
      value={props[name] || ''}
      onChange={e => {
        const { value } = e.target
        update({ [name]: value })
      }}
    />
  </Box>
)
PropsForm.Input.isForm = true

PropsForm.Select = ({ update, name, props = {}, ...rest }) => (
  <Box mb={2}>
    <Label>{name}</Label>
    <Select
      {...rest}
      name={name}
      value={props[name] || ''}
      onChange={e => {
        const { value } = e.target
        update({ [name]: value })
      }}
    />
  </Box>
)
PropsForm.Select.isForm = true

PropsForm.Checkbox = ({ update, name, props = {}, ...rest }) => (
  <Box mb={2}>
    <Label>{name}</Label>
    <Input
      {...rest}
      name={name}
      type="checkbox"
      checked={!!props[name]}
      onChange={e => {
        const { checked } = e.target
        update({ [name]: checked })
      }}
    />
  </Box>
)
PropsForm.Checkbox.isForm = true

export default PropsForm
