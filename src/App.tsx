import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { configureStore } from '@reduxjs/toolkit';
import artistReducer from './features/artistSlice';


const store = configureStore({
  reducer: {
    artists: artistReducer,
  },
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App
