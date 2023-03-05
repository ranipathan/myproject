
import { Route, Routes } from 'react-router-dom';


import Navbar from './components/styles/Navbar';
import Login from './components/styles/Login';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return( <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Home" element={<About/>}/>
  <Route path="/Programs" element={<Programs/>}/>
  <Route path="/Courses" element={<Courses/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Login" element={<Login/>}/>
  </Routes>
  
  <Sidebar/>
  </>
    
  )
}

export default App;
