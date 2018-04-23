import snapshotExamples from '../index'
import * as examples from './examples'

test('exports a function', () => {
  expect(typeof snapshotExamples).toBe('function')
})

snapshotExamples(examples)
