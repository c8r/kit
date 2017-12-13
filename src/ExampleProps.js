import React from 'react'
import isBlank from 'is-blank'
import { Div, H4 } from '@compositor/mono'
import getProps from './util/get-props'

export default ({ component }) => {
  const props = getProps(component.examples)

  if (isBlank(props)) {
    return null
  }

  return (
    <Div>
      <H4 fontSize={1}>Example Props</H4>
      <table>
        <thead>
          <tr style={{fontSize: '12px', textTransform: 'uppercase', textAlign: 'left' }}>
            <th>Prop</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody
          children={props.map(prop =>
            <tr key={`${prop.prop}-${prop.value}`}>
              <td style={{ paddingRight: '32px' }}><code>{prop.prop}</code></td>
              <td><code>{prop.value}</code></td>
            </tr>
          )}
        />
      </table>
    </Div>
  )
}
