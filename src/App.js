import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route,} from'react-router-dom'
import Background from './Components/Background';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Acheivements from './Components/Acheivements';

function App() {
  return (
   <>
        <Router>
          
             <Navbar />
             <Background/>
         
         <Projects/>
        <Acheivements/>
        {/* <About/> */}
        <Home/>
        <Contact/>
        
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          {/* <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/acheive' element={<Acheivements/>} />
          <Route path='/bg' element={<Background/>} /> */}
          </Routes>
        </Router>
      

   </>
  );
}

export default App;
