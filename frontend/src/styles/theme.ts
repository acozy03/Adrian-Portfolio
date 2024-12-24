import { createTheme, PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
          text: {
            primary: '#333333',
            secondary: '#666666',
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#f48fb1',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
          },
        }),
  },
});

export const getTheme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
export default getTheme; 