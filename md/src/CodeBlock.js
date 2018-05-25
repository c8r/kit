import React from 'react'
import LiveEdit from './LiveEdit'

const transformCode = code => `<React.Fragment>${code}</React.Fragment>`

const CodeBlock = ({
  lang = '',
  children,
  scope,
  ...props
}) => {
  const type = lang.charAt(0)
  const code = React.Children.toArray(children).join('\n')

  switch (type) {
    case '.':
      return (
        <LiveEdit
          code={code}
          scope={scope}
        />
      )
    default:
      return (
        <pre children={code} />
      )
  }
}
CodeBlock.defaultProps = {}

export default CodeBlock
