import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
