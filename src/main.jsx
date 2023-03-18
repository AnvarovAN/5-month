import React from 'react'
import ReactDOM from 'react-dom/client'
import Skeleton from "./Skeleton"
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Skeleton />
    </StyledEngineProvider>
  </React.StrictMode>,
)
