import React from 'react'
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
  <Library>
    <Example name="h1">
      <XRay>
        <h1>hello</h1>
      </XRay>
    </Example>
    <Example name="font">
      <Font fontFamily="&quot;Ubuntu&quot;, sans-serif">Font</Font>
    </Example>
    <Example name="button">
      <LiveEditor code="<button>hello</button>" />
    </Example>
    <Example name="TypeScale">
      <TypeScale value={[14, 16, 20, 24, 32, 48, 64, 80]} />
    </Example>
    <Example name="Responsive">
      <Responsive zoom={0.75}>
        <div
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            padding: 16,
            color: 'white',
            backgroundColor: 'tomato'
          }}
        >
          Hello
        </div>
      </Responsive>
    </Example>
    <Example name="PropsForm">
      <PropsForm>
        <button color="tomato">Hello</button>
        <PropsForm.Input name="children" />
        <PropsForm.Select name="color">
          <option />
          <option>tomato</option>
          <option>magenta</option>
          <option>cyan</option>
        </PropsForm.Select>
      </PropsForm>
    </Example>
    <Example name="PropsFormAlt">
      <PropsForm>
        <button color="tomato">Hello</button>
        <PropsForm.Input name="children" />
        <PropsForm.Select name="color">
          <option />
          <option>tomato</option>
          <option>magenta</option>
          <option>cyan</option>
        </PropsForm.Select>
      </PropsForm>
    </Example>
  </Library>
)

export default Demo
