'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { PaletteMode } from '@mui/material'
import { getDesignTokens } from '../styles/theme'

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light' as PaletteMode,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <html lang="en">
      <body>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  )
}

export const useColorMode = () => useContext(ColorModeContext);

