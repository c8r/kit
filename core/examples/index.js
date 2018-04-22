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
  TypeScale
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
    </Library>
  </Provider>
)

export default Demo
