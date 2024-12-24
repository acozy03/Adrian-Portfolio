import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { ColorModeContext } from '../sections/portfolio'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function ResponsiveAppBar() {
  const theme = useTheme()
  const { toggleColorMode, mode } = useContext(ColorModeContext)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={4}
      sx={{
        backgroundColor: trigger
          ? theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, 0.8)'
            : 'rgba(18, 18, 18, 0.8)'
          : theme.palette.mode === 'light'
          ? 'rgba(255, 255, 255, 0.5)'
          : 'rgba(18, 18, 18, 0.5)',
        transition: theme.transitions.create(['background-color', 'box-shadow']),
        backdropFilter: 'blur(20px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ mr: 2 }} onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                sx={{
                  my: 2,
                  color: 'text.primary',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
