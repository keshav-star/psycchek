import './App.css';
import Welcome from './components/Welcome'
import { HashRouter, Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';
import Menu from './components/Menu';
import Appointment from './components/appointment/Appointment';
import Showappt from './components/appointment/Showappt';
import About from './about/About';
// import Usefullinks from './components/Usefullinks';
import React from 'react';
import Footer from './components/Footer';

function App() {
  
  return (
    <HashRouter>
      <Menu/>
      <div className="sect ">
        <div className="left d-none d-md-block">
          {/* <Usefullinks/> */}
        </div>
        <div className='right'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/showappt" element={<Showappt />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </div>
      </div>
      <Footer/>
    </HashRouter>
  );
}

export default App;
