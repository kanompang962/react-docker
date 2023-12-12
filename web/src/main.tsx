import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ThemeProvider is required for Material-UI
import { ThemeProvider } from '@mui/material'

// Import the theme
import theme from './config/theme'
import { ProSidebarProvider } from 'react-pro-sidebar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ProSidebarProvider>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
   </ProSidebarProvider>
  </React.StrictMode>,
)
