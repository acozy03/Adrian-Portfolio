import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function Footer() {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Adrian Cosentino. All rights reserved. Thank you for visiting!
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer

