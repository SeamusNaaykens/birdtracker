import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
