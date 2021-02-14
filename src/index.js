import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import ErrorBoundary from './components/error-boundary'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  window.document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
