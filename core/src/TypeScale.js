import React, { Fragment } from 'react'
import nano from 'nano-style'
import { Divider, Flex, Text } from './ui'

const Row = nano(Flex)({ minHeight: '64px' })

export const Step = nano(Text)({
  fontWeight: 'normal',
  lineHeight: 1.25,
  minWidth: '0px',
  flex: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

export const StepLabel = nano(Text)({
  display: 'inline-block',
  fontWeight: 'normal'
})

export const Specimen = ({ text, value, n, fontFamily, color }) => (
  <Fragment>
    <Row mb={2} align="baseline">
      <Step
        style={{
          fontFamily,
          fontSize: value,
          color
        }}
      >
        <StepLabel f={0} mr={2} children={n} /> {text}
      </Step>
      <Flex w={96} style={{ alignSelf: 'baseline' }} align="baseline" ml="auto">
        <Text mr={1}>{value}</Text>
        <Text f={0}>px</Text>
      </Flex>
    </Row>
  </Fragment>
)

const TypeScale = ({ text, value, fontFamily, color }) => (
  <Fragment>
    {[...value]
      .reverse()
      .map((fontSize, i) => (
        <Specimen
          key={fontSize}
          n={value.length - 1 - i}
          value={fontSize}
          text={text}
          fontFamily={fontFamily}
          color={color}
        />
      ))}
  </Fragment>
)
TypeScale.defaultProps = {
  text: 'Aa The quick brown fox jumps over the lazy dog'
}

export default TypeScale
