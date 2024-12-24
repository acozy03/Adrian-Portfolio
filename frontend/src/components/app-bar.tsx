import { useContext, useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fade from '@mui/material/Fade'
import { useTheme } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { ColorModeContext } from '../sections/portfolio'
import { Footer } from './footer'

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
    threshold: 100,
  })
  const [showFooter, setShowFooter] = useState(false)
  const [backToTopPosition, setBackToTopPosition] = useState<'bottom' | 'top'>('bottom')

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const pageHeight = document.documentElement.scrollHeight
      const isNearBottom = scrollPosition >= pageHeight - 10 // 10px threshold
      setShowFooter(isNearBottom)
      setBackToTopPosition(isNearBottom ? 'top' : 'bottom')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
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
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'maroon',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    '&:active': {
                      transform: 'scale(1.1)',
                      backgroundColor: 'transparent',
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

      <Fade in={trigger}>
        <Box
          onClick={handleBackToTop}
          role="presentation"
          sx={{
            position: 'fixed',
            ...(backToTopPosition === 'bottom'
              ? { bottom: 16, left: '50%', transform: 'translateX(-50%)' }
              : { top: 80, right: 16 }),
            transition: 'all 0.3s ease-in-out',
            zIndex: 1100,
          }}
        >
          <IconButton
            aria-label="back to top"
            sx={{
              backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(18, 18, 18, 0.8)',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(18, 18, 18, 1)',
              },
              color: 'text.primary',
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Fade>

      <Fade in={showFooter}>
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <Footer />
        </Box>
      </Fade>
    </>
  )
}

