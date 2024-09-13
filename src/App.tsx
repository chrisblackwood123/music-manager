import './App.css'
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from '@mui/material/styles';
// @ts-ignore
import theme from './theme';
import artistReducer from './features/artistSlice';
import NavTab from './components/NavTab';

const store = configureStore({
  reducer: {
    artists: artistReducer,
  },
});

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
        <div className="w-screen h-screen bg-gray-900 text-white">
          <NavTab />
          </div>
        </ThemeProvider>
    </>
  );
}


export default App
