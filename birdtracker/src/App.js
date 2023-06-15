import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
  );
}

export default App;
