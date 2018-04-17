import { h, renderToString, Text } from 'ink'
import importJsx from 'import-jsx'
import test from 'ava'

const Ui = importJsx('./ui')

test('renders compositor text', t => {
  const result = renderToString(<Ui />)

  t.regex(result, /Compositor/)
})
