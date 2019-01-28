import * as React from 'react'
import { render } from 'react-dom'
import { hot } from "react-hot-loader"

import App from './App'

if (process.env.NODE_ENV !== 'production') {
  App = hot(module)(App)
}

render(<App />, document.getElementById('root'))
