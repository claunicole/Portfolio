
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import InfoContainer from './InfoContainer/InfoContainer'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<InfoContainer/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
