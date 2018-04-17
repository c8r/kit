import { h, renderToString, Text } from 'ink'
import importJsx from 'import-jsx'
import test from 'ava'

const Ui = importJsx('./ui')

test('output', t => {
  const actual = renderToString(<Ui />)
  const expected = renderToString(<Text green>I love Ink</Text>)

  t.is(actual, expected)
})
