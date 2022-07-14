import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import {Routes, Route, BrowserRouter,Link} from 'react-router-dom'
import { States } from '../components/States/States'
import { Cities } from '../components/Cities/Cities'
import { Fks } from '../components/Fk/Fks'
import { Recommandations } from '../components/Recommandations/Recommandations'
import HomePage from '../components/Home/HomePage'
import { PsikologjiA } from '../components/Psikologji/PsikologjiA'
import { Specializimet } from '../components/Specializimet/Specializimet'
import { Kerkesat } from '../components/Kerkesat/Kerkesat'
import { Financat } from '../components/Financa/Financat'
import { Asistentet } from '../components/Asistent/Asistentet'
import { Punet } from '../components/PunaDhePraktika/Punet'
// import {Drejtimet} from '../components/Drejtimet/Drejtimet'
import {Infot} from '../components/Info/Infot'
// import App  from '../components/About/App'
import {Administratat} from '../components/Administrata/Administratat'
import {Profesors} from '../components/Professor/Profesors'
import {Login} from '../components/auth/Login/Login'
import {Signup} from '../components/auth/Signup/Signup'
import { Logout } from '../components/auth/LogOut/Logout'

const Home=()=> {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
    return (
    <>
      <NavBar toggle={toggle}/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/* <Logout onClick={Logout} /> */}
      <HomePage/>
      {/* <Login/> */}
      <States/> 
      <Cities/>
      <Fks/>
      {/* <Drejtimet/> */}
      <Specializimet/>
      <Profesors/>
      <Asistentet/>
      <Administratat/>
      <Recommandations/>
      <Punet/>
      <Infot/>
      <Kerkesat/>
      <Financat/>
      <PsikologjiA/>
      {/* <App/> */}
      </>
    )
}
     
export default Home;