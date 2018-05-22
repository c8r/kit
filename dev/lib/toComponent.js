import { isElement } from 'react-dom/test-utils'

export default elementOrComponent =>
  typeof elementOrComponent === 'function'
    ? elementOrComponent
    : isElement(elementOrComponent)
      ? () => elementOrComponent
      : () => false
