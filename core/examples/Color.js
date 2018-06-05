import React from 'react'
import { Button } from 'rebass'
import { Color } from '../src'

const colors = {
  red: 'red',
  gray: {
    light: ['#fafafa', '#f5f5f5'],
    dark: ['#555', '#111']
  },
  brand: {
    black: 'black',
    white: 'white',
    tomato: 'tomato'
  }
}

export default () => <Color colors={colors} />
