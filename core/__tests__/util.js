import { flatten } from '../src/util'

test('flatten flattens an object', () => {
  const result = flatten({
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
  })

  expect(result).toMatchSnapshot()
})
