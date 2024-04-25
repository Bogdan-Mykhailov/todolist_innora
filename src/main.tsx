import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.scss'
import { HashRouter } from 'react-router-dom'
import { store } from './services'
import { Provider } from 'react-redux'

ReactDOM.createRoot( document.querySelector( '#root' )! ).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
