import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import getTheme from './styles/theme'
import Home from './sections/portfolio'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: 'light',
})

function Main() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const theme = getTheme(mode)

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <React.StrictMode>
      <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Home />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.StrictMode>
  )
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<Main />)
} else {
  console.error('Root element not found')
}
