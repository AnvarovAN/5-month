import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FetchContextProvider from './Context/FetchContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchContextProvider>
      <App/>
    </FetchContextProvider>
  </React.StrictMode>
)
