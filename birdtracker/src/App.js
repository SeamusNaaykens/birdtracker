import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Homepage from './pages/Homepage/Homepage.js';
import BirdTracker from './pages/BirdTracker/BirdTracker.js';
import Birdpage from './pages/Birdpage/Birdpage';
import Bucketlist from './pages/Bucketlist/Bucketlist';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/birdtracker' element={<BirdTracker />} />
        <Route path='/birdtracker/id' element={<Birdpage/>}/>
        <Route path='/bucketlist' element={<Bucketlist />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
