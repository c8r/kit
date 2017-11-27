import uniq from 'lodash.uniqby'
import getProps from '@compositor/get-jsx-props'

export default (examples = []) => {
  const jsx = `
    <div>
      ${examples.join(' ')}
    </div>
  `

  const props = getProps(jsx)

  return uniq(props, p => `${p.prop}-${p.value}`)
    .filter(p => p.prop !== 'children')
}
