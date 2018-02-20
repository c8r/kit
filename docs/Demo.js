import React from 'react'
import {
  Provider,
  Library,
  Example,
  XRay,
  Frame,
  LiveEditor,
  Knobs,
  Responsive,
} from '../src'

const Demo = props => (
  <Provider
    fontFamily='"Roboto Mono", monospace'
    color='#236'
    scope={{ XRay }}
  >
    <Library>
      <Library.Nav />
      <Example name='h1'>
        <XRay>
          <h1>hello</h1>
        </XRay>
      </Example>
      <Example name='button'>
        <LiveEditor
          code='<button>hello</button>'
        />
        <Frame>
          <button>hello</button>
        </Frame>
      </Example>
      <Example name='Responsive'>
        <Responsive zoom={0.75}>
          <div
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              padding: 16,
              color: 'white',
              backgroundColor: 'tomato'
            }}>
            Hello
          </div>
        </Responsive>
      </Example>
      <Example name='Knobs'>
        <Knobs>
          <button color='tomato'>Hello</button>
          <Knobs.Input name='children' />
          <Knobs.Select name='color'>
            <option></option>
            <option>tomato</option>
            <option>magenta</option>
            <option>cyan</option>
          </Knobs.Select>
        </Knobs>
      </Example>
    </Library>
  </Provider>
)

export default Demo
