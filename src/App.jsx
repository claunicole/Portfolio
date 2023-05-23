
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import MainPage from './MainPage/MainPage'
import Services from './Services/Services'


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path ="/*" element ={<Navigate to ="/" replace/>}/>
        </Routes>
    
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
