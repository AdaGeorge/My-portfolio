import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactScreen from './components/contactScreen/ContactScreen'
import AboutMeScreen from './components/about me/AboutMeScreen'
import HomeScreen from './components/home/HomeScreen'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/contact' element={<ContactScreen/>}/>
        <Route path='/aboutme' element={<AboutMeScreen/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
