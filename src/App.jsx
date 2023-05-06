
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Home from './Home/Home'


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path ="/*" element ={<Navigate to ="/" replace/>}/>
        </Routes>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
