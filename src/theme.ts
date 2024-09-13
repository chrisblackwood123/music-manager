import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    mode: 'dark',  // Dark mode or 'light' for light mode
    primary: {
      main: '#00A8E8',  // Neon Blue as primary color
    },
    secondary: {
      main: '#FF007A',  // Vibrant Pink as secondary color
    },
    background: {
      default: '#121212',  // Dark background
      paper: '#1C1C1E',  // Lighter background for paper elements
    },
    text: {
      primary: '#FFFFFF',  // Primary text color (white)
      secondary: '#E0E0E0',  // Secondary text color (light gray)
    },
  },
});

export default theme;