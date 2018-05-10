import React from 'react'
import {
  Provider,
  Box,
  Heading,
  Button,
  Donut
} from 'rebass'
import * as Rebass from 'rebass'
import {
  Library,
  Example,
  XRay,
  Frame,
  LiveEditor,
  PropsForm,
  Font,
  Responsive,
  TypeScale,
  Cartesian,
  Matrix,
  Markdown,
  Detail,
  Diff,
  State
} from '../src'

const Demo = props => (
  <Provider>
    <Library>
      <Example name="Heading">
        <Heading>Hello</Heading>
      </Example>
      <Example name="Button">
        <Button>Hello</Button>
      </Example>
      <Example name="Donut">
        <Donut
          value={2/3}
          color='tomato'
        />
        <Detail>
          <Markdown components={Rebass}>
            {`# Hello, world! <Donut />`}
          </Markdown>
          <Matrix
            x={[
              { color: 'blue '},
              { color: 'pink' },
              { color: 'tomato' },
              { color: 'purple' }
            ]}
            y={[
              { value: 1/5 },
              { value: 1/4 },
              { value: 1/3 },
              { value: 3/4 }
            ]}
            component={Donut}
          />
        </Detail>
      </Example>
      <Example name="XRay">
        <XRay>
          <Heading>XRay</Heading>
        </XRay>
      </Example>
      <Example name="font">
        <Font fontFamily="&quot;Ubuntu&quot;, sans-serif">Font</Font>
      </Example>
      <Example name="LiveEditor">
        <LiveEditor
          scope={Rebass}
          code="<Button>hello</Button>"
        />
      </Example>
      <Example name="TypeScale">
        <TypeScale value={[14, 16, 20, 24, 32, 48, 64, 80]} />
      </Example>
      <Example name="Responsive">
        <Responsive zoom={0.75}>
          <div
            style={{
              padding: 16,
              fontSize: 32,
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'tomato'
            }}>
            Hello
          </div>
        </Responsive>
      </Example>
      <Example name="PropsForm">
        <PropsForm>
          <Button bg="tomato">Hello</Button>
          <PropsForm.Input name="children" />
          <PropsForm.Select name="bg">
            <option />
            <option>tomato</option>
            <option>magenta</option>
            <option>cyan</option>
          </PropsForm.Select>
        </PropsForm>
      </Example>
      <Example name="Cartesian">
        <Cartesian
          m={4}
          fontSize={[1, 2, 3]}
          bg={['blue', 'pink', 'tomato', 'purple']}
          children={['Hello, world!', 'Beep']}
          component={Button}
        />
      </Example>
      <Example name="Diff">
        <Diff
          a={<Heading color='pink'>Hello</Heading>}
          b={<Heading color='purple' fontSize={3} mt={1}>Hello</Heading>}
        />
      </Example>
      <Example name='State'>
        <State
          count={0}
          render={({ count, update }) => (
            <React.Fragment>
              <pre>{'<State />'}</pre>
              <samp>{count}</samp>
              <button
                onClick={e => update(s => ({ count: s.count - 1 }))}>
                -
              </button>
              <button
                onClick={e => update(s => ({ count: s.count + 1 }))}>
                +
              </button>
            </React.Fragment>
          )}
        />
      </Example>
    </Library>
  </Provider>
)

export default Demo
