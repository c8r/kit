import React from 'react'
import {
  Provider,
  Box,
  Heading,
  Button,
  Donut,
  ButtonCircle,
  ButtonOutline,
  Card,
  Image,
  Avatar,
  Circle,
  Badge,
  Dot,
  Switch
} from 'rebass'
import * as Rebass from 'rebass'
import {
  Library,
  Example,
  Head,
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
    <Library
      useFrame={false}
      basename="/Library">

      {/* renders in iframe when useFrame is true */}
      <Head>
        <title>Hello Library</title>
        <link rel='stylesheet' href='/styles.css' />
      </Head>

      <Example name="Heading">
        <Heading>Heading</Heading>
      </Example>

      <Example name="Button">
        <Provider>
          <Button>Button</Button>
        </Provider>
      </Example>
      <Example name="ButtonCircle">
        <ButtonCircle>ButtonCircle</ButtonCircle>
      </Example>
      <Example name="ButtonOutline">
        <ButtonOutline>ButtonOutline</ButtonOutline>
      </Example>
      <Example name="Green Button">
        <Button bg="green">Button</Button>
      </Example>
      <Example name="Red Button">
        <Button bg="red">Button</Button>
      </Example>

      <Example name="Badge">
        <Badge>Badge</Badge>
      </Example>
      <Example name="Circle">
        <Circle>A</Circle>
      </Example>
      <Example name="Switch">
        <Switch checked />
      </Example>
      <Example name="Dot">
        <Dot bg="black" />
        <Dot />
        <Dot />
      </Example>
      <Example name="Card">
        <Card>Hello Card</Card>
      </Example>
      <Example name="Avatar">
        <Avatar src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
      </Example>
      <Example name="Image">
        <Image src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
      </Example>

      <Example name="Donut">
        <Donut value={2 / 3} color="tomato" />
        <Detail>
          {/* throwing errors
          <Markdown components={Rebass}>
            {`# Hello, world! <Donut />`}
          </Markdown>
          */}
          <Matrix
            x={[
              { color: 'blue ' },
              { color: 'pink' },
              { color: 'tomato' },
              { color: 'purple' }
            ]}
            y={[
              { value: 1 / 5 },
              { value: 1 / 4 },
              { value: 1 / 3 },
              { value: 3 / 4 }
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
        <LiveEditor scope={Rebass} code="<Button>hello</Button>" />
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
            }}
          >
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
        <Diff>
          <Heading color="pink">Hello</Heading>
          <Heading color="purple" fontSize={3} mt={1}>
            Hello
          </Heading>
        </Diff>
      </Example>
      <Example name="State">
        <State
          count={0}
          render={({ count, update }) => (
            <React.Fragment>
              <pre>{'<State />'}</pre>
              <samp>{count}</samp>
              <button onClick={e => update(s => ({ count: s.count - 1 }))}>
                -
              </button>
              <button onClick={e => update(s => ({ count: s.count + 1 }))}>
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
