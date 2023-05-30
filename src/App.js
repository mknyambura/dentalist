import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </div>
  );
}

export default App;
