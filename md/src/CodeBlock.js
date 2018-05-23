import React from 'react'
import LiveEdit from './LiveEdit'

const transformCode = code => `<React.Fragment>${code}</React.Fragment>`

const getOptions = lang => {
  const [ ext, ...meta ] = lang.split(' ')
  try {
    const opts = new Function(`return ({${meta.join(' ')}})`)()
    return opts
  } catch (e) {
    return {}
  }
}

const CodeBlock = ({
  lang = '',
  children,
  scope,
}) => {
  const type = lang.charAt(0)
  const opts = getOptions(lang)
  const code = React.Children.toArray(children).join('\n')

  switch (type) {
    case '.':
      return (
        <LiveEdit
          code={code}
          scope={scope}
        />
      )
  }

  return (
    <pre children={code} />
  )
}
CodeBlock.defaultProps = {}

export default CodeBlock
