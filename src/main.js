import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const renderApp = RootComponent => render((
  <AppContainer>
    <RootComponent />
  </AppContainer>
), document.getElementById('root'))

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => renderApp(App))
}
