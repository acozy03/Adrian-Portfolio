'use client'

import React, { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { getTheme } from '../styles/theme'
import ResponsiveAppBar from '../components/app-bar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: 'light',
})

export default function Home() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const theme = getTheme(mode)

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            minHeight: '100vh',
            transition: theme.transitions.create(['background-color', 'color']),
          }}
        >
          <ResponsiveAppBar />
          <Container>
            <Box
              id="home"
              sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h2">Welcome to My Portfolio</Typography>
            </Box>
            <Box
              id="about"
              sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3">About Me</Typography>
            </Box>
            <Box
              id="projects"
              sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3">My Projects</Typography>
            </Box>
            <Box
              id="contact"
              sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3">Contact Me</Typography>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
