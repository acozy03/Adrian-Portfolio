'use client'

import { ResponsiveAppBar } from '../componenets/app-bar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Home() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container>
        <Box id="home" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h2">Welcome to My Portfolio</Typography>
        </Box>
        <Box id="about" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h3">About Me</Typography>
        </Box>
        <Box id="projects" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h3">My Projects</Typography>
        </Box>
        <Box id="contact" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h3">Contact Me</Typography>
        </Box>
      </Container>
    </Box>
  )
}

