import './App.css';
import Welcome from './components/Welcome'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';
import Menu from './components/Menu';
import Appointment from './components/Appointment';
import About from './about/About';
import Usefullinks from './components/Usefullinks';

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <div className="sect">
        <div className="left">
          <Usefullinks/>
        </div>
        <div className='right '>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
