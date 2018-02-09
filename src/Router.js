import {
  BrowserRouter,
  StaticRouter
} from 'react-router-dom'

export default typeof document === 'undefined' ? StaticRouter : BrowserRouter
